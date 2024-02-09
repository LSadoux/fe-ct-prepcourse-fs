function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  array.unshift(elemento);
  return array;
}
var resultado = agregarItemAlComienzoDelArray([3, 5, 11, 21, 63, 85], 100);
console.log(resultado);

module.exports = agregarItemAlComienzoDelArray;
