var slide = {};
slide = {
	"touch": function(defaul) {

		var num = 0,
			startY = 0,
			moveY = 0,
			endY = 0,
			startX = 0,
			moveX = 0,
			endX = 0;
		var $page_box = defaul.page_box;
		var $page_slide = defaul.page_slide;
		var len = $($page_slide).length;
		var direction = defaul.direction;
		if(direction){
			if(direction == "horizontal"){
				$($page_box).on("touchstart", $page_slide, function(e) {
					startX = e.touches[0].clientX;
				}).on("touchmove", $page_slide, function(e) {
					endX = e.touches[0].clientX;
				}).on("touchend", $page_slide, function() {
					moveX = endX - startX;
					if (Math.abs(moveX) > 10 && endX != 0) {
						if (moveX > 0) {
							num--;
							if (num < 0) {
								num = 0;
								return;
							}
							$(this).addClass("toRight").removeClass("show").prev($page_slide).removeClass("hide").addClass("prevToRight");

							$(this).on("webkitAnimationEnd", function() {
								$(this).removeClass("toRight").addClass("hide").prev($page_slide).removeClass("prevToRight").addClass("show");
								$(this).off("webkitAnimationEnd");
							});
						} else if (moveX < 0) {
							num++;
							if (num > len - 1) {
								num = len - 1;
								return;
							}
							$(this).addClass("toLeft").removeClass("show").next($page_slide).removeClass("hide").addClass("nextToLeft");

							$(this).on("webkitAnimationEnd", function() {
								$(this).removeClass("toLeft").addClass("hide").next($page_slide).removeClass("nextToLeft").addClass("show");
								$(this).off("webkitAnimationEnd");
							});
						}
					}
					endX = 0;
				});
			}else{
				$($page_box).on("touchstart", $page_slide, function(e) {
					startY = e.touches[0].clientY;
				}).on("touchmove", $page_slide, function(e) {
					endY = e.touches[0].clientY;
				}).on("touchend", $page_slide, function() {
					moveY = endY - startY;
					if (Math.abs(moveY) > 10 && endY != 0) {
						if (moveY > 0) {
							num--;
							if (num < 0) {
								num = 0;
								return;
							}
							$(this).addClass("toBottom").removeClass("show").prev($page_slide).removeClass("hide").addClass("prevToBottom");

							$(this).on("webkitAnimationEnd", function() {
								$(this).removeClass("toBottom").addClass("hide").prev($page_slide).removeClass("prevToBottom").addClass("show");
								$(this).off("webkitAnimationEnd");
							});
						} else if (moveY < 0) {
							num++;
							if (num > len - 1) {
								num = len - 1;
								return;
							}
							$(this).addClass("toTop").removeClass("show").next($page_slide).removeClass("hide").addClass("nextToTop");

							$(this).on("webkitAnimationEnd", function() {
								$(this).removeClass("toTop").addClass("hide").next($page_slide).removeClass("nextToTop").addClass("show");
								$(this).off("webkitAnimationEnd");
							});
						}
					}
					endY = 0;
				});
			}
		}else{
			$($page_box).on("touchstart", $page_slide, function(e) {
					startY = e.touches[0].clientY;
				}).on("touchmove", $page_slide, function(e) {
					endY = e.touches[0].clientY;
				}).on("touchend", $page_slide, function() {
					moveY = endY - startY;
					if (Math.abs(moveY) > 10 && endY != 0) {
						if (moveY > 0) {
							num--;
							if (num < 0) {
								num = 0;
								return;
							}
							$(this).addClass("toBottom").removeClass("show").prev($page_slide).removeClass("hide").addClass("prevToBottom");

							$(this).on("webkitAnimationEnd", function() {
								$(this).removeClass("toBottom").addClass("hide").prev($page_slide).removeClass("prevToBottom").addClass("show");
								$(this).off("webkitAnimationEnd");
							});
						} else if (moveY < 0) {
							num++;
							if (num > len - 1) {
								num = len - 1;
								return;
							}
							$(this).addClass("toTop").removeClass("show").next($page_slide).removeClass("hide").addClass("nextToTop");

							$(this).on("webkitAnimationEnd", function() {
								$(this).removeClass("toTop").addClass("hide").next($page_slide).removeClass("nextToTop").addClass("show");
								$(this).off("webkitAnimationEnd");
							});
						}
					}
					endY = 0;
				});
		}



	}
}
slide.touch({
	"page_box": ".page_box",
	"page_slide": ".page_slide",
});