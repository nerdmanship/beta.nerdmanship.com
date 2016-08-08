//––––––––––––––––––––––––––––––––––––––––––––––––––––
// GLOBAL SETUP
//––––––––––––––––––––––––––––––––––––––––––––––––––––

TweenMax.set(nerdmanship, { xPercent: 0, transformPerspective: 500, autoAlpha: 1 });
TweenMax.set(units, { transformOrigin: "center" });
TweenLite.defaultEase = Power0.easeOut;


TweenMax.set(bgSVG, { rotation:45 });
TweenMax.set(bgRects, { transformOrigin: "center" });

TweenMax.set(circle1, { transformOrigin: "center", scale: 0, autoAlpha:1 });
TweenMax.set(circle4, { xPercent: "-50%" });

//––––––––––––––––––––––––––––––––––––––––––––––––––––
// STARTING POSITION CHARACTERS
//––––––––––––––––––––––––––––––––––––––––––––––––––––

tlStart
  .to(unit1s, 0, { rotation: 90 })
  .to(charGroup, 0, { x: 100, scaleX: 0.9, scaleY: 0.7, transformOrigin: "center" }, 0)
  
  .staggerTo(chars, 0, { fill: "hsla(347, 64%, 7%, 1)",
    cycle:{
      x:function(i){
        return (i * 200);
      }
    }

  }, 0);

TweenMax.set(unit10s, { rotation: 180 });
TweenMax.set(unit20s, { rotation: 180 });
TweenMax.set(unit30s, { rotation: 180 });
TweenMax.set(unit40s, { rotation: 180 });

// Visible links
TweenMax.set(unit_N29, { autoAlpha:0 });
TweenMax.set(unit_E28, { autoAlpha:0 });
TweenMax.set(unit_R28, { autoAlpha:0 });
TweenMax.set(unit_D27, { autoAlpha:0 });
TweenMax.set(unit_M29, { autoAlpha:0 });
TweenMax.set(unit_A30, { autoAlpha:0 });
TweenMax.set(unit_N2_29, { autoAlpha:0 });
TweenMax.set(unit_S23, { autoAlpha:0 });
TweenMax.set(unit_H19, { autoAlpha:0 });
TweenMax.set(unit_I11, { autoAlpha:0 });
TweenMax.set(unit_P21, { autoAlpha:0 });

// Special 'H' settings
TweenMax.set(unit_H20, { rotation: 0 });
TweenMax.set(unit_H30, { rotation: 0 });
TweenMax.set(unit_H23, { rotation: 180 });
TweenMax.set(unit_H19, { x: 125, rotation: -90 });
TweenMax.set(unit_H14, { x: -150, rotation: -180 });

// Special 'I' settings
TweenMax.set(unit_I10, { x: 225 });

// Text settings
TweenMax.set(logoText, { autoAlpha:1 });