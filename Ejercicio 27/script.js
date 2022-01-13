function potencia(x, n) {
    let resultado = x;

    for (let i = 1; i < n; i++) {
        resultado *= x;
    }

    return resultado;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Potencia ${n} no está soportada, usa un entero positivo`);
} else {
    alert(potencia(x, n));
}