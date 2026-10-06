let tipoPlan=prompt(`Ingrese el tipo de plan que tiene`);
let  saldoPendiente= 0
let mensajeAcceso



switch (tipoPlan) {
    case "PREMIUM": if (saldoPendiente===0){
        mensajeAcceso="Acceso concedido: Disfruta de todo el contenido HD";
    } else{mensajeAcceso=`Acceso restringido: Tienes un saldo pendiente`}
        
        break;

    case "BASIC":mensajeAcceso="Acceso concedido: Contenido estándar disponible";
        break;
    case "FREE":mensajeAcceso="Acceso limitado: Muestra con publicidad";
        break;

    default: mensajeAcceso="Plan no valido o inexistente";
        break;
}

const tieneAcceso = (saldoPendiente === 0) ? true : false; /* Operador ternario 
es lo mismo que decir: // 
if (saldoPendiente === 0) {
  tieneAcceso = true;   // Si es verdadero, le asignas true
} else {
  tieneAcceso = false;  // Si es falso, le asignas false
}*/

console.log(mensajeAcceso);
console.log(`¿Tiene acceso habilitado?: ${tieneAcceso}`);