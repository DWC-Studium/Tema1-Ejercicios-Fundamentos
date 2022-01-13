function leerNumero() {
    let num;
    do {
        num = prompt("Escribe un número", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}
alert(`Leer: ${leerNumero()}`);