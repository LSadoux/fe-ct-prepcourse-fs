function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
var newArray = arrayOfNums.reduce((acumulador, elemAct, index) => { 
  
  console.log(`Elemento Actual: ${elemAct}, Índice: ${index}, Acumulador: ${acumulador}, Array: ${arrayOfNums}`);
  
  return acumulador + elemAct;
}, 0);

return newArray;
};
var resultado = agregarNumeros([1, 5, 10, 20,]);
console.log(resultado);

module.exports = agregarNumeros;
