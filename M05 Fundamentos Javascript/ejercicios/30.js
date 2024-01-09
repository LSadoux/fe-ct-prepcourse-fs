function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:

   return lado * 4;
}
var resultado = retornarPerimetro(5);
console.log(resultado);

module.exports = retornarPerimetro;
