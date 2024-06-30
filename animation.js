
// // document.addEventListener("scroll",function(){
// //     gsap.from("#texty p",{
// //         y:-30,
// //         opacity:0
// //     })
// // })


// // gsap.from("#texty p",{
// //             y:-30,
// //             opacity:0
// //         })
// gsap.registerPlugin(ScrollTrigger)
// gsap.to("#texty",{
//     scrollTrigger: {
//         trigger: '#texty',
//         markers: true, // Show markers for debugging
//         start: '0% 0%', // When the top of the trigger hits the bottom of the viewport
//         end: '75% 0%', // When the top of the trigger hits 90% of the viewport height
//         scrub: 1, // Smooth scrubbing
        
//     },
//     duration: 1,
//     opacity:1,
//     x:100,
//     ease:power2.out
// })
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.text, .text2, .font, .high-text, img').forEach(element => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // When the top of the element hits 80% from the top of the viewport
          end: 'bottom 20%', // When the bottom of the element hits 20% from the bottom of the viewport
          markers:false,
          toggleActions: 'play none none none', // Play the animation on enter
          scrub: 1,
          markers: false // Add markers for debugging
        },
        opacity: 0.8,
        y: 20,
        duration: 1,
        ease: 'power1.out'
      });
    });
  });
  

