"use strict";
const tarifaPlenaEnvio=20000;
const recargoPesaExtra=5000;
const recargoPorDistancia=3000;

const costoTotalEnvio= tarifaPlenaEnvio+recargoPesaExtra+recargoPorDistancia;

console.log(`El envío costará: ${costoTotalEnvio}`);
console.log(typeof costoTotalEnvio);
