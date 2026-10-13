"use strict";

let preciosproductos = [50000, 80000, 120000];
let calculadoraDescuento= precioBase=>precioBase - precioBase * 0.15


preciosproductos.forEach((precioBase) => {
    let totalConDescuento = calculadoraDescuento(precioBase)
    console.log(`El precio base es ${precioBase}| El precio con descuento es ${totalConDescuento}`);

})


