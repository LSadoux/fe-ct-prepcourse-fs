function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  return array.every((num) => {
    return num === array[0];
  });
}
var resultado = todosIguales([80, 80, 80, 80]);
console.log(resultado);

module.exports = todosIguales;
