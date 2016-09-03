if( navigator.userAgent.match(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i)) {
    // Remove or replace broken things
}

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
var tlBg = new TimelineMax( { onComplete: showScrubber } );

function makeBgTls(parentTL) {
  
  rects = Array.from(bgRects);
  
  rects.reduce(function(parent, rect) {
    var tl = new TimelineMax();
    tl.from(rect, random(2, 4), { scale: 0.3, autoAlpha: 0 });
    return parent.add(tl, random(0, 1));
  }, parentTL);
}

makeBgTls(tlBg);



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
    hideHeadline();
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

// Called by tlBg
var showing = false;

function showScrubber() {
  if (!(showing)) {
    showing = true;

    var tl = new TimelineMax();

    tl
      .to("#scrubbSVG", 1.5, {autoAlpha:1})
      .to(".circle1", 0.5, {scale: 1, delay: 0.5, ease: Power3.easeOut})
    ;
    
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

// Detect first scroll
var haveScrolled = false;

document.onscroll = function(){
  if (!(haveScrolled)) {
    haveScrolled = true;
    trackFirstScroll();
  }
};



// Show/hide first headline during timeline is playing
var headlineShowing = false;

function showHeadline() {
  tlHeadline.play().timeScale(2);
  headlineShowing = true;
}

function hideHeadline() {
  if ( window.pageYOffset<5 ){
    tlHeadline.reverse();
    headlineShowing = false;
  }
}

document.onscroll = function(){
  if( tl.isActive() && window.pageYOffset>20 && (!(headlineShowing)) ) {
      showHeadline();
  } else if( tl.isActive() && window.pageYOffset<5 && headlineShowing ) {
    hideHeadline();
  }
}



//––––––––––––––––––––––––––––––––––––––––––––––––––––
// SHOW FACEBOOK NOTIFICATION WHEN ENTER FOOTER
//––––––––––––––––––––––––––––––––––––––––––––––––––––

function facebookNotification() {
  setTimeout(function(){
    TweenMax.to(fbNote, 0.3, { scale: 1, ease: Power3.easeOut })
    TweenMax.to(fbNote, 0.3, { y: "-=5", ease: SlowMo.ease.config( 0.1, 0.1, true ) })
   }, 1000);
}

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
                  triggerElement: footer,
                  reverse: false
                })
                .on("enter", facebookNotification)
                .addTo(controller);



//––––––––––––––––––––––––––––––––––––––––––––––––––––
// FIXED FOOTER SCRIPT (temp disabled)
//––––––––––––––––––––––––––––––––––––––––––––––––––––
/*
window.addEventListener("load", changeFooterStyle);
// window.addEventListener("resize", changeFooterStyle);
var heightNeeded = footerContent.clientHeight;
var heightAvailable;
var heightDiff;
var isFixed = false;

function changeFooterStyle() {
  heightAvailable = (window.innerHeight*0.95);
  heightDiff = (heightAvailable - heightNeeded);
  
  // Check if footer fits
  if ( heightDiff >= 0 ) { footerFits = true; } else { footerFits = false; }

  // Change css when conditions match
  if ( footerFits && (!(isFixed)) ) {
    
    // Add classes
    footer.classList.add("fixedFooter-F");
    body.classList.add("fixedFooter-B");
    footerContent.classList.add("fixedFooter-C");
    // Set status to avoid css change when unnecessary
    isFixed = true;

  } else if (!(footerFits) && isFixed ) {
    
    // Remove classes
    footer.classList.remove("fixedFooter-F");
    body.classList.remove("fixedFooter-B");
    footerContent.classList.remove("fixedFooter-C");
    // Set status to avoid css change when unnecessary
    isFixed = false;

  }
}*/



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