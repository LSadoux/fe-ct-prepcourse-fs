function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:

  return nombre + " " + apellido;
}
var resultado = combinarNombres("Leonardo", "Sadoux");
console.log(resultado);

module.exports = combinarNombres;
