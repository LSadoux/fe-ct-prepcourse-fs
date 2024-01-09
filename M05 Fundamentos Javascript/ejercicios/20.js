function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  // opciones:

  /* // Define un string que contiene todas las vocales en minúsculas
  var vocales = 'aeiou';
  // Convierte el carácter a minúsculas para hacer la comparación más sencilla
  var letra = letra.toLowerCase();
  // Verifica si el carácter está presente en el string de vocales
  return vocales.indexOf(letra) !==-1; //(true) */

  // Convierte el carácter a minúsculas para hacer la comparación más sencilla
  var letra = letra.toLowerCase();
  // Define un conjunto de vocales
  var vocales = ['a', 'e', 'i', 'o', 'u'];
  // Verifica si el carácter está presente en el conjunto de vocales
  //return vocales.includes(letra);

  // Utiliza una expresión regular para verificar si el carácter es una vocal
 /*  La expresión regular evalúa si el carácter está en el conjunto [aeiou], 
  siendo [aeiou] los caracteres que representan las vocales en minúsculas, 
  y el modificador i permite que la verificación sea insensible a mayúsculas y minúsculas. */
  if (letra.length === 1 && /* /^[aeiou]$/i.test(letra) */ vocales.includes(letra)) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }; 
  
}
var resul = esVocal("w");
console.log(resul);


module.exports = esVocal;
