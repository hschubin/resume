$(document).ready(function() {
	$("#nav div").mouseover(function() {
		$(this).next().css({"color":"#B7B8AD"});

		var target;	//目标位置
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

	}).mouseout(function() {
		$(this).next().css({"color":"#abcdef"});
	});
});


var scrol;	//导航的定位计时器

function scrolTo(target) {
	var step = 12;
	var local = $(window).scrollTop();
	var distance;
	target > local ?
		distance = Math.ceil((target - local) / step) :
		distance = Math.floor((target - local) / step);

	if(local == target) {
		clearInterval(scrol);
	} else {
		local += distance;
		$(window).scrollTop(local);
	}
}//将滚动条拖曳至指定位置的动画