var htmlTag = hexo.util.html_tag;

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
	}
	return "<div>" + 'OJ NOT FOUND' + '</div>';
});