function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

  var cont = 0
  if (!array.includes(elemento)) {
    return -1;
  } else if (array.length === 1 ) {
    return 0;
  } else {
    for (var i = 0; i <= array.length; i++){
      if (elemento === array[i]) {
        cont = cont + 1;
        if ( cont > 1) {
          return 0;
        };
      };
    };
  };
  return 1;
}

var resultado = encontrarElemento(1,[1]);
console.log(resultado);

module.exports = encontrarElemento;
