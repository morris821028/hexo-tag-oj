var fs = require('fs');
var path = require('path');
var publicDir = hexo.public_dir;
var sourceDir = hexo.source_dir;
var htmlTag = hexo.util.html_tag;
var route = hexo.route;
/**
 * OJ tag
 *
 * Syntax:
 *   {% oj ojType probNum userId %}
 */
hexo.extend.tag.register('oj', function(args, content) {
	var ojType = args[0];
	var probNum = args[1] || "";
	var userId = args[2] || "";
	var owner = args[1] || "";
	var repo = args[2] || "";
	if (ojType == 'scarky') {
		return '<script type="text/javascript" src="http://scarky.com/widget/get/' + probNum + '/"></script>';
	} else if (ojType == 'uva') {
		return '<script type="text/javascript" src="http://morris821028.github.io/hexo-tag-oj/jquery.oj.js"></script>' +
			'<div class="oj-widget" data-prob="uva/' + probNum + '/' + userId + '"></div>';
	} else if (ojType == 'github') {
		return '<script type="text/javascript" src="http://morris821028.github.io/hexo-tag-oj/jquery.githubRepoWidget.js"></script>' +
			'<div class="github-widget" data-repo="' + owner + '/' + repo + '"></div>';
	} else if (ojType == 'hex') {
		console.log(content);
	}
	return "<div>" + 'OJ NOT FOUND' + '</div>';
});

function getBackground(row, eachrow) {
	var background = '';
	for (var i = 0; i < (row + 1) * (eachrow + 3); i++) {
		var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
		var showurl = '',
			displayClass = 'hex';
		if (i % (eachrow + 3) == 0)
			displayClass += " hex-gap", row;
		tag = hexheader + '<div class="inner"></div>';
		tag = '<div class="' + displayClass + '" style="background-image: url(' + showurl + ');">' + tag + '</div>';
		background += tag;
	}
	background = '<div class="hex-background">' + background + '</div>';
	return background;
}

function getHexContainer(html, row, eachrow, linkId) {
	html = '<div class="hex-container">' + getBackground(row, eachrow) + html + '</div>';
	html = '<li class="als-item" data-linkId="' + linkId + '">' + html + '</li>';
	return html;
}

function getBackLink(linkId, text) {
	var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
	var html = '',
		tag = '',
		showurl = '',
		displayClass = 'hex hex-back';
	var tag = hexheader + '<div class="inner" data-linkBtn="' + linkId + '"><h4>' + text + '</h4><hr /></a></div>';
	tag = '<div class="' + displayClass + '" data-original="' + showurl + '" style="background-image: url(' + ');">' + tag + '</div>';
	html += tag;
	return html;
}

function getAlsItem(images, options) {
	var html = '',
		alsview = '',
		eachrow = options.eachrow,
		row = 0,
		index = 0,
		imgCount = 0,
		themePage = 0;
	for (var i in images) {
		var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>',
			tag = '',
			imgAttr = images[i],
			showurl = '',
			displayClass = 'hex';

		if (imgAttr['title']) {
			var linkBtn = options.themePage[index];
			tag = hexheader + '<div class="inner" data-linkBtn="' + linkBtn + '">' + imgAttr['title'] + '</div>';
			if (imgAttr['class'])
				displayClass += " " + imgAttr['class'];
		} else {
			for (var j in imgAttr) {
				tag += '<p><a href="' + imgAttr[j] + '" class="hex-hover"><i class="icon-download"></i>' + j + '</a></p>';
				showurl = imgAttr[j];
			}
			tag = '<span class="hex-caption hex-simple-caption">' + tag + '</span> ';
			tag = hexheader + '<div class="inner">' + tag + '</div>';
		}

		if (imgCount % (eachrow + 1) == 0) {
			if (html.length > 0) {
				options.alsPage++;
				html += getBackLink(1, "NEXT");
				html = getHexContainer(html, row, eachrow, -options.alsPage);
				alsview += html;
				imgCount = 0;
				row = 0;
				themePage++;
			}
			displayClass += " hex-gap";
			html = '';
			row++;
		}
		index++;
		imgCount++;
		displayClass += ' lazy';
		tag = '<div class="' + displayClass + '" data-original="' + showurl + '" style="background-image: url(' + ');">' + tag + '</div>';
		html += tag;
	}
	if (html.length > 0) {
		options.alsPage++;
		if (!options.head)
			html += getBackLink(-options.alsPage, "THIS END");
		html = getHexContainer(html, row, eachrow, -options.alsPage);
		alsview += html;
		themePage++;
	}
	options.themePage.push(themePage);
	options.index++;
	return alsview;
}
hexo.extend.tag.register('ojblock', function(args, content) {
	var ojType = args[0];
	if (ojType == "hex") {
		content = JSON.parse(content);
		var data = {
			alsPage: 0,
			index: 1,
			eachrow: 7,
			themePage: [],
			head: false
		};
		var album = [],
			alsItem = '';
		for (var i in content['album'])
			album.push(content['album'][i]['cover']);
		for (var i in content['album'])
			alsItem += getAlsItem(content['album'][i]['photo'], data);
		data.themePage.unshift(1);
		for (var i = 0, sum = 0; i < data.themePage.length; i++) {
			sum += data.themePage[i];
			data.themePage[i] = sum;
		}
		data.head = true;
		album = getAlsItem(album, data);
		alsItem = album + alsItem;

		var alsview = '<div class="als-viewport"><ul class="als-wrapper">' + alsItem + '</ul></div>',
			left = '<span class="als-prev"><i class="icon-arrow-left" alt="prev" title="previous"></i></span>',
			right = '<span class="als-next"><i class="icon-arrow-right" alt="next" title="next"></i></span>';
		// var bullet = '<ul class="als-bullets"><li class="bullets-active">1</li><li>2</li><li>3</li><li>4</li></ul>';
		html = '<div class="als-container">' + alsview + left + right + /* bullet +*/ '</div>';
		return html;
	} else if (ojType == "works") {
		content = JSON.parse(content);
		var html = '';
		for (var i in content['works']) {
			var item = content['works'][i];
			var tag = '',
				header = '',
				inner = '',
				links = '';
			header = '<a class="image" style="background-image: url(' + item.cover + ')"></a>';
			header = '<div class="header">' + header + '</div>';
			inner = '<h3>' + item.title + '</h3><hr/>';
			inner += '<p class="description">' + item.description + '</p>';
			if (item.demo) {
				for (var j in item.demo)
					links += '<li><a href="' + item.demo[j] + '">Demo</a></li>';
			}
			if (item.video) {
				for (var j in item.video)
					links += '<li><a href="' + item.video[j] + '">Video</a></li>';
			}
			if (item.download) {
				for (var j in item.download)
					links += '<li><a href="' + item.download[j] + '">Download</a></li>';
			}
			if (item.link) {
				for (var j in item.link)
					links += '<li><a href="' + item.link[j] + '">Link</a></li>';
			}
			links = '<ul class="links">' + links + '</ul>';
			inner += links;
			inner = '<div class="inner">' + inner + '<div>';
			tag = header + inner;
			tag = '<li>' + tag + '</li>';
			html += tag;
		}
		html = '<ul class="wg-item">' + html + '</ul>';
		html = '<div class="wg-container"><hr/>' + html + '</div>';
		return html;
	} else {
		return '<div> NOT FOUND </div>';
	}
}, true);