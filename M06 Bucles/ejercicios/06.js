function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  if (num.toString().length === 3) {
    return true;
  } else {
    return false;
  };
}

var resultado = tieneTresDigitos(453);
console.log(resultado);

module.exports = tieneTresDigitos;
