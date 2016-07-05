//––––––––––––––––––––––––––––––––––––––––––––––––––––
// CONTROLS
//––––––––––––––––––––––––––––––––––––––––––––––––––––

// BUTTONS
$("#btnPause").on("click", function(){tl.pause();});
$("#btnPlay").on("click", function(){
  tl.seek("start");
});

// SLIDER
$("#slider").slider({
  step: 0.1,
  slide: function ( event, ui ) {
    tl.progress( ui.value/100 ).pause();
  },
  stop: function () {
    tl.play();
  }
});	

function updateSlider() {
  $("#slider").slider("value", tl.progress()*100);
}

$("#timelineController").slider({
  range: false,
  min: 0,
  max: 1,
  step: 0.001,
  slide: function ( event, ui ) {
    tl.progress( ui.value ).pause();
  },
  stop: function () {
    tl.play();
  }
});