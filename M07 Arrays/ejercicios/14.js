function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if (arguments.length === 0) {
    return 0;
  } 
  var newArray = Array.from (arguments).reduce((acumulador, elemento) => {
     return acumulador * elemento;
  }, 1);
  return newArray;
}
var resultado = multiplicarArgumentos(80, 90, 75, 95, 80);
console.log(resultado);

module.exports = multiplicarArgumentos;
