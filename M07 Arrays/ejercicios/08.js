function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var newArray = array.filter(num => {
    return num % 2 === 0;   
  });
  return newArray;
}
var resultado = filtrarNumerosPares([1, 2, 3, 4, 5, 6]);
console.log(resultado)

module.exports = filtrarNumerosPares;
