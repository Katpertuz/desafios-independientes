/*  Historia de Usuario: HU-EST-08 — Filtro Inmutable por Categoría
Como usuario del portal Sazón Nutresa,
quiero seleccionar la categoría "Galletas" en el catálogo,
para obtener una lista de productos de esa categoría formateados con su nombre y precio, sin alterar el catálogo general. */

const catalogoSemilla = [{
    id: "NUT-005",
    nombre: "Galletas Saltín Noel Taco x 3",
    categoria: "Galletas",
    precio: 4500
},
{
    id: "NUT-006",
    nombre: "Maní Moto Original 150g",
    categoria: "Snacks",
    precio: 3200
},
{
    id: "NUT-007",
    nombre: "Pasta Doria Espagueti 250g",
    categoria: "Pastas",
    precio: 2100
},
{
    id: "NUT-008",
    nombre: "Jugo Hit de Mango 237ml",
    categoria: "Bebidas",
    precio: 2000
},

{
    id: "NUT-009",
    nombre: "Galletas Ducales tentación",
    categoria: "Galletas",
    precio: 5500
}

]

const catalogoCompleto=[...catalogoSemilla, {
    id: "NUT-010",
    nombre: "Galletas Noel",
    categoria: "Galletas",
    precio: 10000
}]


const galletasFormateado=catalogoCompleto.filter((producto)=>producto.categoria==="Galletas").map(({nombre, precio})=>{
    return `el producto ${nombre}, tiene un precio de ${precio}`
});

console.log(galletasFormateado);

console.log(catalogoSemilla);

