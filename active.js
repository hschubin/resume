$(document).ready(function() {
	$("#nav div").mouseover(function() {
		$(this).next().css({"color":"#B7B8AD"});
		$(this).toTarget();
	}).mouseout(function() {
		$(this).next().css({"color":"#abcdef"});
	});

	var judge = true;	//判断是否停止动画
	$("#skills li").mouseover(function() {
		if(setTime) {
			clearTimeout(setTime);
		}
		if(judge) {
			$(this).css("background-color", "#fff")
				.siblings().css("background-color", "#abcdef");
			$(this).showExplanation();
		}
	}).mouseout(function() {
		if(judge) {
			$(this).hideExplanation();
		}
	}).click(function() {
		$(this).css("background-color", "#fff")
			.siblings().css("background-color", "#abcdef");
		judge = false;
		var text = $(this).text();
		for(var i=0; i < $(".skill").length; i++) {
			if($(".skill")[i].getAttribute("title") == text) {
				$($(".skill")[i]).fadeIn("slow")
					.siblings().css("display", "none");
			}
		}
	});	//展开、收起与悬停 second part 的 #explanation 部分
	$("#explanation li").mouseover(function() {
		if(setTime) {
			clearTimeout(setTime);
		}
		if(judge) {
			$(this).showExplanation();
		}
		for(var i=0; i<$("#skills li").length; i++) {
			var title = $(this).attr("title");
			if($("#skills li")[i].innerHTML == title) {
				$($("#skills li")[i]).css("background-color", "#fff");
			}
		}
	}).mouseout(function() {
		if(judge) {
			$(this).hideExplanation();
		}
	});
});


var scrol;	//导航的定位计时器

function scrolTo(target) {
	var step = 11;
	var local = $(window).scrollTop();
	var distance;
	target > local ?
		distance = Math.ceil((target - local) / step) :
		distance = Math.floor((target - local) / step);

	if(local == target) {
		clearInterval(scrol);
	} else if(distance < 2 && distance > -2) {
		$(window).scrollTop(target);
		clearInterval(scrol);
	} else {
		local += distance;
		$(window).scrollTop(local);
	}
}//将滚动条拖曳至指定位置的动画

$.fn.toTarget =function() {
	var target = 0;
	switch($(this).parent().attr("id")) {
		case "di1": target = 0; break;
		case "di2": target = 400; break;
		case "di3": target = 800; break;
		case "di4": target = 1200; break;
		case "di5": target = 1600; break;
		default: target = 0;
	}

	if(scrol) {
		clearInterval(scrol);
	}
	scrol = setInterval(scrolTo, 1, target);//移动滚动条函数
}

$.fn.showExplanation = function() {
	$("#explanation").slideDown();
	var text = $(this).text();
	for(var i=0; i < $(".skill").length; i++) {
		if($(".skill")[i].getAttribute("title") == text) {
			$($(".skill")[i]).fadeIn("slow")
				.siblings().css("display", "none");
		}
	}
}
var setTime;	//个人能力说明收起计时器
$.fn.hideExplanation = function() {
	setTime = setTimeout(function() {
		$(".skill").css("display", "none");
		$('#explanation').slideUp();
		$("#skills li").css("background-color", "#abcdef");
	}, 600);
}