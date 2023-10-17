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
/// NUMEROS
let regExNumber = /^[0-9]+$/;




document.querySelector('#saldo-pendiente').addEventListener('input',(event)=>{
    alertErrorSaldo.classList.add('d-none')    
    //saldoMensual = parseFloat(event.target.value);
    
    if(event.target.value.length < 1 || isNaN(event.target.value.length)){
        alertErrorSaldo.classList.remove('d-none');
        msgErrorSaldo.innerText ='Debes ingresar un monto para calcular';
        btnCalcular.disabled = true;  
    }else{
            let validNumber = regExNumber.test(event.target.value);
            if(!validNumber){
                alertErrorSaldo.classList.remove('d-none');
                msgErrorSaldo.innerText ='Solo se permiten numeros';
                btnCalcular.disabled = true;  
            }else{
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
            }
    }
  

   
});

document.querySelector('#pago').addEventListener('input',(event)=>{
    alertErrorPago.classList.add('d-none')   
    

    if( event.target.value.length < 1 || isNaN(event.target.value.length)){
        alertErrorPago.classList.remove('d-none')
        msgErrorPago.innerText='Debes ingresar un monto para calcular';
        btnCalcular.disabled = true; 
    }else{
        
        let validNumber = regExNumber.test(event.target.value);
        if(!validNumber){
            alertErrorPago.classList.remove('d-none')
            msgErrorPago.innerText='Solo se permiten numeros';
            btnCalcular.disabled = true;   
        }else{

            pago = parseFloat(event.target.value);
            if( pago <= 0){
                alertErrorPago.classList.remove('d-none')
                msgErrorPago.innerText='Debes ingresar un monto para calcular';
                btnCalcular.disabled = true;        
            }else{
                btnCalcular.disabled = false;
            }
        }

    }
});

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
        }else if( pago > saldoMensual){
            
            alertErrorPago.classList.remove('d-none')
            msgErrorPago.innerText='La cantidad debe ser menor al saldo mensual pendiente';
        }else{
            calcular_deuda(saldoMensual,pago);
        }

})

btnNuevoCalculo.addEventListener('click',()=>{
            componenteCaculadora.classList.remove('d-none');
            componenteResultados.classList.add('d-none')
})


function calcular_deuda(saldo_mensual, pago){
    
    let resultado =0;
    let deuda = saldo_mensual - pago;
    let interes_generado = deuda * (0.0526);
    let iva_intereses = interes_generado * 0.16;
    resultado = deuda + interes_generado +  iva_intereses
    
    //Colocar datos de entrada en la vista
    document.getElementById('entrada-saldo').innerText='$'+saldo_mensual.toFixed(2);
    document.getElementById('entrada-pago').innerText='$'+pago.toFixed(2);

    //Colocar datos de salida en la vista de la calculadora
    document.querySelector('.info-cantidad').innerText ='$'+resultado.toFixed(2);
    document.getElementById('deuda').innerText ='$'+deuda.toFixed(2);
    document.getElementById('interes-deuda').innerText ='$'+interes_generado.toFixed(2);
    document.getElementById('iva-interes').innerText ='$'+iva_intereses.toFixed(2);

    componenteCaculadora.classList.add('d-none');
    componenteResultados.classList.remove('d-none')
   
}