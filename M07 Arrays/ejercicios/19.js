function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  var newArray =[];
  for (var i = 1; i <= 10; i++) {
    if (i === 5){
    continue;
    } else {
    newArray.push(num = num + 2);
    };
  };
  return newArray;
}
var resultado = continueStatement(1);
console.log(resultado);

module.exports = continueStatement;
