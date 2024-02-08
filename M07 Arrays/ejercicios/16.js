function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  /* var newArraySet = new Set();
    
  *** Verificar si todos los meses están presentes en el array:
  
  if (array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre')) {
    
    Filtrar los meses y guardarlos en el nuevo array usando un Set
    
    array.forEach((mes) => {
      if(mes.toLowerCase() === 'enero' || mes.toLowerCase() === 'marzo' || mes.toLowerCase() === 'noviembre') {
        newArraySet.add(mes.toLowerCase());
      };
    });
  } else {

    *** Si alguno de los meses no está, devolver el mensaje:

    return "No se encontraron los meses pedidos";
  };

  return Array.from(newArraySet);
} */




/*  var newArray = [];

  // Verificar si todos los meses están presentes en el array
  if (array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre')) {

    // Filtrar los meses y guardarlos en el nuevo array evitando repeticiones
    array.forEach((mes) => {
      var mesLowerCase = mes.toLowerCase();
      if ((mesLowerCase === 'enero' || mesLowerCase === 'marzo' || mesLowerCase === 'noviembre') && !newArray.includes(mesLowerCase)) {
        newArray.push(mesLowerCase);
      };
    });
  } else {

    // Si alguno de los meses no está, devolver el mensaje
    return "No se encontraron los meses pedidos";
  };

  // Convertir el nuevo array a mayúsculas y ordenarlo:

  newArray = newArray.map(mes => mes.charAt(0).toUpperCase() + mes.slice(1)).sort();
  return newArray;
 */


  var mesesEncontrados = [];

  // Iterar sobre el arreglo dado
  for (let i = 0; i < array.length; i++) {
    // Verificar si el mes actual es "Enero", "Marzo" o "Noviembre"
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      // Agregar el mes al arreglo de meses encontrados
      mesesEncontrados.push(array[i]);
    }
  }

  // Verificar si se encontraron todos los meses pedidos
  if (mesesEncontrados.length === 3) {
    // Retornar el arreglo con los meses encontrados
    return mesesEncontrados;
  } else {
    // Retornar el string indicando que no se encontraron todos los meses pedidos
    return "No se encontraron los meses pedidos";
  }
}


var resultado = mesesDelAño(['Marzo' , 'Enero', 'Noviembre']);
console.log(resultado);

module.exports = mesesDelAño;
