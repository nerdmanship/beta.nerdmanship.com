//––––––––––––––––––––––––––––––––––––––––––––––––––––
// MAIN TIMELINE
//––––––––––––––––––––––––––––––––––––––––––––––––––––

tl
  .add(tlStart)
  .add("start")
  .add(tlAnimIn, "start")
  .add(tlFlicker, "start")
  
  .add("viewbox", 3)
  .add(tlViewBox, "viewbox")
  .add("animate", "viewbox")
  .add(tl_N, "animate")
  .add(tl_E, "animate =+0.08")
  .add(tl_R, "animate =+0.16")
  .add(tl_D, "animate =+0.24")
  .add(tl_M, "animate =+1.20")
  .add(tl_A, "animate =+1.28")
  .add(tl_N2, "animate =+1.36")
  .add(tl_S, "animate =+2.20")
  .add(tl_H, "animate =+2.28")
  .add(tl_I, "animate =+2.36")
  .add(tl_P, "animate =+2.44")
  
  .add("finish", 6.5)
  
  .add(tlFinish, "finish")
  .add(tlText, "finish")
  .add(bgTl, "finish") // 4s
  .add(tlGlow, "finish =+3")
  .call(showScrubber, [""], this, "finish =+6")
;