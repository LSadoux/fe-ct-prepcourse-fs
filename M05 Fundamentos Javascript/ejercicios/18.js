function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  return num % 2 === 1;
}
var resul = esImpar(6001);
console.log(resul);

module.exports = esImpar;