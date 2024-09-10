
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


document.querySelectorAll('.second ul li').forEach((li)=>{

    gsap.set(li, {
        opacity: 0,
        xPercent: -100
    });

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: li,
            start: "top 70%",
        }
    });
    tl.to(li, {
        opacity: 1,
        xPercent: 0,
    })
})

gsap.fromTo(
   ".media",
     {
        opacity: 0,
        xPercent: 100,
     },
     {
        opacity: 1,
        xPercent: 0,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: ".media",
            start: "top 30%",
        }
     }
);


gsap.to(".top .text-animated", {
    text: 'Delight Your Best.',
    duration: 1,

});

document.querySelectorAll('.card').forEach((card,i)=>{
    gsap.set(card, {
        opacity: 0,
        xPercent: -200
    });
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: card,
            start: "top 60%",
        }
    });
    
    tl.to(card, {
        opacity: 1,
        xPercent: 0,
    },delay= i/2) 
    
})