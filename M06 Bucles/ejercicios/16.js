function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
   if (idioma === "aleman") {
    return "Guten Tag!";
   } else if (idioma === "mandarin") {
    return "Ni Hao!";
   } else if ( idioma === "ingles") {
     return "Hello!";
   } else {
    return "Hola!";
   }
}
 var resultado = saludo(2);
 console.log(resultado);


module.exports = saludo;
