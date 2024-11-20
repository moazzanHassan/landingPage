function pageOneAnimation(){
    var tl = gsap.timeline();

tl.from("nav h2,nav h4,nav button,nav > i",{
    y:-30,
    delay:1,
    duration:1,
    opacity:0,
    stagger:.15
})
tl.from(".sec1-p2 .part1 h1",{
    x:-300,
    duration:.3,
    opacity:0
})
tl.from(".sec1-p2 .part1 p",{
    x:-100,
    duration:.3,
    opacity:0
},"pnmg")
tl.from(".sec1-p2 .part1 button",{
    duration:.3,
    opacity:0
})
tl.from(".sec1-p2 .part2 img",{
    duration:1,
    opacity:0,
    x:200,
    scale:.5
},"pnmg")
gsap.from(".sec1-bot img",{
    y:30,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:"sec1-bot",
        scroller:"body",
        start:"bottom 60%"
    }
})
}

function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
     tl2.from(".services",{
        y:30,
        opacity:0
     })
     tl2.from("#card1",{
        x:-200,
        opacity:0,
        duration:1
     },"anim1")
     tl2.from("#card2",{
        x:200,
        opacity:0,
        duration:1
    
     },"anim1")
     tl2.from("#card3",{
        x:-200,
        opacity:0,
        duration:1
     },"anim2")
     tl2.from("#card4",{
        x:200,
        opacity:0,
        duration:1
    
     },"anim2")
}

function pageThreeAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    });
    
    tl3.from(".section3 .container",{
        opacity:0,
        scale:.5,
        duration:.2
    })
    tl3.from(".section3 .container .part1 h2",{
        x:-300,
        opacity:0,
        duration:.3
    })
    tl3.from(".section3 .container .part1 p",{
        x:-200,
        opacity:0,
        duration:.3
    },"pnmg")
    tl3.from(".section3 .container .part1 button",{
        opacity:0,
        duration:.3
    })
    tl3.from(".section3 .container .part2 img",{
        x:300,
        opacity:0,
        duration:.3
    },"pnmg")
    
    gsap.from(".section4 .part1",{
        y:50,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            start:"top 80%",
        }
    })
}

pageOneAnimation()
pageTwoAnimation()
pageThreeAnimation()