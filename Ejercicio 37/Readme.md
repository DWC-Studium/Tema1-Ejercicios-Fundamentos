<h1>Ejercicio 37</h1>
<p>Los países europeos tienen días de la semana comenzando en lunes (número 1), luego martes (número 2), y así hasta domingo (número 7). Escribir una función getDiaLocal(date) que devuelva el día "europeo" de la semana para date.</p>
  let date = new Date(2012, 0, 3);  // 3 Jan 2012
  alert( getDiaLocal(date) );       // martes, debería mostrar 2
  