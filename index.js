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
	var ojType = args[0];
	if (ojType == "hex") {
		content = '<script type="text/hex-gallery">' + content + '</script>';
		content = content + '<script src="http://morris821028.github.io/jquery-hex-gallery/js/jquery.hex.gallery.js" type="text/javascript"></script>';
		content = content + '<link rel="stylesheet" href="http://morris821028.github.io/jquery-hex-gallery/css/style.css">';
		return content;
	} else if (ojType == "works") {
		content = '<script type="text/works-gallery">' + content + '</script>';
		content = content + '<script src="http://morris821028.github.io/simple-works-gallery/js/script.js" type="text/javascript"></script>';
		content = content + '<link rel="stylesheet" href="http://morris821028.github.io/simple-works-gallery/css/style.css">';
		return content;
	} else {
		return '<div> NOT FOUND </div>';
	}
}, true);