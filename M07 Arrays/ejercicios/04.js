function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var elemAle =[];
  var indiceAle =  Math.floor(Math.random() * array.length); // 1º Generar un indice aleatorio.
  return elemAle = array[indiceAle];
}
var resultado = obtenerElementoAleatorio([1, 4, 7, 99, 22, 500]);
console.log(resultado);

module.exports = obtenerElementoAleatorio;