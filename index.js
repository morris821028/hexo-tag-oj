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

hexo.extend.tag.register('ojblock', function(args, content) {
	content.trim();
	var html = '';
	var images = content.split('}');
	for (var i in images) {
		var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
		var tag = '';
		if (images[i].trim().length <= 0)
			continue;
		var imgAttr = images[i] + '}',
			showurl = '',
			displayClass = 'hex';
		imgAttr = JSON.parse(imgAttr);
		if (imgAttr['title']) {
			tag = hexheader + '<div class="inner">' + imgAttr['title'] + '</div>';
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
		if (i % 7 == 0)
			displayClass += " hex-gap";

		tag = '<div class="' + displayClass + '" style="background-image: url(' + showurl + ');">' + tag + '</div>';
		html += tag;
	}
	html = '<div class="hex-container">' + html + '</div>';
	return html;
}, true);