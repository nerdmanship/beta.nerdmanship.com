$('.ui-slider-handle').draggable();

function makeBg(side, gutter, rows) {
  var rSide = side;
  var rGutt = gutter;
  var rowNum = rows;
  var unitNum = Math.pow(rowNum, 2); 
  var rowBreak = rowNum;
  var rSpace = rSide+rGutt;
  var vbWidth = rowNum*rSide + (rowNum-1)*rGutt;
  var vbHeight = vbWidth;
  
  // Create the background SVG element
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // Add the background SVG element to the DOM
  headerBackground.appendChild(svg);

  // Give the background SVG element attributes
  svg.setAttribute("id", "bgSVG");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
  svg.setAttribute("width", "200%");
  svg.setAttribute("viewBox", "0 0 " + vbWidth +" "+ vbHeight);
  
  // Populate SVG with rects
  for (var i = 0; i<unitNum; i++) {
    
    // Create a rect
    var r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    
    // Add each rect to the SVG
    svg.appendChild(r);
    
    // Give each rect attributes
    r.setAttribute("width", rSide);
    r.setAttribute("height", rSide);
    r.setAttribute("class", "rectangle rectangle" +i);
    r.setAttribute("data-rect-id", i);
    r.setAttribute("fill", "hsla(200, 40%, " + random(10, 15)+ "% , 1)");

    // Give each rect a unique position
    if(i < rowBreak ) {
      r.setAttribute("x", rSpace*(i-(rowBreak-rowNum)) );
      r.setAttribute("y", rSpace*((rowBreak/rowNum)-1) );
      if (i+1 == rowBreak) {
        rowBreak += rowNum;
      }
    } 
  }
}
makeBg(30, 1, 6); // Side, gutter, rows




// ----------

var bgSVG = select("#bgSVG");
var bgRects = selectAll(".rectangle");
var bgTl = new TimelineMax();

function makeBgTls(parentTL) {
  
  rects = Array.from(bgRects);
  
  rects.reduce(function(parent, rect) {
    var tl = new TimelineMax();
    tl.from(rect, random(2, 4), { scale: 0.3, autoAlpha: 0 });
    return parent.add(tl, random(0, 1));
  }, parentTL);
}

makeBgTls(bgTl);



// ----------


// Center on resize
window.addEventListener("resize", center);
function center() {
    TweenMax.set(bgSVG, { x: "-50%", y: "-50%" });
    TweenMax.set(nerdmanship, { x: "-50%", y: "-50%" });
    TweenMax.set(".controllerContainer", { x: "-50%", y: "-50%" });
};


// Return random number between given range
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

// Return a bool based on a given percentage
function chanceRoll(chance) {
  if (chance == null) { chance = 50; }
  return chance > 0 && Math.random() * 100 <= chance;
}


//––––––––––––––––––––––––––––––––––––––––––––––––––––
// SLIDER
//––––––––––––––––––––––––––––––––––––––––––––––––––––

$("#discoverySlider").slider({
  step: 0.01,
  slide: function ( event, ui ) {
    tl.progress( ui.value/100 ).pause();
    TweenMax.set(scrubbProgress, {drawSVG: ui.value + "%"});
    TweenMax.to(".controllerContainer", 0.2, {autoAlpha: 0.2});
  },
  stop: function () {
    tl.play();
    TweenMax.to(".controllerContainer", 0.2, {autoAlpha: 1});
    TweenMax.to(circle1, 0.1, { scale: 1 });
  }
});	

// Handle hover effect
var sliderHandleTarget = select("#discoverySlider .ui-slider-handle");
sliderHandleTarget.addEventListener("mouseover", focusHandle);
sliderHandleTarget.addEventListener("mouseleave", blurHandle);

function focusHandle(){
	TweenMax.to(circle1, 0.1, { scale: 1.2 });
}

function blurHandle(){
	TweenMax.to(circle1, 0.1, { scale: 1 });
}



//––––––––––––––––––––––––––––––––––––––––––––––––––––
// REVEAL SLIDER
//––––––––––––––––––––––––––––––––––––––––––––––––––––

var showing = false;

function showScrubber() {
  if (!(showing)) {
    var tl = new TimelineMax();

    tl
    .to("#scrubbSVG", 1.5, {autoAlpha:1})
    .to(".circle1", 0.5, {scale: 1, delay: 1.3, ease: Power3.easeOut})
    ;
    showing = true;
    setTimeout(startPulse, 2000);
  }  
}

// Start pulse
var tlPulse;
function startPulse() {
  tlPulse = new TimelineMax({ repeat: -1, delay:2 });
  TweenMax.set(pulseCircs, {transformOrigin: "center", autoAlpha: 0 });
  
  tlPulse
  	.to(circle2, 2, { bezier: [{ autoAlpha: 0 }, { autoAlpha: 0.2 }, { autoAlpha: 0.8 }, { autoAlpha: 0 }], ease: Power3.easeOut }, 0.3)
  	.to(circle2, 2, {scale: 3.3 }, 0.3)
  	.to(circle3, 2, { bezier: [{ autoAlpha: 0 }, { autoAlpha: 0.2 }, { autoAlpha: 0.5 }, { autoAlpha: 0 }], ease: Power3.easeOut }, 0)
  	.to(circle3, 2, {scale: 3 }, 0)
  	;
}

// Kill pulse
var sliderHandleTarget = select("#discoverySlider .ui-slider-handle");
sliderHandleTarget.addEventListener("mousedown", killPulse);

function killPulse() {
	TweenMax.to(pulseCircs, 0.2, { autoAlpha: 0 });
	tlPulse.kill();
};

var haveScrolled = false;

document.onscroll = function(){
  if (!(haveScrolled)) {
    haveScrolled = true;  
    console.log("User scrolled");
    mixpanel.track("First scroll");
    killScrollGlow();
  }
};

// Fade in and repeat scroll indicator glow
function scrollGlow() {
  if (!(haveScrolled)) {
    setTimeout(function() {
      tlScroll
        .to(glowDiv, 1.2, { autoAlpha: 0.5 })
        .to(glowDiv, 1.2, { width: "70%", autoAlpha: 1, repeat: -1, yoyo: true, ease: Power1.easeIn });
    }, 5000);
  }
}

// Fade out and remove scroll indicator glow
function killScrollGlow() {
  TweenMax.to(glowDiv, 0.5, { autoAlpha: 0 });
  setTimeout(function() {
    tlScroll.kill();
  }, 600);
}



//––––––––––––––––––––––––––––––––––––––––––––––––––––
// PRODUCTION TOOLS
//––––––––––––––––––––––––––––––––––––––––––––––––––––

// BUTTONS
$("#btnPause").on("click", function(){tl.pause();});
$("#btnPlay").on("click", function(){
  tl.play(0);
});

// SLIDER
$("#productionSlider").slider({
  step: 0.01,
  slide: function ( event, ui ) {
    tl.progress( ui.value/100 ).pause();
  },
  stop: function () {
    tl.play();
  }
}); 

function updateSlider() {
  $("#productionSlider").slider("value", tl.progress()*100);
  $("#discoverySlider").slider("value", tl.progress()*100);
  TweenMax.set(scrubbProgress, {drawSVG: tl.progress()*100 + "%"});
  TweenMax.set(sliderHandle, {left: tl.progress()*100 + "%"});
}