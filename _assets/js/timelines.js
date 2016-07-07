//––––––––––––––––––––––––––––––––––––––––––––––––––––
// SUB TIMELINES
//––––––––––––––––––––––––––––––––––––––––––––––––––––

//––––––––––––––––––––
// ANIMATE IN
//––––––––––––––––––––

tlAnimIn
  .to(charGroup, 3, { x: 0, scaleX: 0.8, scaleY: 0.8, ease: Power1.easeOut }, 0)
  .staggerTo(chars, 3, { cycle:{ x: function(i){ return (i * 250); }, }, ease: Power1.easeOut }, 0, 0)
;



//––––––––––––––––––––
// FLICKER
//––––––––––––––––––––
tlFlicker
  .to(theN, flicDur, { fill: "hsla(160, 5%, 50%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theE, flicDur, { fill: "hsla(160, 5%, 60%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theR, flicDur, { fill: "hsla(160, 5%, 70%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theD, flicDur, { fill: "hsla(160, 5%, 80%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theM, flicDur, { fill: "hsla(160, 5%, 85%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theA, flicDur, { fill: "hsla(160, 5%, 85%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theN2, flicDur*1.5, { fill: "hsla(160, 5%, 85%, 1)", ease: RoughEase.ease.config({
                                                                            template: Power0.easeNone,
                                                                            strength: 2,
                                                                            points: 150,
                                                                            taper: "none",
                                                                            randomize: true,
                                                                            clamp: true
                                                                          })}, 0, 0)
  .to(theS, flicDur, { fill: "hsla(160, 5%, 80%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theH, flicDur, { fill: "hsla(160, 5%, 70%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theI, flicDur, { fill: "hsla(160, 5%, 60%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
  .to(theP, flicDur, { fill: "hsla(160, 5%, 50%, 1)", ease: RoughEase.ease.config(configObj)}, 0, 0)
;



//––––––––––––––––––––
// VIEWBOX
//––––––––––––––––––––

tlViewBox
  .add("toNerd")
  .to(nerdmanship, 0.2, { rotation: -20, skewX: 30, attr: {viewBox: "980 -50 1500 50"} }, "toNerd")
  .to(nerdmanship, 0.1, { rotation: -10, skewX: 20, attr: {viewBox: "1080 -50 900 50"} }, "toNerd =+0.2")
  .to(nerdmanship, 0.1, { attr: {viewBox: "1000 -50 800 50"} }, "toNerd =+0.7")
  .add("toMan", "toNerd =+1.2")
  .to(nerdmanship, 0.3, { rotation: -20, skewX: 35, attr: {viewBox: "1700 -50 1000 50"} },"toMan")
  .to(nerdmanship, 0.2, { rotation: -15, skewX: 25,attr: {viewBox: "1700 -50 900 50"} }, "toMan =+0.6")
  .add("toShip", "toMan =+1.2")
  .to(nerdmanship, 0.3, { rotation: -10, skewX: 20, attr: {viewBox: "2100 -50 1200 50"} }, "toShip")
  .add("toNerdmanship", "toShip =+1.0")
  .to(nerdmanship, 0.2, { rotation: 0, skewX: 0, attr: {viewBox: "0 0 4000 50"} }, "toNerdmanship")
  ;



//––––––––––––––––––––
// FINISH
//––––––––––––––––––––

tlFinish
  .to(nerdmanship, 5, { skewX: -10, ease: Power2.easeOut }, 0)
  .to(charGroup, 5, { x: -100, scaleY: 0.9, ease: Power2.easeOut }, 0)
  .staggerTo(chars, 5, {
    cycle:{ x: posArr },
    ease: Power2.easeOut
  }, 0, 0)
;



//––––––––––––––––––––––––––––––––––––––––––––––––––––
// TEXT ANIMATION
//––––––––––––––––––––––––––––––––––––––––––––––––––––

tlText
  .staggerFrom(upperLetters, 5, {autoAlpha:0, rotationY:90, transformOrigin:"0% 50% -50%", ease: Power3.easeOut }, 0.05, 0)
  .staggerFrom(lowerLetters, 5, {autoAlpha:0, rotationY:90, transformOrigin:"0% 50% -50%", ease: Power3.easeOut }, 0.05, 1.2)
  ;













//––––––––––––––––––––––––––––––––––––––––––––––––––––
// TIMELINES FOR KINETIC TYPOGRAPHY
//––––––––––––––––––––––––––––––––––––––––––––––––––––

//––––––––––––––––––––
// 'N'
//––––––––––––––––––––

tl_N
  .add( "arc" ).to(theN, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theN, backDur, { x: backSnap }, "back")
  .to(unit_N1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_N1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_N1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_N1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add( "prepAnim", "arc" )
  .to(unit_N21, 0, { autoAlpha: 0 }, "prepAnim")
  .to(unit_N10, arcDur, { bezier: { type: "soft", values: [{ rotation: 180 }, { rotation: 90 }, { rotation: 153 }]} }, "prepAnim")
  .to(nCurve, arcDur, { bezier: { type: "soft", values:[ { rotation: 0 }, { rotation: 15 }, { rotation: 0 } ]} }, "prepAnim")
  .to(unit_N10, arcDur, { bezier: { type: "soft", values: [{ x: 0, y: 0 }, { x: -25, y: 15 }, { x: 0, y: 0 }]} }, "prepAnim =+0.2")
  

  // 0.25s
  .add( "finAnim", "back" )
  .to(unit_N21, 0, { autoAlpha: 1 }, "finAnim")
  .to(unit_N10, 0.25, { bezier: { type: "soft", values: [{ rotation: 153 }, { rotation: 120 }, { rotation: 153 }]} }, "finAnim")
  .to(unit_N20, 0.25, { bezier: [{ rotation: 180 }, { rotation: 210 }, { rotation: 207 }] }, "finAnim =+0.08")
;


//––––––––––––––––––––
// 'E'
//––––––––––––––––––––

tl_E
  .add( "arc" ).to(theE, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theE, backDur, { x:backSnap}, "back")
  .to(unit_E1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_E1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_E20, 0, { autoAlpha: 0 }, "prepAnim")
  .to(unit_E20, 0, { autoAlpha: 1 }, "prepAnim =+0.15")

  .to(unit_E10, 0.1, { rotation: 0 }, "prepAnim")
  .to(unit_E1, 0.15, { rotation: 180 }, "prepAnim")
  .to(unit_E5, 0.15, { rotation: -180 }, "prepAnim")
  .to(unit_E15, 0.15, { rotation: "+=90", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "prepAnim")
  .to(unit_E9, 0.35, { bezier:[{ rotation: 0 }, { rotation: 100 }, { rotation: 90 }], }, "prepAnim")
  .to(unit_E20, 0.15, { rotation: "90_ccw" }, "prepAnim =+0.15")
  .to(unit_E24, 0.15, { rotation: 90 }, "prepAnim =+0.15")
  
  //0.25s
  .add( "finAnim", "back" )
  .to(unit_E14, finDur, { rotation: 90 }, "finAnim")
  .to(unit_E17, finDur, { rotation: -180 }, "finAnim")
  .to(unit_E20, finDur, { rotation: 90 }, "finAnim")
  .to(unit_E17, finDur, { bezier:[{ x: "+=0" }, { x: "+=80" }, { x: "+=0" }] }, "finAnim")
  .to(unit_E24, finDur, { bezier: [{ rotation: 90 }, { rotation: 50}, { rotation: 90 }] }, "finAnim")
  ;


//––––––––––––––––––––
// 'R'
//––––––––––––––––––––

tl_R
  .add( "arc" ).to(theR, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theR, backDur, { x:backSnap}, "back")
  .to(unit_R1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_R1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_R1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_R1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_R21, 0, { autoAlpha: 0 }, "prepAnim")
  .to(unit_R10, arcDur, { rotation: 90 }, "prepAnim")
  .to(unit_R10, arcDur, { x: "+=115" }, "prepAnim")
  .to(rCurve1, arcDur, { rotation: (180/7) }, "prepAnim")
  .to(rCurve2, arcDur, { rotation: (-180/7) }, "prepAnim")
  .to(unit_R23, arcDur, { rotation: (-180/7) }, "prepAnim")
  .to(unit_R20, arcDur, { rotation: "0_ccw" }, "prepAnim")
  .to(unit_R21, arcDur, { rotation: "180_cw" }, "prepAnim")

  // 0.25s
  .add( "finAnim", "back" )  
  .to(unit_R21, 0, { autoAlpha: 1 }, "finAnim")
  .to(unit_R28, 0, { autoAlpha: 0 }, "finAnim")
  .to(unit_R10, finDur, { x: "-=115", ease: Back.easeOut }, "finAnim")
  .to(unit_R23, finDur, { rotation: 70, ease: Back.easeOut }, "finAnim")
  .to(rCurve2, 0.2, { rotation: 0 }, "finAnim")
;


//––––––––––––––––––––
// 'D'
//––––––––––––––––––––

tl_D
  .add( "arc" ).to(theD, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theD, backDur, { x:backSnap}, "back")
  .to(unit_D1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_D1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_D1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_D1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  
  .to(unit_D10, arcDur, { rotation: 90, x: "+=115" }, "prepAnim")
  .to(dCurve1, arcDur, { rotation: (90/4) }, "prepAnim")
  .to(dCurve2, 0.15, { rotation: (90/4) }, "prepAnim")
  .to(dCurve3, 0.1, { rotation: (180/4) }, "prepAnim")
  .to(dCurve3, 0.1, { rotation: 0 }, "prepAnim =+0.1")
  .to(unit_D20, 0.2, { rotation: 0 }, "prepAnim")
  .to(dStraight, arcDur, { x: 25 }, "prepAnim")

  
  
  // 0.25s
  .add( "finAnim", "back" )
  .to(dStraight, finDur, { x: 0, ease: Back.easeOut }, "finAnim")  
  .to(unit_D10, finDur, { rotation: 90, x: 0, y: 0, ease: Back.easeOut }, "finAnim")
;


//––––––––––––––––––––
// 'M'
//––––––––––––––––––––

tl_M
  .add( "arc" ).to(theM, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theM, backDur, { x:backSnap}, "back")
  .to(unit_M1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_M1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_M1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_M1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .set(unit_M15, { rotation: -180 }, "prepAnim")
  .set(unit_M15, { x: -25 }, "prepAnim")
  .to(unit_M10, arcDur, { rotation: 145 }, "prepAnim")
  .to(unit_M15, arcDur, { rotation: -145 }, "prepAnim")
  .to(unit_M15, arcDur, { x: 0 }, "prepAnim")
  .to(unit_M10, 0.2, { x: 125 }, "prepAnim =+0.1")
  .to(unit_M20, 0.1, { x: -100 }, "prepAnim =+0.1")

  // 0.25s
  .add( "finAnim", "back" )
  .to(unit_M10, finDur, { x: 0 }, "finAnim")
  .to(unit_M20, finDur, { x: 0 }, "finAnim")
  .to(unit_M20, finDur, { bezier: [ { y: 0 }, { y: 10 }, { y: 0 } ] }, "finAnim")
  .to(unit_M15, finDur, { rotation: -110 }, "finAnim")
  .to(unit_M20, finDur, { rotation: "145_short" }, "finAnim")
;


//––––––––––––––––––––
// 'A'
//––––––––––––––––––––

tl_A
  .add( "arc" ).to(theA, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theA, backDur, { x:backSnap}, "back")
  .to(unit_A1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_A1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_A1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_A1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_A10, 0, { rotation: 0 }, "prepAnim")
  .to(unit_A9, 0, { rotation: 180 }, "prepAnim")
  .to(unit_A5, 0, { rotation: 0 }, "prepAnim")
  .to(unit_A13, 0, { rotation: 180 }, "prepAnim")
  .to(unit_A20, 0, { rotation: 180 }, "prepAnim")

  .to(unit_A5, arcDur, { rotation: 90 }, "prepAnim")
  .to(unit_A13, arcDur, { rotation: 90 }, "prepAnim")

  .to(unit_A14, 0, { x: 50 }, "prepAnim") 
  .to(unit_A28, arcDur, { x: 50 }, "prepAnim") 
  

  // 0.25s
  .add( "finAnim", "back" )  
  .to(aCurve, finDur, { rotation: (180/8) }, "finAnim")
  .to(unit_A14, finDur, { x: 0 }, "finAnim")
  .to(unit_A28, finDur, { x: 0 }, "finAnim")
;


//––––––––––––––––––––
// 'N2'
//––––––––––––––––––––

tl_N2
  .add( "arc" ).to(theN2, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theN2, backDur, { x:backSnap}, "back")
  .to(unit_N2_1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_N2_1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_N2_1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_N2_1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add( "prepAnim", "arc" )
  .to(unit_N2_21, 0, { autoAlpha: 0 }, "prepAnim")
  .to(unit_N2_10, arcDur, { bezier: { type: "soft", values: [{ rotation: 180 }, { rotation: 90 }, { rotation: 153 }]} }, "prepAnim")
  .to(n2Curve, arcDur, { bezier: { type: "soft", values:[ { rotation: 0 }, { rotation: 15 }, { rotation: 0 } ]} }, "prepAnim")
  .to(unit_N2_10, arcDur, { bezier: { type: "soft", values: [{ x: 0, y: 0 }, { x: -25, y: 15 }, { x: 0, y: 0 }]} }, "prepAnim =+0.2")
  

  // 0.25s
  .add( "finAnim", "back" )
  .to(unit_N2_21, 0, { autoAlpha: 1 }, "finAnim")
  .to(unit_N2_10, 0.25, { bezier: { type: "soft", values: [{ rotation: 153 }, { rotation: 120 }, { rotation: 153 }]} }, "finAnim")
  .to(unit_N2_20, 0.25, { bezier: [{ rotation: 180 }, { rotation: 210 }, { rotation: 207 }] }, "finAnim =+0.08")
;


//––––––––––––––––––––
// 'S'
//––––––––––––––––––––

tl_S
  .add( "arc" ).to(theS, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theS, backDur, { x:backSnap}, "back")
  .to(unit_S2, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_S2, 0.20, { rotation: -180/7 }, "arc =+0.2")
  .to(unit_S2, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_S2, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")
  

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_S17, 0.1, { x: 25 }, "prepAnim")
  .to(unit_S17, 0, { autoAlpha: 0 }, "prepAnim =+0.1")
   
  .to(unit_S1, 0.25, { rotation: 269 }, "prepAnim =+0.1")
  .to(unit_S1, arcDur, { y: -65 }, "prepAnim =+0.1")
  .to(sCurve1, arcDur, { rotation: -180/7 }, "prepAnim =+0.1")

  .to(unit_S10, arcDur, { rotation: "-25.7_short" }, "prepAnim =+0.1")
  .to(unit_S11, arcDur, { rotation: -15 }, "prepAnim =+0.1")
  .to(unit_S13, arcDur, { rotation: 15 }, "prepAnim =+0.1")
  .to(unit_S14, arcDur, { rotation: 180/7 }, "prepAnim =+0.1")
  .to(unit_S15, arcDur, { rotation: 180/7 }, "prepAnim =+0.1")
  .to(unit_S16, arcDur, { rotation: 180/7 }, "prepAnim =+0.1")
  
  
  //.to(unit_S17, 0, { autoAlpha: 0 }, "prepAnim")

  // 0.25s
  .add( "finAnim", "back" )
  .to(unit_S17, 0, { x: 0, rotation: 180, autoAlpha: 1 }, "finAnim")
  .to(unit_S18, 0, { rotation: -180/7 }, "finAnim")
  .to(unit_S19, 0, { rotation: -180/7 }, "finAnim")
  .to(unit_S20, 0, { rotation: -180/7 }, "finAnim")
  
  .to(sCurve2, 0.35, { rotation: 180/7, ease: Back.easeOut }, "finAnim")
;


//––––––––––––––––––––
// 'H'
//––––––––––––––––––––

tl_H
  .add( "arc" ).to(theH, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theH, backDur, { x:backSnap}, "back")
  .to(unit_H1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_H1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_H1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_H1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_H14, arcDur, { x: 0, rotation: -90 }, "prepAnim")

  // 0.25s
  .add( "finAnim", "back" )
  .to(unit_H19, 0, { autoAlpha: 1 }, "finAnim")
  .to(unit_H32, 0, { autoAlpha: 0 }, "finAnim")
  .to(unit_H19, finDur, { x: 0 }, "finAnim")
  .to(unit_H14, finDur, { rotation: -105, ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "finAnim")
;


//––––––––––––––––––––
// 'I'
//––––––––––––––––––––

tl_I
  .add( "arc" ).to(theI, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theI, backDur, { x:backSnap}, "back")
  .to(unit_I1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_I1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_I1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_I1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_I10, 0.05, { x: 150, autoAlpha: 0 }, "prepAnim")
  .to(iCurve, 0.1, { rotation: 4, ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "prepAnim =+0.05")
  .to(iCurve, 0.2, { rotation: 2, ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "prepAnim =+0.2")

  // 0.25s
  .add( "finAnim", "back" )
/*  .to(unit_I10, dur, { rotation: 180 }, "finAnim")
*/;

//––––––––––––––––––––
// 'P'
//––––––––––––––––––––

tl_P
  .add( "arc" ).to(theP, arcDur, { bezier:arcObj }, "arc")
  .add( "back", backDelay ).to(theP, backDur, { x:backSnapP}, "back")
  .to(unit_P1, 0.20, { rotation: "-=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc")
  .to(unit_P1, 0.20, { rotation: "+=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "arc =+0.2")
  .to(unit_P1, 0.15, { rotation: "+=20", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back")
  .to(unit_P1, 0.20, { rotation: "-=15", ease: SlowMo.ease.config( 0.1, 0.1, true ) }, "back =+0.15")

  // 0.45s
  .add("prepAnim", "arc" )
  .to(unit_P10, arcDur, { rotation: 90 }, "prepAnim")
  .to(unit_P10, arcDur, { x: "+=115" }, "prepAnim")
  .to(pCurve, arcDur, { rotation: (180/7) }, "prepAnim")
  .to(unit_P20, arcDur, { rotation: 0 }, "prepAnim")

  // 0.25s
  .add( "finAnim", "back" )  
  .to(unit_P10, finDur, { x: "-=115", ease: Back.easeOut }, "finAnim")
;