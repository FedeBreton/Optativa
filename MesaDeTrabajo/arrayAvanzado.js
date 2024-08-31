let numeros = [1, 2, 3, 4, 5];

let numeroEldoble = numeros.map(function (porDos) {
  return porDos * 2;
});
//console.log(numeroEldoble);

let deStrigns = ["apple", "banana", "cherry"];

let laLongitud = deStrigns.map(function () {
  return deStrigns.length;
});
//console.log(laLongitud);

let mayores = [10, 20, 30, 40, 50];

let esMayor = mayores.filter(function (elMayor) {
  return elMayor > 25;
});
//console.log(esMayor);
