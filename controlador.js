let ubicacion= document.getElementById("Apellidousuario");
let asistentes= document.getElementById("Numerodeabonos"); 
let precio= 144000;
let precio2= 215000;
let precio3= 444000;
let graderia=document.getElementsByName("tipodeabono")[0];


let compra= function(e){
    

    if (graderia.value=="Abono Norte"){
        
        alert("El precio a pagar es: " + asistentes.value * precio )

    } else  if (graderia.value=="Abono Sur"){
        
        alert("El precio a pagar es: " + asistentes.value * precio )

    } else  if (graderia.value=="Abono Oriental"){
        
        alert("El precio a pagar es: " + asistentes.value * precio2 )

    } else  if (graderia.value=="Abono Occidental"){
        
        alert("El precio a pagar es: " + asistentes.value * precio3 )

    }

}

let realizarcompra=document.getElementById('comprar');
realizarcompra.addEventListener("click", compra);



