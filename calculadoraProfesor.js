let cantidadEstudiantes=parseInt(prompt(`Ingrese el número de estudiantes en su curso`));
let sumaNotas= 0;
if(cantidadEstudiantes<=0 || isNaN(cantidadEstudiantes))
    {alert("Error: Por favor ingrese un número de estudiantes válido y mayor a 0.")
} else{
    sumaNotas=0;
}
for(let i=1; i<=cantidadEstudiantes; i++)
    {let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i}:`));
      sumaNotas += nota;
      

}
let promedio = sumaNotas / cantidadEstudiantes;
  alert(`El promedio de notas del curso es: ${promedio.toFixed(2)}`);