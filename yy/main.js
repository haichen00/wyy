/* ===========================================================
 * jquery-HSlider.js v1
 * ===========================================================
 * Copyright 2013 Hux.
 *
 * Create an Photo-first,Fullpage Slider,Modern website 
 * All animation is powered in CSS3
 * Only for modern broswer 
 *
 * ========================================================== */

var bgs = document.querySelectorAll('.bg');

for (var i = 0; i < bgs.length; i++) {
	var url = bgs[i].getAttribute("data-url");
	bgs[i].style.backgroundImage = "url("+ url +")";
};

//ScrollTop
	$(".up").click(function() {
		$(".stage").animate({
			scrollTop: 0
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});