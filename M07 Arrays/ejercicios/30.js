function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  for (var i = 0; i < numeros.length - 1; i++) {
    for (var j = i+1; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        return numeros[i];
      };
    };
  }
  return undefined;
}
var resultado = encontrarElementoRepetido([3, 5, 13, 21, 11, 85]);
console.log(resultado);

module.exports = encontrarElementoRepetido;