$(document).ready(function() {
	$("#nav div").mouseover(function() {
		$(this).siblings().css({"color":"#B7B8AD"});

		var local = $(window).scrollTop();  //当前位置
		var target = 400;  //目标位置
		
		switch($(this).parent().attr("id")) {
			case "di1": target = 0; break;
			case "di2": target = 400; break;
			case "di3": target = 800; break;
			case "di4": target = 1200; break;
			case "di5": target = 1600; break;
			default: target = 800; alert("nani?");
		}

		var steps = 200; //步数
		var distance = Math.ceil((target - local) / steps);  //每次移动距离

	    // 移动滚动条
		for(var i=0; i<steps; i++) {
			local += distance;
			$(window).scrollTop(local);
		}

	}).mouseout(function() {
		$(this).siblings().css({"color":"#abcdef"});
	});

	// $("#nav div").mouseover(function() {
	// 	var local = $(window).scrollTop();  //当前位置
	// 	var target = 400;  //目标位置

	// 	switch($(this).attr("id")) {
	// 		case "di1": target = 0; break;
	// 		case "di2": target = 400; break;
	// 		case "di3": target = 800; break;
	// 		case "di4": target = 1200; break;
	// 		case "di5": target = 1600; break;
	// 		default: target = 800;
	// 	}

	// 	var steps = 15; //步数
	// 	var distance = (target - local) / steps;  //每次移动距离

	//     //移动滚动条
	// 	for(var i=0; i<steps; i++) {
	// 		local += distance;
	// 		$(window).scrollTop(local);
	// 	}
	// });
});