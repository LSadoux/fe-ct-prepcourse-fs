function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
   
  }
  return newArray;


   // OTRA FORMA:

  //array.reverse();
  //return array;
}

var resultado = invertirArray([1, 2, 3, 4, 5, 6]);
console.log(resultado);

module.exports = invertirArray;
