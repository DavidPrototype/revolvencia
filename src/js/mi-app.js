const enableSwiper = new Swiper(".swiper", {
        spaceBetween: 16,
        slidesPerView: 'auto',
       
        
        
       
        // Responsive breakpoints
        breakpoints: {            
             // when window width is >= 768px
            768: {
            slidesPerView: 'auto',
            spaceBetween: 24
            },
            // when window width is >= 1280px
            1280: {
                // grid: {
                //     cols: 2,
                //   },
            slidesPerView: 3,
            slidesPerGroup:3,            
            spaceBetween: 16,
            autoHeight:true
            
            },
            1600: {
                // grid: {
                //     cols: 2,
                //   },
            slidesPerView: 3,
            slidesPerGroup:3,            
            spaceBetween: 128,
            autoHeight:true
            
            },
            1920: {
                // grid: {
                //     cols: 2,
                //   },
            slidesPerView: 3,
            slidesPerGroup:3,
            spaceBetween: 192,
            autoHeight:true
            // centeredSlides:true,
            // centeredSlidesBounds:true,

           
            },
            2560: {
                // grid: {
                //     cols: 2,
                //   },
            slidesPerView: 3,
            slidesPerGroup:3,
            spaceBetween: 232,
            autoHeight:true
            // centeredSlides:true,
            // centeredSlidesBounds:true,

           
            }
        },
        direction: "horizontal",
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


// console.log(slider)
// enableSwiper();

/*METRICAS */

    enableSwiper.on("navigationNext", function () {
        metrica6A( 'Siguiente');     
    });
    
    enableSwiper.on("navigationPrev", function () {
        metrica6A( 'Regresar');    
    });
 
   


/* ANIMACIONES */

gsap.registerPlugin(ScrollTrigger);

const reveal = (elemento, trigger) => {
    let objetos = gsap.utils.toArray(elemento);

    objetos.forEach(() => {
        gsap.fromTo(
            objetos,
            { yPercent: 30, opacity: 0 },
            {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "ease",
                scrollTrigger: {
                    trigger: trigger,
                    start: "-=200 center",
                    end: "top center",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause",
                    /* markers: true, */
                },
            }
        );
    });
};

reveal(".section-hero > *", ".section-hero");
reveal(".compras > *", ".compras");
reveal(".app > *", ".app");
