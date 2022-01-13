function getSegundosHastaManana1() {
    let ahora = new Date();
    // fecha de mañana
    let tomorrow = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 1);
    let diferencia = tomorrow - ahora; // diferencia en milisegundos
    return Math.round(diferencia / 1000); // convert to seconds
}

function getSegundosHastaManana2() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let totalSegundosHoy = (hora * 60 + minutos) * 60 + segundos;
    let totalSegundosEnUnDia = 86400;
    return totalSegundosEnUnDia - totalSegundosHoy;
}