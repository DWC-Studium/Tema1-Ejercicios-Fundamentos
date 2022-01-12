let n = +prompt("Indica un número");

siguientePrimo:
    for (let i = 2; i <= n; i++) { // para cada i...

        for (let j = 2; j < i; j++) { // buscar un divisor..
            if (i % j == 0) continue siguientePrimo; // no es un primo, nos vamos al siguiente i
        }

        alert(i); // a prime
    }