export default class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
             <footer class="footer">
            <div class="custom-container">
                <a
                    href="https://www.bancoppel.com/main/index.html"
                    target="_blank"
                >
                    <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
                </a>
               
                <div class="row">
                    <div class="col-12 col-lg-3" id="acerca">
                     <h3>Acerca de BanCoppel</h3>
                        <ul>
                            <li><a href="https://www.bancoppel.com/acerca_bancoppel/quienes_somos.html?v=2" target="_blank">¿Quiénes somos?</a></li>
                            <li><a href="https://www.bancoppel.com/acerca_bancoppel/info_corp.html?v=2" target="_blank">Informacion Corporativa</a></li>
                            <li><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank">Tarifas y comisiones de crédito</a></li>                            
                            
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6" id="unidad">
                        <h3>Unidad Especializada Bancoppel Condusef</h3>
                        <p>
                            BanCoppel, S.A., Institución de Banca Múltiple recibe las consultas, reclamaciones o
                            aclaraciones en su Unidad Especializada de Atención a Usuarios, ubicada en 
                            Av. Insurgentes Sur 553, Interior Piso 6,
                        </p>
                        <p>
                            Colonia Escandón II Sección, C.P. 11800, Miguel Hidalgo, Ciudad de México y 
                            por  <span> correo electrónico <a href="mailto:une@bancoppel.com">une@bancoppel.com</a> </span> o <span>teléfono (55) 5278 0000 ext. 510196</span> , 
                            así como en cualquiera de sus sucursales u oficinas. En el caso de no obtener una 
                            respuesta satisfactoria, podrá acudir a la Comisión Nacional para la Protección 
                            y Defensa de los Usuarios de Servicios Financieros.
                        </p>
                        <p>
                           <span> Correo electrónico: <a href="mailto:une@bancoppel.com">asesoria@condusef.gob.mx</a>, chat en línea 
                            <a href="https://www.condusef.gob.mx/" target="_blank">www.condusef.gob.mx</a> o Tel: 800 999 8080 y 55 53 40 09 99.
                           </span>   
                        </p>
                    </div>
                    <div class="col-12 col-lg-3" id="contacto">
                      <h3>Contacto</h3>
                        <ul>
                            <li>
                            <a 
                                href="tel:8001226773"                               
                            > 
                            Lada sin costo en México<br />
                            800-1-226-773 
                             </a>
                            </li>
                            <li>
                              <a href="tel:8662543790">
                                Desde Estados Unidos y Canadá<br />
                               866-254-3790</a>
                            </li>
                        </ul>
                        <div class="footer--socials">
                            <a href="https://www.facebook.com/BanCoppel/" target="_blank"><img
                                src="img/icon-facebook.svg"
                                title="Facebook"
                                alt="Logo Facebook"
                            /></a>
                            <a href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg" target="_blank"><img
                                src="img/icon-youtube.svg"
                                title="Youtube"
                                alt="Logo Youtube"
                            /></a>
                            
                        </div>
                    </div>
                </div>

                <div class="footer--sponsors">
                    <a href="javascript:void(0);">
                        <img src="img/icon-fintech.svg" alt="Logo Fintech"  title="FINTECH"/>
                    </a>
                    <a href="https://www.bancoppel.com/modal_bcopp/buro.html" target="_blank">
                        <img src="img/buro.svg" alt="Logo Fintech" title="Buro"/>
                    </a>
                </div>
                <div class="footer--legales">
                    <p>
                        Copyrigth 2022
                        <span class="asociacion"
                            >Bancoppel S.A Institución de Banca Múltiple</span
                        >
                        - Todos los derechos reservados
                       
                    </p>
                    <p id="links-legal">
                       <a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank"> Consulta nuestros productos más destacados</a>
                        <a href="https://www.bancoppel.com/acerca_bancoppel/terminos.html" target="_blank">Términos y Condiciones de Uso </a>
                        <a href="https://www.bancoppel.com/acerca_bancoppel/aviso.html" target="_blank"> Aviso de Privacidad </a>
                       
                    </p>
                    
                </div>
            </div>
        </footer>
        `;
    }
}

// Define your custom element
window.customElements.define("custom-footer", Footer);
