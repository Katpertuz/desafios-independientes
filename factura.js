const planBase=30000;
const cargoMantenimiento= 15000;
const nombreCliente= "Katherin Ortega Pertuz";
let descuentoAplicado= 2000;
const totalAPagar= planBase+cargoMantenimiento-descuentoAplicado;

const mensajeFactura = `Cliente: ${nombreCliente} | Total a cobrar: $${totalAPagar}`;

console.log(mensajeFactura);
console.log(typeof totalAPagar); // Muestra: "number"