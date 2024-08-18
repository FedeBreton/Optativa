//convertir pulgadas a cm.
function convertir(pulgada) {
  return pulgada * 2.54;
}
console.log(convertir(10));

//convertir a URL un string.
function crearUrl(URL) {
  return "http://www." + URL + ".com";
}
console.log(crearUrl("elsisabe"));

//crear frase con signos de admiracion.
function admiracion(frase) {
  return "¡" + frase + "!";
}
console.log(admiracion("Lo estoy LOGRANDOOOO..."));

//calcular edad de perros (funcion expresada)
let edadPerro = function (anios) {
  return anios * 7;
};
console.log(edadPerro(5));

//calcula hora trabajada (funcion arrow/flecha)
let calcularHora = (sueldoTotal) => sueldoTotal / 40;
console.log(calcularHora(260000));
