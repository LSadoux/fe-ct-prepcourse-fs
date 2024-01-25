function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:

  if (valor) return "Soy verdadero";
  return "Soy falso";

}
var resultado = esVerdadero(false);
console.log(resultado);


module.exports = esVerdadero;
