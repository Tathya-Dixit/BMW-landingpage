const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline({scrollTrigger: {
    trigger: '.latest-car',
    scroller: 'body',
    start: 'top bottom',
    end:'93% bottom',
    scrub:true,
    markers: false
}
});


gsap.from(".nav", {
    y: '-20',
    opacity: 0,
    duration: 1.7,
    ease: Expo.easeInOut,
})


tl.from(".latest-car-container",{
    y:'100%',
    delay:2,
    duration:10
},'anim')

tl.to(".boundingelem", {
    y: '0',
    delay:10,
    duration: 8,
    stagger:5,
},'anim')


tl.from(".latest-car-items",{
    y:'100%',
    delay:7,
    duration:7
},'anim')

tl.from(".latest-car-item",{
    y:'100%',
    delay:10,
    duration:10,
    stagger:5
},'anim')


let tl2 = gsap.timeline({scrollTrigger:{
    trigger:'.collage',
    scroller: 'body',
    start: 'top bottom',
    end:'105% bottom',
    scrub:true,
    markers: false
}})

tl2.from(".collage-item",{
    y:'100%',
    delay:1,
    duration:15,
    stagger:15
},'anim2')





function circleSkewer() {
    var scaleX = 1;
    var scaleY = 1;
    var timeout;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)
        scaleX = gsap.utils.clamp(0.6, 1, Math.abs(dets.clientX - xprev))
        scaleY = gsap.utils.clamp(0.6, 1, Math.abs(dets.clientY - yprev))

        xprev = dets.clientX
        yprev = dets.clientY

        circleMouseFollower(scaleX, scaleY)
        timeout = setTimeout(() => {
            document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        }, 100);
    })
}

function circleMouseFollower(scaleX, scaleY) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${scaleX}, ${scaleY})`
    })
}

circleSkewer()
