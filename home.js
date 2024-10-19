
//carousel
const swiper = new Swiper(".swiper", {
    slidePerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction: "horizontal",

    autoplay: {
        delay: 4000,
    },

    speed: 400,
    spacebetween: 100,
})
//carousel
//counter

//counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.numbers');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 100; // Adjust speed as needed

        const updateCount = () => {
            const increment = Math.ceil(target / speed);
            count = Math.min(count + increment, target);
            counter.textContent = count;

            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        };

        updateCount();
    });
});
//card
const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBlank: true,

    autoplay: {
        delay: 5000,
    },
    speed: 400,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        968: {
            slidesPerView: 3,
        }
    }
})
//card