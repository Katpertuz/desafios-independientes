"use strict"
const productosCatalogo = [
  { id: "NUT-001", nombre: "Salchicha Ranchera 225g", marca: "Zenú", precio: 7500 },
  { id: "NUT-002", nombre: "Pasta Spaghetti 250g", marca: "Doria", precio: 2100 },
  { id: "NUT-003", nombre: "Galletas Ducales 294g", marca: "Noel", precio: 3200 }
];

const vitrina = document.querySelector("#vitrina-catalogo");
const tarjetasHTML = productosCatalogo
  .map(({ nombre, marca, precio }) => {
    return `
      <article class="catalogo-producto-tarjeta">
        <header>
          <span class="marca-tag">${marca}</span>
        </header>
        <h3>${nombre}</h3>
        <p class="precio-texto">Precio: $${precio}</p>
        <footer>
          <button type="button" class="btn-agregar">Agregar a Receta</button>
        </footer>
      </article>
    `;
  })

  vitrina.innerHTML = tarjetasHTML;