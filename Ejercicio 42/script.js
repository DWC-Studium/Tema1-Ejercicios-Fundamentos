function formatoFecha(date) {
    let diaDelMes = date.getDate();
    let mes = date.getMonth() + 1;
    let year = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let difMs = new Date() - date;
    let difSeg = Math.round(difMs / 1000);
    let difMin = difSeg / 60;
    let difHora = difMin / 60;
    // formatear
    year = year.toString().slice(-2);
    mes = mes < 10 ? '0' + mes : mes;
    diaDelMes = diaDelMes < 10 ? '0' + diaDelMes : diaDelMes;
    if (difSeg < 1) {
        return 'ahora mismo';
    } else if (difMin < 1) {
        return `hace ${diffSec} seg.`
    } else if (difHora < 1) {
        return `hace ${diffMin} min.`
    } else {
        return `${dayDelMes}.${mes}.${year} ${hora}:${minutos}`
    }
}

alert(formatoFecha(new Date(new Date - 1))); // "ahora mismo"
alert(formatoFecha(new Date(new Date - 30 * 1000))); // "hace 30 seg."
alert(formatoFecha(new Date(new Date - 5 * 60 * 1000))); // "hace 5 min."
// la fecha de ayer como 31.12.2016, 20:00
alert(formatoFecha(new Date(new Date - 86400 * 1000)));