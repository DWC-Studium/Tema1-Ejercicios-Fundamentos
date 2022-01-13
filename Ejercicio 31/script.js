function laPrimeraMayuscula(str) {
    if (!str) return str; // Para el caso de un string vacío

    return str[0].toUpperCase() + str.slice(1);
}

alert(laPrimeraMayuscula("juan")); // Juan