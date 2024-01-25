function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var prod = 1;
  var multiplicaciones = 0
  if (Number.isInteger(a) && Number.isInteger(b)){
    var ini = Math.min(a, b);
    var fin = Math.max(a, b);

    for (var i = ini; i <= fin ; i++) {
      prod = prod * i;
    };  
    return Number(String(prod)); 
  } else {
  return 0;
  };
  
  
}

var resultado = productoEntreNúmeros(3,5);
console.log(resultado);

module.exports = productoEntreNúmeros;