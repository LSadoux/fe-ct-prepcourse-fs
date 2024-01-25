function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var newString = string.replace(/\s/g,'').toLowerCase();
  return newString === newString.split('').reverse().join(''); 
}
var resultado = esPalindromo("La ruta nos aporto otro paso natural");
console.log(resultado);

module.exports = esPalindromo;
