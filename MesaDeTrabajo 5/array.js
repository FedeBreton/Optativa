//ejercicio 1
let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
//console.log(peliculas[2]);

//ejercicio 2
function tituloEnMayuscula(arreglo1) {
  for (let indice = 0; indice < arreglo1.length; indice++) {
    arreglo1[indice] = arreglo1[indice].toUpperCase();
  }
  return peliculas;
}
//onsole.log(tituloEnMayuscula(peliculas));

//ejercicio 3
let masPeliculas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];
//console.log(masPeliculas[4]);

let elUltimo = masPeliculas.pop();
//console.log(elUltimo);

const peliculasAgregadas = (array, elemento) => {
  for (let i = 0; i < elemento.length; i++) {
    elemento[i] = elemento[i].toUpperCase();
    array.push(elemento[i]);
  }

  return array;
};
//console.log(peliculasAgregadas(peliculas, masPeliculas));
//console.log(peliculas);

//ejercicio 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const compara = (array1, array2) => {
  let resultado = true;
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] != array2[i]) {
      resultado = false;
    }
  }
  return resultado;
};
//console.log(compara(asiaScores, euroScores));

//ejercicios extras
let suma = [1, 2, 3];
let sumaArray = (array) => {
  let resultadoTotal = 0;
  for (let i = 0; i < array.length; i++) {
    resultadoTotal = resultadoTotal + array[i];
  }
  return resultadoTotal;
};
console.log(sumaArray(suma));
//console.log(resultadoTotal);
