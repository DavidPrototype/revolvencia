export default class AppBanCoppel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
             <section class="app">
                <div class="custom-container">
                    <div class="row">
                        <div class="col-12 col-lg-10 col-xl-12 app--mockup">
                           <div class="img--container">

                               <picture class="image">
                              
                                   <source                                      
                                       srcset="img/app.webp"
                                       media="(min-width: 1024px)"
                                       type="image/webp"
                                   />
                                   <source                                      
                                       srcset=" img/app-portrait.webp"
                                       media="(min-width: 768px)"
                                       type="image/webp"
                                   />
                                   
                                   <img                                                                           
                                       srcset="img/app.jpeg"
                                       alt="Imagen App Bancoppel"
                                   />
                                  
                               </picture>
                               
                              
                                <picture class="qr">
                                    <source srcset="img/qr-img.webp" type="image/webp">
                                    <img                                     
                                        src="img/qr-img.png"
                                        width="151" height="147"
                                        alt="imagen QR"
                                    />
                                </picture>
                           </div>
                        </div>
                        <div class="col-lg-8 app--instrucciones">
                            <picture>
                                <img src="icons/idea.svg" alt="" />
                            </picture>
                            <p>
                                Pon la cámara de tu celular frente al código QR
                                para descargar la App.
                            </p>
                        </div>
                        <div class="col-12 col-lg-10 col-xl-6 app--info">
                            <h2 class="title-underline">
                            La App BanCoppel* te acompaña estés donde estés
                            </h2>
                            <p>
                            Puedes realizar el pago de tu Tarjeta de Crédito BanCoppel <span class="strong-circular ">donde sea y sin hacer filas<span>. 
                            </p>
                            <a href="https://bancoppe.onelink.me/UapG/obsjwcmv" target="_blank"><custom-boton tipo="primario" texto="Descargar"></custom-boton></a>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </section>
        `;
    }
}

// Define your custom element
window.customElements.define("app-bancoppel", AppBanCoppel);
