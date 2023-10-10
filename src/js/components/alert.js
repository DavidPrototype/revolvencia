export default class Alert extends HTMLElement {
    constructor() {
        super();
        /* this.attachShadow({ mode: "open" }); */
    }

    connectedCallback() {
        let icono = this.getAttribute("icono");
        let titulo = this.getAttribute("titulo-alert");
        let texto = this.getAttribute("texto-alert");

        this.innerHTML = `
          <div class="col-12 col-lg-10 col-xl-8 alert--card">
                <picture class="badge--image">
                    <img src="${icono}" alt="Icono Idea" />
                </picture>
                
                <div class="contenido"><h4 class="strong-circular">${titulo}</h4>${texto}</div>
            </div>
        `;
    }
}

// Define your custom element
window.customElements.define("custom-alert", Alert);
