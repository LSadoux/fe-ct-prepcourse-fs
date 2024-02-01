function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  // var indiceMayor = array.reduce(function(indiceMax, elementoActual, currentIndex, arr) {
  // return elementoActual > arr[indiceMax] ? currentIndex : indiceMax;
  //}, 0);

  var indiceMayor = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }
  return indiceMayor;
}
var resultado = encontrarIndiceMayor([30, 2, 60, 4, 55, 7]);
console.log(resultado);

module.exports = encontrarIndiceMayor;
