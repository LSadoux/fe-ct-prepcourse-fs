function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var newArray = resultadosTest.reduce((acum, eleAct, indice) => {
    console.log( `elemento actual:  ${eleAct}, indice: ${indice}, acumulador: ${acum} `);
   return acum + eleAct;
  }, 0);
  var prom;
  return  prom = newArray / resultadosTest.length;
}
var resultado = promedioResultadosTest([80, 90, 75, 95, 85]);
console.log(resultado);

module.exports = promedioResultadosTest;
