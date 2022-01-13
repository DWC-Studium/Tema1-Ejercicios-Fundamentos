function getFechaHace(fecha, dias) {
    let copiaFecha = new Date(fecha);
    copiaFecha.setDate(date.getDate() - dias);
    return copiaFecha.getDate();
}
let fecha = new Date(2015, 0, 2);

alert(getFechaHace(fecha, 1)); // 1, (1 Ene 2015)
alert(getFechaHace(fecha, 2)); // 31, (31 Dic 2014)
alert(getFechaHace(fecha, 365)); // 2, (2 Ene 2014)