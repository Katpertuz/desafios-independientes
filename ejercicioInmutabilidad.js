const catalogoInicial = [
  { id: 1, titulo: "JavaScript Básico", precio: 50000, disponible: true },
  { id: 2, titulo: "CSS Avanzado", precio: 35000, disponible: false },
  { id: 3, titulo: "React desde Cero", precio: 90000, disponible: true }
];

const catalogoCompleto = [...catalogoInicial,{ id: 4, titulo: "Node.js Backend", precio: 80000, disponible: true } ];

const cursosDisponibles = catalogoCompleto.filter(({disponible})=>disponible)

let catalogoTituloYprecio = cursosDisponibles.map(({titulo, precio})=>{
    return (`El curso ${titulo}, tiene una inversión de ${precio}`);



})

console.log(catalogoTituloYprecio);
console.log(catalogoInicial);