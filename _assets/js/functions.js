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
  container.appendChild(svg);

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
    
    // Give each rect dimensions
    r.setAttribute("width", rSide);
    r.setAttribute("height", rSide);
    r.setAttribute("class", "rectangle rectangle" +i);
    r.setAttribute("data-rect-id", i);

    // Give each rect a unique position
    if(i < rowBreak ) {
      r.setAttribute("x", rSpace*(i-(rowBreak-rowNum)) );
      r.setAttribute("y", rSpace*((rowBreak/rowNum)-1));
      if (i+1 == rowBreak) {
        rowBreak += rowNum;
      }
    } 
  }
}
makeBg(10, 1, 7); // Side, gutter, rows




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


// Function to keep content centered on resize
window.addEventListener("resize", center);
function center() {
    TweenMax.set(bgSVG, { x: "-50%", y: "-50%" });
    TweenMax.set(nerdmanship, { x: "-50%", y: "-50%" });
};


// Function to return random number between given range
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

// Function to return a bool based on a given percentage
function chanceRoll(chance) {
  if (chance == null) { chance = 50; }
  return chance > 0 && Math.random() * 100 <= chance;
}

$("#discoverySlider").slider({
  step: 0.1,
  slide: function ( event, ui ) {
    tl.progress( ui.value/100 ).pause();
  },
  stop: function () {
    tl.play();
  }
});	





