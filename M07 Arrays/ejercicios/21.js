function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var encontrado = false;
  for (var i = 0; i < secuencia.length; i++) {
    if (n % secuencia[i] === 0) {
      encontrado = true;
      break;
    }
  }  
  if (encontrado) {
    return secuencia[i];
  }else {
    return undefined; 
  };
}
var resultado = encontrarPrimerMultiploDeN(5, [3, 5, 11, 21, 63, 85]);
console.log(resultado);


module.exports = encontrarPrimerMultiploDeN;