function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  return texto.split('').reverse().join('');

}
var resultado = invertirTexto("Leonardo Sadoux");
console.log(resultado);


module.exports = invertirTexto;