function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var newArray = array.map(elemento => {
    return elemento.toUpperCase(); // para la 1ª letra en Mayus. : return elemento.charAt(0).toUpperCase()+ elemento.slice(1);
  })
  return newArray;
}
var resultado = convertirStringAMayusculas(['A', 'mama', 'papa']);
console.log(resultado)

module.exports = convertirStringAMayusculas;
