function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
var nump = 0;
for (var i = 0; i <= numeros.length; i++ ) {
  if (numeros[i] % 2 === 0) {
    nump = nump + 1;
  } else {
    continue;
  }
}
return nump;
}
var resultado = contarParesConContinue([1, 3, 5, 11, 21, 63, 85]);
console.log(resultado);


module.exports = contarParesConContinue;
