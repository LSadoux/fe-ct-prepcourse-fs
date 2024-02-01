function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] * i);
  }

  // Utilizando el método map para multiplicar cada elemento por su índice.
  //var newArray = array.map(function(elemento, indice) {
  //  return elemento * indice;
  //});
  return newArray;

}
var resultado = multiplicarElementosPorIndice([30, 2, -3, 4, 55, 7]);
console.log(resultado);

module.exports = multiplicarElementosPorIndice;
