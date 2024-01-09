function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:

  return str + "!";
}
var resultado = agregarSimboloExclamacion("Hello world");
console.log(resultado);

module.exports = agregarSimboloExclamacion;
