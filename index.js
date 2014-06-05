var htmlTag = hexo.util.html_tag;

/**
 * OJ tag
 *
 * Syntax:
 *   {% oj ojType problemId display %}
 */
hexo.extend.tag.register('oj', function(args, content) {
	var ojType = args[0];
	var problemId = args[1] || "";
	var display = args[2] || "{}";
	var owner = args[1] || "";
	var repo = args[2] || "";
	if (ojType == 'scarky') {
		return '<script type="text/javascript" src="http://scarky.com/widget/get/' + problemId + '/"></script>';
	} else if (ojType == 'uva') {
		return '<script type="text/javascript" src="https://googledrive.com/host/0B7RwmWo93u-mTmVGRDB2aGhLQ3M"></script>' +
			'<div class="oj-widget" data-prob="uva/' + problemId + '"></div>';
	} else if (ojType == 'github') {
		return '<script type="text/javascript" src="https://googledrive.com/host/0B7RwmWo93u-mUmhQXy1Jb3dIdEE"></script>' +
			'<div class="github-widget" data-repo="' + owner + '/' + repo + '"></div>';
	}
	return "<div>" + 'OJ NOT FOUND' + '</div>';
});