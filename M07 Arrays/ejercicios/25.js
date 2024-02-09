function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  array.push(elemento);
  return array;
}
var resultado = agregarItemAlFinalDelArray([3, 5, 11, 21, 63, 85], 100);
console.log(resultado);

module.exports = agregarItemAlFinalDelArray;
