function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var cont = 0
  do {
    num = num + 5;
    cont++;
    console.log(num);
  } while ( cont <= 7);
  return num;
}
 var resultado = doWhile(5);
 console.log(resultado);

 module.exports = doWhile;