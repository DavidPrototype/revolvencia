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
reveal(".promociones > *", ".promociones");
reveal(".efectivo > *", ".efectivo");
reveal(".app > *", ".app");


const alertErrorSaldo = document.querySelector('.error-saldo');
const alertErrorPago = document.querySelector('.error-pago');
const btnCalcular = document.querySelector('#btn-submit button');
const btnNuevoCalculo = document.querySelector('#btn-nuevo-calculo');

const componenteCaculadora = document.querySelector('.calculadora--entrada');
const componenteResultados = document.querySelector('.calculadora--salida');

const msgErrorSaldo = document.querySelector('.error-saldo .mensaje');
const msgErrorPago = document.querySelector('.error-pago .mensaje');

let saldoMensual =0;
let pago =0;

document.querySelector('#saldo-pendiente').addEventListener('input',(event)=>{
    alertErrorSaldo.classList.add('d-none')    
    saldoMensual = parseFloat(event.target.value);
  

    if( saldoMensual <= 0 ){
        alertErrorSaldo.classList.remove('d-none');
        msgErrorSaldo.innerText ='Debes ingresar un monto para calcular';
        btnCalcular.disabled = true;  
    }else if(saldoMensual <= 100){
        alertErrorSaldo.classList.remove('d-none');
        msgErrorSaldo.innerText ='El monto mínimo debe ser mayor a 100 pesos';
        btnCalcular.disabled = true;  
    }else{
        btnCalcular.disabled = false;
    }
   
})

document.querySelector('#pago').addEventListener('input',(event)=>{
    alertErrorPago.classList.add('d-none')    
    pago = parseFloat(event.target.value);

    if( pago <= 0){
        alertErrorPago.classList.remove('d-none')
        msgErrorPago.innerText='Debes ingresar un monto para calcular';
        btnCalcular.disabled = true;        
    }else{
        btnCalcular.disabled = false;
    }

   
})

//Al submit checar que ambos inputs tengas valores mayor a cero
btnCalcular.addEventListener('click',(event)=>{
        event.preventDefault();
        // console.log('Saldo mensual',saldoMensual)
        // console.log('Pago',saldoMensual)
        // console.log('Iniciando calculo')
        if(saldoMensual <= 0 || isNaN(saldoMensual)){
            alertErrorSaldo.classList.remove('d-none');
            msgErrorSaldo.innerText ='Debes ingresar un monto para calcular';
        }else if( pago <= 0 || isNaN(pago)){
            alertErrorPago.classList.remove('d-none')
            msgErrorPago.innerText='Debes ingresar un monto para calcular';
        }else{
            componenteCaculadora.classList.add('d-none');
            componenteResultados.classList.remove('d-none')
        }

})

btnNuevoCalculo.addEventListener('click',()=>{
            componenteCaculadora.classList.remove('d-none');
            componenteResultados.classList.add('d-none')
})
