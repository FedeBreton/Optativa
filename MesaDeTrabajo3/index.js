//let edad = 53; //(el número es a modo de ejemplo, podés cambiarlo o
//crear otras para tener varias pruebas)
let bienvenido = (edad) => {
  if (edad < 0) {
    console.log("Error, edad inválida, por favor ingrese un número válido");
  } else if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else if (edad == 21) {
    console.log("Bienvenido, felicidades por llegar a la mayoria de edad");
  } else {
    console.log("Puede pasar al bar y tomar alcohol.");
  }
  if (edadImpar(edad) && edad >= 0) {
    console.log("sabias que tu edad es impar?");
  }
};

let edadImpar = (a) => a % 2;

bienvenido(-10);

//console.log(edadImpar(edad));
