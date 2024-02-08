function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var newArray = array.filter(num => {
    return num > 10;   
  });
  return newArray.length; //return {cantidad : newArray.length, elementos : newArray};
}
var resultado = contarElementosMayoresA10([1, 2, 20, 4, 55, 776]);
console.log(resultado)


module.exports = contarElementosMayoresA10;
