function getDiaLocal(date) {
    let dia = date.getDay();
    if (dia == 0) { // el día de la semana 0 (domingo) es 7 en Europa
        dia = 7;
    }
    return dia;
}