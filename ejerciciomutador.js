/* 📜 Historia de Usuario: HU-EST-07B — Ordenamiento de Productos por Precio
Como cliente del portal Sazón Nutresa,
quiero poder visualizar el inventario de productos ordenado de menor a mayor precio,
para identificar los ingredientes más accesibles para mis recetas. */

const catalogoNutresa = [{ id: "NUT-001", nombre: "Chocolatinas jet", categoria: "Chocolates", precio: 600 },
{ id: "NUT-002", nombre: "Galletas Festival", categoria: "Galletas", precio: 2500 },
{ id: "NUT-003", nombre: "Cafe sello Rojo 250g", categoria: "Café", precio: 6000 },
{ id: "NUT-004", nombre: "Salchichas tradicionales Zenú 225g", categoria: "Cárnicos", precio: 7500 }
]

catalogoNutresa.sort((a, b) => a.precio - b.precio)

const mostrarProducto = ({ nombre, precio }) => {
    return `el producto ${nombre}, tiene un precio de ${precio}`

};

catalogoNutresa.forEach((producto) => {
    mostrarProducto(producto)
    console.log(mostrarProducto(producto));

});

