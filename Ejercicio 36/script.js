function getDiaSemana(date) {
    let dias = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    return dias[date.getDay()];
}

let fecha = new Date(2014, 0, 3); // 3 de enero de 2014
alert(getDiaSemana(fecha)); // V