let numero = +prompt("Introduce un número entero");

function isInt(value) { return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value)) }

if (isInt(numero)) {
    if (numero < 0) {
        alert("-1");
    } else if (numero > 0) {
        alert("1");
    } else if (numero == 0) {
        alert("0");
    }
} else {
    alert("No has introducido un entero");
}