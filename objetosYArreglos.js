"use strict"
const tarifaHora = 20000;

const registroEmpleados = [{
    nombre: "Katherin", horasTrabajadas: 8, tarifaHora: 20000

}, { nombre: "Juliana", horasTrabajadas: 10, tarifaHora: 25000 }

]
const calcularPagoDiario = (horasTrabajadas, tarifaHora) {
    let salarioDia
    let horaExtra = horasTrabajadas - 8
    if (horasTrabajadas <= 8) {
        salarioDia = horasTrabajadas * tarifaHora
    } else if (horasTrabajadas > 8) {
        salarioDia = (8 * tarifaHora) + (horaExtra * tarifaHora * 1.50)
    } else { console.log("ingreso numero incorrecto de horas") }
    return salarioDia
}
registroEmpleados.forEach(({ nombre, horasTrabajadas, tarifaHora }) => {
    const salarioDia = calcularPagoDiario(horasTrabajadas, tarifaHora)


    console.log(`Empleado ${nombre}| Horas: ${horasTrabajadas}| pago total del dia ${salarioDia}`);
})

