function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  return str1.length ===  str2.length;
}

var resul = tienenMismaLongitud("casa", "leos");
console.log(resul);

module.exports = tienenMismaLongitud;