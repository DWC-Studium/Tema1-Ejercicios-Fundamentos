/*function getSegundosHoy() {
    let ahora = new Date();
   
    // create an object using the current day/month/year
    let hoy = new Date(now.getFullYear(), now.getMonth(), now.getDate());
   
    let diferencia = ahora - hoy; // diferencia en milisegundos
    return Math.round(diferencia / 1000); // convertimos en segundos
  }*/
function getSegundosHoy() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
alert(getSegundosHoy());