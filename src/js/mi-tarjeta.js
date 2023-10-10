const swiper = new Swiper("#swiper-fechas", {
    spaceBetween: 24,
    slidesPerView: 1,
    direction: "horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slides = document.querySelectorAll(".carrusel-item");


slides.forEach((element, index) => {
    element.addEventListener("click", () => {
        var collapseElementList = document.querySelector("#accordionExample");
        collapseElementList.classList.add("show");

        for (const slidesEl of slides) {
            slidesEl.classList.remove("active");
            slidesEl.removeAttribute("data-bs-toggle");
        }
       
        element.classList.add("active");
        metricaCarouselSeleccion(element.id);
        setTimeout(() => {
            swiper.slideTo(index);
        }, 100);
    });
});

swiper.on("slideChange", function () {
    let id = this.slides[this.activeIndex].getAttribute("data-slide");

    for (const slidesEl of slides) {
        slidesEl.classList.remove("active");
    }

    document.getElementById(id).classList.add("active");
});

/*METRICAS */

swiper.on("navigationNext", function () {

    metrica5A(fechaSeleccionada(swiper.slides[swiper.realIndex]), 'Siguiente');
    
});
swiper.on("navigationPrev", function () {
    
    metrica5A(fechaSeleccionada(swiper.slides[swiper.realIndex]), 'Regresar');    
   
});

function fechaSeleccionada(seleccion){
let fecha = seleccion.dataset.slide;
let opSeleccionada;
   if(fecha =='card-fecha-1'){
    opSeleccionada='Fecha de corte';
    metrica5B();
   }else if(fecha =='card-fecha-2'){
    opSeleccionada='Periodo de Pago';
    metrica5C();
   }else{
    opSeleccionada='Fecha límite de pago';
    metrica5D()
   }
 return opSeleccionada;
}

function metricaCarouselSeleccion( seleccion){
//   console.log(seleccion)
    if(seleccion =='card-fecha-1'){       
        metrica5B();
    }else if(seleccion =='card-fecha-2'){       
        metrica5C();
    }else{    
        metrica5D();
    }

}

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
reveal(".fechas > *", ".fechas");
reveal(".app > *", ".app");
