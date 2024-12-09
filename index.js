function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}


init()

var crsr = document.getElementsByClassName('cursor')[0];
var main1 = document.getElementsByClassName('main')[0];

// Add event listener to the correct element
main1.addEventListener("mousemove", function(d) {
   crsr.style.left = d.clientX + "px";
   crsr.style.top = d.clientY + "px";
});

var vd = document.querySelector(".page1 video");
vd.addEventListener("mouseenter", function() {
  crsr.style.width = "40px";
  crsr.style.height = "30px";

});
vd.addEventListener("mouseleave", function() {
  crsr.style.width = "20px";
  crsr.style.height = "20px";
});

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1",{
    x:-60,
},"anim")
tl.to(".page1 h2",{
    x:60
},'anim')
tl.to(".page1 video",{
    width:"90%"
},'anim')

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -115%",
        end:"top 130%",
        scrub:3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -280%",
        end:"top -300%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#111"
})


var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor = "transparent";
  })

})


 