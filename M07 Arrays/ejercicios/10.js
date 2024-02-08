function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

/*  var indiceMayor = array.reduce((indiceMay, elementoActual, indiceActual, arreglo) => {
  return elementoActual > arreglo[indiceMay] ? indiceActual : indiceMay;
  }, 0); */

  var indiceMayor = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }
  return indiceMayor;
}
var resultado = encontrarIndiceMayor([30, 2, 60, 4, 99, 7]);
console.log(resultado);

module.exports = encontrarIndiceMayor;
