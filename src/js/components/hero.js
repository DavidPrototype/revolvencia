export default class Hero extends HTMLElement {
    constructor() {
        super();
        /* this.attachShadow({ mode: "open" }); */
    }

    connectedCallback() {
        let tipo = this.getAttribute("tipo");
        let titulo = this.getAttribute("titulo");
        let subtitulo = this.getAttribute("subtitulo");
        let textButton = this.getAttribute("texto-boton");
        let linkButton = this.getAttribute("link-boton");
        let imagen = this.getAttribute("imagen");
        let imagenWebp = this.getAttribute("imagen-webp");
        let imagenTarjeta = this.getAttribute("imagen-tarjeta");
        let imagenTarjetaWebp = this.getAttribute("imagen-tarjeta-webp");
        let icono = this.getAttribute("icon");
        let texto = this.getAttribute("texto-badge");

        if (tipo == "primario") {
            this.innerHTML = `
                <div class="hero hero-${tipo}">
                    <div class="hero--info">
                        <h1 class="title-underline">${titulo}</h1>
                        <p>${subtitulo}</p>

                        ${
                            textButton == "hide"
                                ? ""
                                : '<a href="' +
                                  linkButton +
                                  '"><custom-boton tipo="primario" value="' +
                                  textButton +
                                  '"><custom-boton></a>'
                        }
                    </div>
                    
                    <figure class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${imagenWebp}" type="image/webp">
                            <img
                                class="w-100"
                                src="${imagen}"
                                alt="Imagen Hero"
                            />
                        </picture>
                        ${
                            imagenTarjeta == "hide"
                                ? ""
                                : '<picture class="hero--img--tdc"><source srcset="' +
                                  imagenTarjetaWebp +
                                  '" type="image/webp"><img class="w-100" src="' +
                                  imagenTarjeta +
                                  '" alt="Imagen Tarjeta Credito Bancoppel" /></picture>'
                        }
                        ${
                            icono == "hide"
                                ? ""
                                : '<div class="hero--badge"><custom-badge icon="' +
                                  icono +
                                  '" texto-badge="' +
                                  texto +
                                  '"></custom-badge></div>'
                        }    
                    </figure>
                    
                </div>
            `;
        } else if (tipo == "secundario") {
            this.innerHTML = `
                <div class="hero hero-${tipo}">
                    <div class="hero--info">
                        <h1 class="title-underline">${titulo}</h1>
                        <p>${subtitulo}</p>

                        ${
                            textButton == "hide"
                                ? ""
                                : '<a href="' +
                                  linkButton +
                                  '"><custom-boton tipo="secundario" value="' +
                                  textButton +
                                  '"><custom-boton></a>'
                        }
                    </div>
                    
                    <div class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${imagenWebp}" type="image/webp">
                            <img
                                class="w-100"
                                src="${imagen}"
                                alt="Imagen Hero"
                            />
                        </picture>
                    </div>
                    
                </div>
            `;
        }
    }
}

// Define your custom element
window.customElements.define("custom-hero", Hero);
