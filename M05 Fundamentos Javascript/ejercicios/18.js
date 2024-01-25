function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  return !(num % 2 === 0); /* num % 2 === 1;  para enteros*/
}
var resul = esImpar(9);
console.log(resul);

module.exports = esImpar;