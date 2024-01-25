function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  
  var semana = ["lunes", "martes" , "miércoles", "jueves", "viernes", "sábado", "domingo"];
  
  if (numero >= 1 && numero <= 7 && Number.isInteger(numero)) {
    var diaSemana = semana[numero -=1];
    var diaFormat = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1).replace("é", "e").replace("á", "a");
    return diaFormat;
  } else {
    return "No es un dia de la semana";
  }; 
}
var dia = obtenerDiaSemana(3);
console.log(dia);

module.exports = obtenerDiaSemana;