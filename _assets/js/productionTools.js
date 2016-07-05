//––––––––––––––––––––––––––––––––––––––––––––––––––––
// CONTROLS
//––––––––––––––––––––––––––––––––––––––––––––––––––––

// BUTTONS
$("#btnPause").on("click", function(){tl.pause();});
$("#btnPlay").on("click", function(){
  tl.seek("start");
});

// SLIDER
$("#productionSlider").slider({
  step: 0.1,
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
}