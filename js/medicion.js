document.addEventListener('DOMContentLoaded', function () {
    // do something here ...
   
    // console.log(window.localStorage.getItem('Metrica1A'));
    // console.log(window.localStorage.getItem('Metrica1B'));
    // console.log(window.localStorage.getItem('Metrica1C'));
    // console.log(window.localStorage.getItem('Metrica2'));
    
     //Metrica 1-A
    const menuOpciones = document.querySelectorAll('.nav--menu .menu__item');
    menuOpciones.forEach(menuopcion => {
       
        menuopcion.addEventListener('click',()=>{
            metrica1A(menuopcion.innerText);
            metrica10A(menuopcion.innerText);
        });
    });

    const logo = document.querySelector('.nav__logo a');
    logo.addEventListener('click',function(){
        metrica10A('Logo Bancoppel');
    });

    //Footer Metricas
    const acercaFooterSec = document.querySelectorAll('footer #acerca ul li');
    acercaFooterSec.forEach(element => {
        element.addEventListener('click',function(){
         
          metrica11A(element.firstChild.innerText)
        });    
   });

    const contactoFooterSec = document.querySelectorAll('footer #contacto ul li a');
    contactoFooterSec[0].addEventListener('click',function(){
        metrica11C('México');
    });
    contactoFooterSec[1].addEventListener('click',function(){
        metrica11C('Estados Unidos y Canadá');
    });

    const socialesFooter = document.querySelectorAll('.footer--socials img')
    socialesFooter.forEach(social => {
            social.addEventListener('click',function(){
                // console.log(social.getAttribute('title'));
                  metrica11D( social.getAttribute('title'));
            });
       });
    
       const sponsorsFooter = document.querySelectorAll('.footer--sponsors img');
            sponsorsFooter.forEach(sponsor => {
                sponsor.addEventListener('click',function(){
                    
                    metrica11E( sponsor.getAttribute('title'));
                });
        });


        const legalesFooter = document.querySelectorAll('.footer--legales #links-legal a');
        legalesFooter.forEach(legal => {
            legal.addEventListener('click',function(){
                
                metrica11F( legal.innerText);
            });
    });
   
});
   /**
    * Funciones 1 : A, B, C
   */
    function metrica1(){
           
        dataLayer.push({
            page:'/horas-azules-bcpl/home',
            title:'Horas azules bancoppel - Home', 
            event:'pvGeneral'               
        });
    }

    function metrica1A(nd3){
        // window.localStorage.setItem('Metrica1A', nd3);
        
        dataLayer.push({
            nd1:'Horas azules BanCoppel',
            nd2:'Menú',
            nd3: nd3,
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    function metrica1B(nd3){
        // window.localStorage.setItem('Metrica1B', nd3);
        dataLayer.push({
            nd1:'Horas azules BanCoppel',
            nd2:'Promociones - Home',
            nd3:'Selección: '+ nd3, //<<Nombre de la opción seleccionada>>
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    function metrica1C(){
        // window.localStorage.setItem('Metrica1C','Ubica las mas cercana');
        dataLayer.push({
            nd1:'Horas azules BanCoppel',
            nd2:'¿Quieres retirar efectivo?',
            nd3:'Ubica tu sucursal',
            nd4:'',
            event:'horasAzulesBcpl',
        });
    }

/**
    * Funciones 2 : A, B, C
   */
    function metrica2(nd2){
        // window.localStorage.setItem('Metrica2','Llegada');
        // window.localStorage.setItem('Metrica2-Promo',nd2);
       
        dataLayer.push({
            page:'/horas-azules-bcpl/promociones',
            title:'Horas azules bancoppel - Promociones', 
            event:'pvGeneral'               
         });

        dataLayer.push({
            nd1:'Horas azules BanCoppel',
            nd2:'Horas azules BanCoppel - ' + nd2,
            nd3:'Llegada',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    function metrica2A(nd2){
       
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Promociones',
            nd2:'Llegada - ' + nd2,
            nd3:'',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    function metrica2B(nd2){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Promociones',
            nd2:'Modal: Estás a punto de salir del sitio Horas Azules - '+ nd2,
            nd3:'Llegada',
            nd4:'',
            event:'horasAzulesBcpl'
            });
    }

    function metrica2C(nd2){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Promociones',
            nd2:'Modal: Estás a punto de salir del sitio Horas Azules - ' + nd2,
            nd3:'Continuar',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }
/**
 * Funcion 3
 */
    function metrica3A(){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Promociones',
            nd2:'Regresar',
            nd3:'',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }
    
    function metrica4(){
        dataLayer.push({
            page:'/horas-azules-bcpl/mi-tarjeta',
            title:'Horas azules bancoppel - Mi tarjeta', 
            event:'pvGeneral'               
         });
    }

    function metrica4A(nd3){
       
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Mi tarjeta',
            nd2:'Fechas importantes',
            nd3: nd3,
            nd4:'',
            event:'horasAzulesBcpl'
            });
    }
/**
 * Metricas  5, 5A, 5B, 5C y 5D
 */
    function metrica5A(nd2, nd3){
        
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Mi tarjeta',
            nd2: nd2,
            nd3: nd3,
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    function metrica5B(){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Mi tarjeta',
            nd2:'Fecha de corte',
            nd3:'El 20 de cada mes - Llegada',
            nd4:'',
            event:'horasAzulesBcpl'
            });
       
    }

    function metrica5C(){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Mi tarjeta',
            nd2:'Periodo de pago',
            nd3:'Del 21 del mes actual al 16 del siguiente mes - Llegada',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    function metrica5D(){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Mi tarjeta',
            nd2:'Fecha límite de pago',
            nd3:'El 16 de cada mes - Llegada',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }


    /**
     * Funciones 6 y 6A
     */

    function metrica6(){
        dataLayer.push({
            page:'/horas-azules-bcpl/mi-app',
            title:'Horas azules bancoppel - Mi app', 
            event:'pvGeneral'               
        });
    }

    function metrica6A(nd3){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Mi app',
            nd2:'Disfruta beneficios',
            nd3: nd3,
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    /**
     * function 7 y 7A
     */

    function metrica7(){
        dataLayer.push({
            page:'/horas-azules-bcpl/ayuda',
            title:'Horas azules bancoppel - Ayuda', 
            event:'pvGeneral'               
        });
    }
    function metrica7A( nd3){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Ayuda',
            nd2:'Preguntas frecuentes',
            nd3: nd3,
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    /**
     * funciones 8 y 8A
     */

    function metrica8(){
        dataLayer.push({
            page:'/horas-azules-bcpl/pagina-web-ya-no-existe',
            title:'Horas azules bancoppel - Página Web no existe', 
            event:'pvGeneral'               
         });
    }
    function metrica8A(){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Página Web no existe',
            nd2:'bancoppel.com',
            nd3:'',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    /**
     * Funciones 9 y 9A
     */
    function metrica9(){
        dataLayer.push({
            page:'/horas-azules-bcpl/pagina-web-no-disponible',
            title:'Horas azules bancoppel - Página Web no disponible', 
            event:'pvGeneral'               
        });
    }

    function metrica9A(){
        dataLayer.push({
            nd1:'Horas azules BanCoppel - Página Web no disponible',
            nd2:'bancoppel.com',
            nd3:'',
            nd4:'',
            event:'horasAzulesBcpl'
        });
    }

    /**
     * Menu superrior
     * Funciones 10-A
     */
    function metrica10A(nd2){
        dataLayer.push({
            nd1:'Menú superior',
            nd2: nd2, // Ejemplo: Logo BanCoppel, Mi App, etc...
            nd3:'',
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }

    /**
     * Funcion 11-A, 11-B, 11-C, 11-D, 11-E, 11-F
     */
    function metrica11A( nd3){
        dataLayer.push({
            nd1:'Menú Inferior',
            nd2:'Acerca de bancoppel',
            nd3: nd3,   //Ejemplo: Información corporativa, Corresponsales, etc.
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }

    function metrica11B(nd2){
        dataLayer.push({
            nd1:'Menú inferior',
            nd2: nd2,
            nd3:'',
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }
    function metrica11C(nd3){
        
        dataLayer.push({
            nd1:'Menú inferior',
            nd2:'Teléfono', 
            nd3: nd3,   //Enviar la opción que selecciona el usuario si fue Lada de México o de EUA y Canadá   <<México|Estados Unidos y Canadá>>
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }
    function metrica11D(nd3){
        dataLayer.push({
            nd1:'Menú inferior',
            nd2:'Redes sociales' ,
            nd3: nd3,   //Enviar la red social que fue seleccionada por el usuario <<Facebook|Linkedin|YouTube>>
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }
    function metrica11E(nd3){
        dataLayer.push({
            nd1:'Menú inferior',
            nd2:'Sitios externos' ,
            nd3:nd3,   //Enviar el sitio que fue seleccionado por el usuario <<FINTECH|Fundación Coppel|Buró>>
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }
    function metrica11F( nd3){
        dataLayer.push({
            nd1:'Menú inferior',
            nd2: nd3,   //Ejemplo: TDC Gratis, Aviso de privacidad, etc.
            nd3:'',
            nd4:'',
            event:'clicMenuSuperiorGeneral'
        });
    }
    

 