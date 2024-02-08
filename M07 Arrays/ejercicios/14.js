function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    // Verificar si el único argumento es un array
    if (Array.isArray(arguments[0])) {
      return arguments[0].reduce((acumulador, elemento, indice) => acumulador * elemento, 1); //console.log(`elemento act: ${elemento}, indice: ${indice}, acumulador: ${acumulador}`);
    } else {
      return arguments[0];
    };
  };

  // Caso general con múltiples argumentos

  var newArray = Array.from (arguments).reduce((acumulador, elemento) => {
    return acumulador * elemento;
  }, 1);
  return newArray;
}
var resultado = multiplicarArgumentos([80, 90, 75, 95, 80]);
console.log(resultado);

module.exports = multiplicarArgumentos;
