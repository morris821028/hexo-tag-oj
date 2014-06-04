var htmlTag = hexo.util.html_tag;

/**
 * OJ tag
 *
 * Syntax:
 *   {% oj ojType problemId display %}
 */
hexo.extend.tag.register('oj', function(args, content){
    var ojType = args[0];
    var problemId = args[1] || "";
    var display = args[2] || "{}";

    if(ojType == 'scarky')
    	return '<script type="text/javascript" src="http://scarky.com/widget/get/' + problemId + '/"></script>';
   	return "<div>" + 'NOT FOUND' + '</div>';
});