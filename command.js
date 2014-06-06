var fs = require('fs'),
	path = require('path');
    themeDir = hexo.theme_dir, 
    themeScriptDir = path.resolve(themeDir, "script"),
    pluginScriptDir = path.resolve(__dirname, "widget");

var ojScriptName = "jquery.oj.js",
	ojGitHubScriptName = "jquery.githubRepoWidget.js";
