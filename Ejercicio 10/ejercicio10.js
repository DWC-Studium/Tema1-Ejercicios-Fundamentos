let numero1 = prompt("Introduce el primer número entero");
let numero2 = prompt("Introduce el segundo número entero");

function isInt(value) { return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value)) }

if (isInt(numero1) && isInt(numero2)) {
    let suma = parseInt(numero1) + parseInt(numero2);
    console.log(suma);
} else {
    alert("No has introducido un entero");
}