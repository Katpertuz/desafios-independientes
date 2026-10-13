"use strict";

const listadePrecios=[10000, 25000, 40000]

const calcularPrecioBaseConIva=precioBase=>precioBase*1.19
    

listadePrecios.forEach((precioBase)=>{
    const totalConIva=calcularPrecioBaseConIva(precioBase)
    console.log(`el precio base es ${precioBase}| el precio con iva es ${totalConIva}`);
});