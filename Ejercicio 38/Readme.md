<h1>Ejercicio 38</h1>
<p>Crear una fucnión getFechaHace(fecha, dias) que devuelva el día del mes que fue dias días antes de fecha.</p>
<p>Por ejemplo, si hoy es 20, entonces getFechaHace(new Date(), 1) debería ser 19 y getFechaHace(new Date(), 2) debería ser 18.</p>
<p>Debería funcionar de forma fiable entre meses y años:</p>
  let fecha = new Date(2015, 0, 2);
  alert( getFechaHace(fecha, 1) ); // 1, (1 Ene 2015)
  alert( getFechaHace(fecha, 2) ); // 31, (31 Dic 2014)
  alert( getFechaHace(fecha, 365) ); // 2, (2 Ene 2014)
<p>Nota. La función no debe modificar la fecha dada.</p>
