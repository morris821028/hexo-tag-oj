$(document).ready(function(){
	var i = 0;	

	$('.oj-widget').each(function(){
		if(i == 0) $('head').append(
			'<style type="text/css">'
			+'.oj-box *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}'
			+'.oj-box {font-family:"Georgia","Helvetica Neue", "Helvetica";font-size:13px;line-height:18px;background: rgb(46, 46, 46);border:1px solid #ddd;color:#666;border-radius:3px}'
			+'.oj-box a{color:#4183C4;border:0;}'
			+'.oj-box .oj-box-logo {text-align:center; line-height:50px; float: left; width: 50px; height: 50px; background: rgba(195, 23, 86, 1); color: white; font-size: 20px}'
			+'.oj-box .oj-box-title{position:relative;border-bottom:1px solid #ddd;border-radius:3px 3px 0 0;background:-moz-linear-gradient(rgb(133, 125, 126), rgb(85, 76, 78));background:-webkit-linear-gradient(rgb(133, 125, 126), rgb(85, 76, 78));}'
			+'.oj-box .oj-box-title h3 {word-wrap:break-word;font-weight:normal;font-size:16px;color:gray;margin:0;padding:10px 10px 10px 30px; width: auto;}'
			+'.oj-box .oj-box-title h3 .repo{font-weight:bold}'
			+'.oj-box .oj-box-title h3 span {color:white; padding:0.5em}'
			+'.oj-box .oj-box-title .oj-stats {float:right;position:absolute;top:8px;right:10px;font-size:11px;font-weight:bold;line-height:21px;height:auto;min-height:21px;background: #f5f5f5;}'
			+'.oj-box .oj-box-title .oj-stats div {display:inline-block;height:21px;color:#666;border:1px solid #ddd;border-radius:3px;padding: 5px;background: #f5f5f5;}'
			+'.oj-box .oj-box-title .oj-stats span {padding: 5px;}'
			+'.oj-box .oj-box-title .oj-stats .ac {color: white; background: rgb(0, 170, 0) no-repeat}'
			+'.oj-box .oj-box-content {padding:10px;font-weight:300;}'
			+'.oj-box .oj-box-content p {margin:0;color: white; display: inline-block;}'
			+'.oj-box .oj-box-content .link{font-weight:bold color: white;}'
			+'.oj-box .oj-box-content a {color: white;}'
			+'.oj-box .oj-box-content .oj-stats2 {display:inline-block;}'
			+'.oj-box .oj-box-content .oj-stats2 ul {margin:0;padding:0;overflow:hidden;height:172px;width:289px;list-style:none;position:relative;background: #f5f5f5;border-bottom: 5px solid #999; border-radius: 0.5em;}'
			+'.oj-box .oj-box-content .oj-stats2 ul li {height:150px;list-style:none;margin:12px;float:left;width:24px;border-top:1px solid #eee}}'
			+'.oj-box .oj-box-content .oj-stats2 li span {position:absolute;top:1em;left:-9999px;}'
			+'.oj-box .oj-box-content .oj-stats2 li div {position:relative;top:-36px; left:-12px; color: black; text-align:center; width: 50px;}'
			+'.oj-box .oj-box-content .oj-stats2 li:hover span {left:1em;}'
			+'.oj-box .oj-box-download {float:right; position:relative;border-top:1px solid #ddd;border-radius:0 0 3px 3px;height:auto;min-height:24px; display: inline-block;}'
			+'.oj-box .oj-box-download .updated{word-wrap:break-word;margin:0;font-size:11px;color:#666;line-height:24px;font-weight:300;width:auto}'
			+'.oj-box .oj-box-download .updated strong{font-weight:bold;color:#000}'
			+'.oj-box .oj-box-download .download{width:50px; fheight:24px;line-height:24px;font-size:12px;color:#666;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,0.9);padding:2px 10px;border:1px solid #ddd;border-bottom-color:#bbb;border-radius:3px;background:#f5f5f5;background:-moz-linear-gradient(#f5f5f5,#e5e5e5);background:-webkit-linear-gradient(#f5f5f5,#e5e5e5);}'
			+'.oj-box .oj-box-download .download:hover{color:#527894;border-color:#cfe3ed;border-bottom-color:#9fc7db;background:#f1f7fa;background:-moz-linear-gradient(#f1f7fa,#dbeaf1);background:-webkit-linear-gradient(#f1f7fa,#dbeaf1);}'
			+'.oj-box .oj-box-download .link {color: black;}'
			+'.oj-rank {display:inline-block; padding: 5px;}'
			+'.oj-rank table { background: #f5f5f5;border-collapse: separate;box-shadow: inset 0 1px 0 #fff;font-size: 12px;line-height: 24px; text-align: left;border-bottom: 5px solid #999; border-radius: 0.5em; padding: 0px;}'
			+'.oj-rank table thead tr th { background: linear-gradient(#777, #444);border-left: 1px solid #555;border-right: 1px solid #777;border-top: 1px solid #555;border-bottom: 1px solid #333;box-shadow: inset 0 1px 0 #999;color: #fff; font-weight: bold; position: relative;text-shadow: 0 1px 0 #000; padding-bottom: 0em; padding: 0.5em;}'
			+'.oj-rank table thead tr th:first-child {	border-left: 1px solid #777;box-shadow: inset 1px 1px 0 #999;}'
			+'.oj-rank table thead tr th:last-child {	box-shadow: inset -1px 1px 0 #999;}'
			+'.oj-rank table thead tr th:after { background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));}'
			+'.oj-rank table tbody tr td {padding: 0px; border-spacing: 6px; text-align:center;}'
			+'.oj-rank table tbody tr td:first-child {box-shadow: inset 1px 0 0 #fff;}'
			+'.oj-rank table tbody tr td:last-child {border-right: 1px solid #e8e8e8;box-shadow: inset -1px 0 0 #fff;}'
			+'@media (max-width: 767px) {'
			+'.oj-box .oj-box-title{height:auto;min-height:60px}'
			+'.oj-box .oj-box-title h3 .repo{display:block}'
			+'.oj-box .oj-box-title .oj-stats a{display:block;clear:right;float:right;}'
			+'.oj-box .oj-box-download{height:auto;min-height:46px;}'
			+'.oj-box .oj-box-download .download{top:32px;}'
			+'</style>'
		);
		i++;
		var $container = $(this), $widget,
			prob = $container.data('prob'),
			ojName = prob.split('/')[0],
			probNum = prob.split('/')[1],
			userId = prob.split('/')[2],
			vendorUrl = "http://uva.onlinejudge.org/index.php",
			vendorName = "",
			repoUrl = "",
			repoName = probNum + " - ";
		$widget = $(
			'<div class="oj-box repo">'
			+'<div class="oj-box-title">'
			+'<span class="oj-box-logo">UVa</span>'
			+'<h3>'
			+'<span>Online Judge</span>'
			+'<span>/<span>'
			+'<span class="prob-title">Unknown<span>'
			+'</h3>'
			+'<div class="oj-stats">'
			+'<div class="ac">AC Users<span class="stats-cnt">?</span></div>'
			+'</div>'
			+'</div>'
			+'<div class="oj-box-content">'
			+'<span class="oj-stats2">'
			+'<ul>'
			+'</ul>'
			+'</span> <span></span>'
			+'<span class="oj-rank">'
			+'<table>'
			+'<thead><th>Rank</th><th>User</th><th>Lang</th><th>Time</th></thead><tbody class="oj-rank-item"><tr><td>1</td><td>MM</td><td>C++</td><td>0.000</td></tr></tbody>'
			+'</table>'
			+'</span> <span></span>'
			+'<span class="oj-box-download">'
			+'<a class="download" href="' + repoUrl + '/zipball/master" title="Get an archive of this repository">Download as zip</a>'	
			+'</span>'
			+'<p class="description"><span></span></p>'
			+'<p class="link"></p>'
			+'</div>'
			+'</div>'
		);

		$widget.appendTo($container);
		var queryRank = function(probId) {
			$.ajax({
				url: 'http://uhunt.felix-halim.net/api/p/ranklist/' + probId + '/' + userId + '/2/2',
				success: function(results) {
					var rankList = results;
					var lang = ['ANSI', 'JAVA', 'C++', 'PASCAL', 'C++11'];
					var table = '';
					for(var i in rankList) {
						var item = rankList[i];
						table += '<tr>';
						table += '<td>' + item.rank + '</td>';
						table += '<td style="text-align:left;">' + item.name + '(' + item.uname + ')</td>';
						table += '<td>' + lang[item.lan - 1] + '</td>';
						table += '<td>' + (item.run /1000.0).toFixed(3) + '</td>';
						table += '</tr>';
					}
					$widget.find('.oj-rank-item').html(table);
				}
			});
		}

		$.ajax({
			url: 'http://uhunt.felix-halim.net/api/p/num/' + probNum,
			success: function(results) {
				var prob = results;
				var stats = ['ac', 'pe', 'wa', 'mle', 'tle', 're'];
				var barLabel = ['AC', 'PE', 'WA', 'MLE', 'TLE', 'RE'];
				var color = ['green', '#666633', 'red', '#9932cc', 'blue', '#00ffff'];
				var maxVal = 0, maxH = 100;
				var barChart = "";
				queryRank(prob.pid);
				for(var i in stats) {
					maxVal = Math.max(maxVal, prob[stats[i]]);
				}
				for(var i in stats) {
					var p = (1.0 - prob[stats[i]] * 1.0 / maxVal) * maxH;
					barChart += "<li style='border-top-width:" + Math.floor(p + 32) +"px; background:" + color[i] + ";'><div>" + barLabel[i] + "</div><div>" + prob[stats[i]] + "</div></li>";
				}
				var prob_src = "http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=" + prob.pid;
				var submit_src = "http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=submit_problem&problemid=" + prob.pid;
				var discuss_src = "http://acm.uva.es/board/search.php?keywords=" + prob.num;
				var description = '';
				description += '<div class="download"><a class="link" href=' + prob_src + '>Problem</a></div>';
				description += '<div class="download"><a class="link" href=' + submit_src + '>Submit</a></div>';
				description += '<div class="download"><a class="link" href=' + discuss_src + '>Discuss</a></div>';
				description += '';

				$widget.find('.oj-box-download').html(description);
				$widget.find('.oj-stats2 ul').html(barChart);
				$widget.find('.ac .stats-cnt').text(prob.dacu);
				$widget.find('.prob-title').text(prob.num + ' - ' + prob.title);
			}
		});

	});

});
