// gsap.to("#box1",{
//     x:1000,
//     duration : 2,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "yellow",
//     borderRadius : "50%",

// })

// gsap.from("#box2",{
//     x:1000,
//     duration : 3,
//     delay : 2,
// })


// gsap.to("h1",{
// color : "red",
// duration : 1,
// delay : 1,
// y : 30,
// opacity : 1,
// stagger : 0.3
// })

// gsap.from("h1",{
//     color : "green",
//     duration : 5,
//     delay : 1,
//     })


// gsap.to("#box",{
//     x:1000,
//     duration : 6,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "yellow",
//     borderRadius : "50%",
//     repeat :-1,
//     yoyo : true

// })


// gsap.to("#box1",{
//     x:1200,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1,
//     yoyo: true,
//     repeat :-1,
// })

// gsap.to("#box2",{
//     x:1200,
//     rotate : 360,
//     duration : 1.5,
//     delay : 2.5,
//     backgroundColor : "black",
//     yoyo: true,
//     repeat :-1,
// })

// gsap.to("#box3",{
//     x:1200,
//     rotate : 360,
//     duration : 1.5,
//     borderRadius : "50%",
//     delay : 4,
//     scale : 0.5,
//     yoyo: true,
//     repeat :-1,

// })

// var tl = gsap.timeline()
// tl.to("#box1",{
//     x:1200,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1,
// })


// tl.to("#box2",{
//     x:1200,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1,
// })

// tl.to("#box3",{
//     x:1200,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1,
// })


// var tl = gsap.timeline()
// tl.from("h2",{
//     y: -30,
//     opacity : 0,
//     duration : 1
// })

// tl.from("h4",{
//     y: -30,
//     opacity : 0,
//     duration : 1,
//     stagger : 0.3
// })

// tl.from("h1",{
//     y:-200,
//     scale:0.5,
//     duration : 2,
//     opacity : 0
// })


// Day 2
// gsap.from("#page1 #box",{
//     scale : 0,
//     duration : 2,
//     rotate: 360,
//     borderRadius : "50%"
// })

// gsap.from("#page2 #box",{
//     scale : 0,
//     duration : 2,
//     rotate: 360,
//     borderRadius : "50%",
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller : "body",
//         markers:true,
//         start : "top 60%",
//         scrub : 2
//     }
// })


// gsap.from("#page2 h1",{
//     opacity : 0,
//     duration : 2,
//     x : 500,
//     scrollTrigger : {
//         trigger : "#page2 h1",
//         scroller : "body",
//         markers : true,
//         start : "top 50%",
//     }
// })


// gsap.from("#page2 h2",{
//     opacity : 0,
//     duration : 2,
//     x : -500,
//     scrollTrigger : {
//         trigger : "#page2 h1",
//         scroller : "body",
//         markers : true,
//         start : "top 50%",
//     }
// })



gsap.to("#page4 img",{
    transform: "TranslateY(-250px)",
    scrollTrigger : {
        trigger : "#page4 img",
        scroller : "body",
        markers: true,
        start : "top 70%",
        scrub : 2,
    }

})