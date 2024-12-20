let tl01 = gsap.timeline({repeat:-1, repeatDelay:3});

tl01.to('#cranehook',1,{scaleY:.75,ease:'none'},0.5)
    .to('#buildingTop',1,{y:-47,ease:'none'},0.5)

    .to('#cranewirectrl',2.5,{x:54,y:-30,ease:'none'},1.5)
    .to('#buildingTop',2.5,{x:54,y:-77,ease:'none'},1.5)
    .to('#buildingTop',1,{y:-70,ease:'none'},4)

    .to('#cranehook',1,{scaleY:.8,ease:'none'},4)
    .to('#cranehook',1,{scaleY:.6,ease:'none'},5)

    .to('#cranewirectrl',2.5,{x:0,y:0,ease:'none'},5)
    .to('#cranehook',1,{scaleY:1,ease:'none'},7.5)