function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if( typeof array[0] === 'number') {
    array.sort(function(a, b) {
    return a - b;// para mayor a menor intercambiar{return b - a};
    }); 
  } else if (typeof array[0] === 'string') {
    array.sort(function(a, b) {
    return a.localeCompare(b); // para mayor a menor intercambiar {return b.localeCompare(a)};
    }); 
  };
  return array;
};

var resultado = ordenarArray([22, 13, 1, 55, 99, 3, 80]);
console.log(resultado);

module.exports = ordenarArray;
