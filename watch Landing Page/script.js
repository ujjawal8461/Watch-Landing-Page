TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
},0.1)

TweenMax.from(".title", 1, {
    opacity: 0,
    y: 20,
    delay: 1,
    ease: Expo.easeInOut
})

TweenMax.fromTo(".btn", 1, {
    opacity: 0,
    y: -20,
}, {
    opacity: 1,
    y: 0,
    delay: 1.6,
    ease: Expo.easeInOut,
});


TweenMax.from(".line1", 1, {
    opacity: 0,
    y: -800,
    dealy: 2.5,
    ease: Expo.easeInOut
})

TweenMax.from(".line2", 1, {
    opacity: 0,
    y: -800,
    delay: 2.5,
    ease: Expo.easeInOut
})

TweenMax.from(".line3", 1, {
    opacity: 0,
    x: -800,
    dealy: 2.5,
    ease: Expo.easeInOut
})

TweenMax.from(".line4", 1, {
    opacity: 0,
    x: -800,
    delay: 2.5,
    ease: Expo.easeInOut
})
TweenMax.from(".line5", 1, {
    opacity: 0,
    x: -800,
    dealy: 2.5,
    ease: Expo.easeInOut
})

TweenMax.from(".line6", 1, {
    opacity: 0,
    x: -800,
    delay: 2.5,
    ease: Expo.easeInOut
})

TweenMax.from(".img", 3, {
    opacity: 0,
    delay: 3,
    y: -800,    
    ease: Expo.easeInOut
})