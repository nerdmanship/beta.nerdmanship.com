$(document).foundation();


// Variables

var scene = $(".scene"),
	layer = $(".layer"),
	dead_center = $(".dead_center"),
	text = $(".text"),
	text_1 = $("#text-1"),
	text_2 = $("#text-2"),
	word = $(".word")
	;


// Setting scene values

TweenMax.set(scene, {
	position: "relative",
	height: "100vh",
	width: "100vw",
	overflow: "hidden",
	backgroundColor: "#fff"
	});

TweenMax.set(layer, {
	position: "absolute",
	height: "100%",
	width: "100%"
	});

TweenMax.set(dead_center, {
	position: "absolute",
	top: "50%",
	left: "50%",
	xPercent: -50,
	yPercent: -50
	});


// Setting starting values

TweenMax.set(text, {autoAlpha:0});
TweenMax.set(text_1, {x:"-50", y:"-50"});
TweenMax.set(text_2, {y:"30"});
TweenMax.set(word, {x:"185", y:"-50"});
		


// Animation

TweenMax.to(scene, 1, {backgroundColor: "#efefef"});
TweenMax.from(text_1, 2, {y:"50", ease: Back.easeOut});
TweenMax.from(word, 2, {y:"50", ease: Back.easeOut});
TweenMax.to(text_1, 2, {autoAlpha:1, ease: Power0.easeNone});
TweenMax.to(word, 2, {autoAlpha:1, ease: Power0.easeNone});
TweenMax.from(text_2, 2, {y:"130", ease: Back.easeOut, delay:0.5});
TweenMax.to(text_2, 2, {autoAlpha:1, ease: Power0.easeNone, delay:1});
TweenMax.to(word, 0.3, {scale:0, rotation:90, ease: Back.easeIn, delay: 3});