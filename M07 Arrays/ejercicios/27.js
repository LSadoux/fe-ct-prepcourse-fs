function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  return palabras.join(' ');
}
var resultado = dePalabrasAFrase(['Helo', 'world', 'Leo']);
console.log(resultado);

module.exports = dePalabrasAFrase;
