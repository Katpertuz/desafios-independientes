
"use strict";

const listadePrecios=[10000, 25000, 40000]

function calcularPrecioBaseConIva(precioBase){
    let precioConIva=precioBase*1.19
    return precioConIva

}
listadePrecios.forEach((precioBase)=>{
    const totalConIva=calcularPrecioBaseConIva(precioBase)
    console.log(`el precio base es ${precioBase}| el precio con iva es ${totalConIva}`);
});