function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var newArray = array.map((element) => {
    return element * 2;    
  });
  return newArray
}
var resultado = duplicarElementos([1, 2, 3, 4, 5, 6]);
console.log(resultado)

module.exports = duplicarElementos;
