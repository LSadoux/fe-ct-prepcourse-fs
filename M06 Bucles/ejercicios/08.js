function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   return a >= 0 && a < 10;
}
var resultado = esPositivoOInferiorA10(-2);
console.log(resultado);

module.exports = esPositivoOInferiorA10;
