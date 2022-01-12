let edad = +prompt("Cual es tu edad");
let comprobar = (!(edad >= 14 && edad <= 90)) ? true : false;
console.log(comprobar);
let comprobar2 = (edad < 14 || edad > 90) ? true : false;
console.log(comprobar2);