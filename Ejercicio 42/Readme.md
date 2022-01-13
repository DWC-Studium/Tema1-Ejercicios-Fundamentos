<h1>Ejercicio 42</h1>
<p>Escribir una función formatoFecha(date) que formatea date como sigue:</p>
<ol>
  <li>Si desde date ha pasado menos de un segundo, entonces devuelve "ahora mismo".</li>
  <li>Si desde date ha pasado menos de 1 minuto, entonces devuelve "hace n seg.".</li>
  <li>Si has pasado menos de una hora, "hace n min.".</li>
  <li>Si no, la fecha completa en formato "DD.MM.YY HH:mm". Esto es: "día.mes.año horas:minutos", todo en formato de 2 dígitos, por ejemplo. 31.12.16 10:00.</li>
</ol>
<p>Por ejemplo:</p>
  alert( formatoFecha(new Date(new Date - 1)) ); // "ahora mismo"
  alert( formatoFecha(new Date(new Date - 30 * 1000)) ); // "hace 30 seg."
  alert( formatoFecha(new Date(new Date - 5 * 60 * 1000)) ); // "hace 5 min."
  // la fecha de ayer, como el 31.12.2016, 20:00
  alert( formatoFecha(new Date(new Date - 86400 * 1000)) );
