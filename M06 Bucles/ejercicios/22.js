function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
/*   var año = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31,
  };
  
  do {
    if (mes >= 1 && mes <= 12 && Number.isInteger(mes)) {
      return año[mes];
    } else {
      console.log("año incorrecto");
      break;
    };   
  } while (true);
} */

  do {
    if (mes >= 1 && mes <= 12 && Number.isInteger(mes)) {
      if (mes === 1 || mes === 3 || mes === 5 || mes === 7|| mes === 8 || mes === 10 || mes === 12) {
        return 31;
      } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        return 30;
      } else  if (mes === 2) {
        return 28;
      } else {
      console.log ("mes inválido");
      };
    } else {
      console.log ("mes inválido");
    } 
    
  } while (false);
  return 0;
}
var resultado = diasEnMes(0);
console.log(resultado);


module.exports = diasEnMes;
