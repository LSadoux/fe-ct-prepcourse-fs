function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  // Verifica si la entrada es un objeto de fecha
  if(!(fechaNacimiento instanceof Date)) {
    // Intenta crear un objeto de fecha a partir de la entrada
    fechaNacimiento = new Date(fechaNacimiento);
    // Verifica si la conversión fue exitosa
    if(isNaN(fechaNacimiento.getTime())) {
      console.log("fecha no valida");
    }
  }
  // Obtiene el año de nacimiento
  var añoNac = fechaNacimiento.getFullYear();
   // Obtiene el año actual
  const objDate = new Date();
  var añoAct = objDate.getFullYear();
  // Calcula la edad en años
  var años = añoAct - añoNac;
  // Determina si la persona es mayor de edad
  return años >= 18;
}
//var fechaing = "2005/01/01";
//var esmayor = esMayorDeEdad(fechaing);
//console.log(esmayor);

module.exports = esMayorDeEdad;