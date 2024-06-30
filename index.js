document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const textElement1 = document.querySelector('.text3 .text-text:nth-of-type(1)');
    const textElement2 = document.querySelector('.text3 .high-text');
    const textElement3 = document.querySelector('.text3 .text-text:nth-of-type(2)');

    if (scrollPosition < 400) {
        textElement1.textContent = '';
        textElement2.textContent = '25M+ Downloads';
        textElement3.textContent = 'on app store & Google store';
    } else if (scrollPosition >= 400 && scrollPosition < 1200) {
        textElement1.textContent = 'The Next Big';
        textElement2.textContent = 'BlockChain';
        textElement3.textContent = 'Revolution';
    } else if (scrollPosition >= 1200 && scrollPosition < 2000) {
        textElement1.textContent = 'Powered by advance';
        textElement2.textContent = 'NASA';
        textElement3.textContent = 'algorithms';
    } else if (scrollPosition >= 2000 && scrollPosition < 2800) {
        textElement1.textContent = 'Redefining';
        textElement2.textContent = 'UX Strategy';
        textElement3.textContent = 'And UI Design';
    } else if (scrollPosition >= 2800 && scrollPosition < 4200) {
        textElement1.textContent = 'Text headline';
        textElement2.textContent = 'TextHeadline';
        textElement3.textContent = 'Footer headline';
    } else if (scrollPosition >= 4200 && scrollPosition < 5100) {
        textElement1.textContent = 'Biggest Classified';
        textElement2.textContent = 'East Asia';
        textElement3.textContent = 'Countries';
    } else if (scrollPosition >= 5100 && scrollPosition < 5900) {
        textElement1.textContent = 'Biggest Classified';
        textElement2.textContent = 'East Asia';
        textElement3.textContent = 'Countries';
    } else if (scrollPosition >= 5100 && scrollPosition < 6000) {
        textElement1.textContent = 'Biggest Classified';
        textElement2.textContent = 'East Asia';
        textElement3.textContent = 'Countries';
    } else {
        textElement1.textContent = 'Another Text Line';
        textElement2.textContent = 'Another HeadLine';
        textElement3.textContent = 'in Another Industry';
    }
});
document.addEventListener("scroll", function () {
    const path = document.getElementById("Opaque_Ring");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scrollTop / scrollHeight;
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength - scrolled * pathLength;
});

window.addEventListener('resize', function () {
    const path = document.getElementById("Opaque_Ring");
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
});

// Initial setup
const path = document.getElementById("Opaque_Ring");
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma1',
        markers: false,
        start: '0% 0%',
        end: '10% 0%',
        scrub: 1,
        duration: 1
    }
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma2',
        markers: false,
        start: '0% 0%',
        end: '70% 0%',
        scrub: 1,
        duration: 1
    }
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma3',
        markers: false,
        start: '0% 0%',
        end: '75% 0%',
        scrub: 1,
        duration: 1
    }
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma4',
        markers: false,
        start: '0% 0%',
        end: '75% 0%',
        scrub: 1,
        duration: 1
    }
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma5',
        markers: false,
        start: '0% 0%',
        end: '75% 0%',
        scrub: 1,
        duration: 1
    }
});

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma6',
        markers: false,
        start: '0% 0%',
        end: '75% 0%',
        scrub: 1,
        duration: 1
    }
});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ma7',
        markers: false,
        start: '0% 0%',
        end: '75% 0%',
        scrub: 1,
        duration: 1
    }
});

tl.to(".left", {
    backgroundColor: "rgb(204, 0, 255)"
}).to(".left", {
    backgroundColor: "rgb(83, 51, 225)"
}).to(".circle", {
    backgroundColor: "rgb(204, 0, 255)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(83, 51, 225)"
}).to(".right1", {
    backgroundColor: "rgb(255, 0, 225)",
    duration: 1
}).to(".right1", {
    backgroundColor: "rgb(13, 0, 255)",
    duration: 1
}, "<")

tl2.to(".left", {
    backgroundColor: "rgb(68, 238, 241)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(68, 238, 241)",
    duration: 1
}, "<").to(".right1", {
    backgroundColor: "rgb(138, 255, 241)",
    duration: 1
})

tl3.to(".left", {
    backgroundColor: "rgb(56, 54, 54)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(56, 54, 54)",
    duration: 1
}, "<").to(".right1", {
    backgroundColor: "Black",
    duration: 1
})

tl4.to(".left", {
    backgroundColor: "rgb(72, 48, 255)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(72, 48, 255)",
    duration: 1
}, "<").to(".right1", {
    backgroundColor: "rgb(20, 0, 166)",
    duration: 1
})

tl5.to(".left", {
    backgroundColor: "rgb(0, 21, 112)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(0, 21, 112)",
    duration: 1
}, "<").to(".right1", {
    backgroundColor: "rgb(80, 124, 255)",
    duration: 1
})

tl6.to(".left", {
    backgroundColor: "rgb(6, 112, 0)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(6, 112, 0)",
    duration: 1
}, "<").to(".right1", {
    backgroundColor: "rgb(6, 255, 6)",
    duration: 1
})

tl7.to(".left", {
    backgroundColor: "rgb(68, 238, 241)",
    duration: 1
}).to(".circle", {
    backgroundColor: "rgb(68, 238, 241)",
    duration: 1
}, "<").to(".right1", {
    backgroundColor: "rgb(204, 0, 255)",
    duration: 1
})
