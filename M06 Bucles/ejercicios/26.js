function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var newStr1 = str1.toLowerCase();
  var newStr2 = str2.toLowerCase();
  var finalStr1 = newStr1.split('').sort().join('');
  var finalStr2 = newStr2.split('').sort().join('');
  if (finalStr1 === finalStr2) {
    return true;
  } else {
    return false;
  }
}


var resultado = esAnagrama("Cascada", "cascada");
console.log(resultado);

module.exports = esAnagrama;
