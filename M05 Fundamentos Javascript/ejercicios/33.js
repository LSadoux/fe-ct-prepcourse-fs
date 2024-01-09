function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero <= 1) {
    return false;
  }
  // Crear un array con los divisores potenciales hasta la raíz cuadrada. ejem: 25.
  var divisores = Array.from ({length: Math.floor(Math.sqrt(numero))} , (_, index) => index + 2); //, añade 2 a cada índice: divisores potenciales de 25 son 2, 3, 4 , 5 y 6.
  
  // 'some' se utiliza para verificar si alguno de esos divisores divide exactamente el número 25
  return !divisores.some( divisor => numero % divisor === 0) || numero === 2;
}
var resultado = esNumeroPrimo(11);
console.log(resultado);


module.exports = esNumeroPrimo;
