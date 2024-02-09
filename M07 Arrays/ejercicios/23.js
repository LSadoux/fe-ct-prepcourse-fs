function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  return array[array.length - 1];
}
var resultado = devolverUltimoElemento([3, 5, 11, 21, 63, 85]);
console.log(resultado);

module.exports = devolverUltimoElemento;
