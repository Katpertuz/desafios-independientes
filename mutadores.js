"use strict"

const inventario=["Pastas Doria", "Galletas Ducales", "Café Colcafe"];
console.log("0. inventario inicial: ", [...inventario] 
);
inventario.push("Chocolisto");
console.log("\n1. inventario actualizado:  ", [...inventario]);

const ultimoEliminado= inventario.pop();
console.log(`\n2. Elemento sacado con pop es ${ultimoEliminado}`);
console.log("inventario actual v2: ", [...inventario] );

inventario.unshift("Salchicha Ranchera")
console.log(`\n3. inventario actual v3:   `,[...inventario]);

const primerEliminado=inventario.shift();
console.log(`\n4. elemento sacado con shift es ${primerEliminado}`);
console.log("inventario actual v4:",[...inventario] );

const eliminarSplice=inventario.splice(2,1);
console.log(`\n5. el elemento sacado con slice es  ${eliminarSplice}`);
console.log("inventario actual v5: ",[...inventario] );

const insertarSplice=inventario.splice(0,0,"Chocolatinas jet", "Café Colcafe")
console.log(`\n6.los elementos agregados con slice son ${insertarSplice}`);
console.log("inventario actual v6: ",[...inventario]);

const reemplazarSplice=inventario.splice(2,2,"Galletas Ducales", "Galletas Sultanas")
console.log(`\n7.los elementos agregados con slice son ${reemplazarSplice}`);
console.log("inventario actual v7:",[...inventario]);

inventario.reverse();
console.log(`\n8. El inventario actual v8: `,[...inventario]);

inventario.sort();
console.log(`El inventario en orden alfabetico es`, [...inventario]);
