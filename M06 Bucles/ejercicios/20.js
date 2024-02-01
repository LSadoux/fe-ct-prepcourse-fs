function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  var suma = 0
  for (var i = 1; i <= n; i++) {
    suma = suma + i;
    if (suma > 6000) {
     break;
    }; 
     
    console.log(suma);
  }
  return suma;
};
 var reultado = sumarHastaNConBreak(200);
 console.log(reultado);


module.exports = sumarHastaNConBreak;