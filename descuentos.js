const precioBase = 20000;
let totalProductos = 4; 

for (let i = 1; i <= totalProductos; i++) {
 
  let descuento = i * 2500;
  
 
  let precioFinal = precioBase - descuento;


  console.log(`Etiqueta #${i}: Precio base $${precioBase} | Descuento: $${descuento} | Total a pagar: $${precioFinal}`);
}