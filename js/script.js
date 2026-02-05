var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    // Mobile defaults (lighter 3D)
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100, // Shallower depth for mobile
        modifier: 1,
        slideShadows: false,
        scale: 0.85,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Mobile settings (inherits global, but explicit here for clarity)
        320: {
            slidesPerView: "auto",
            coverflowEffect: {
                depth: 150,
                scale: 0.9,
            }
        },
        // Tablet
        768: {
            slidesPerView: "auto",
            coverflowEffect: {
                depth: 200,
                scale: 0.8,
            }
        },
        // Desktop - Restore the "Best" 3D look
        1024: {
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 350,   // Stronger depth
                modifier: 1,
                slideShadows: false,
                scale: 0.75, // Smaller background cards for more contrast
            }
        },
    }
});


// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    disable: function () {
        // Disable on mobile/tablet (< 992px)
        return window.innerWidth < 992;
    }
});
