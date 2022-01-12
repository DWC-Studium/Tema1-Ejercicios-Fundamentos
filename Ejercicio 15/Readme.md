<h1>Ejercicio 15</h1>
<p>Reescribe if..else usando múltiples operadores ternarios '?'.</p>
<p>Para legibilidad, es recomendable dividir el código en múltiples líneas.</p>
  let mensaje;
  if (login == 'Empleado') {
    mensaje = 'Hola';
  } else if (login == 'Director') {
    mensaje = 'Felicidades';
  } else if (login == '') {
    mensaje = 'No te has registrado';
  } else {
    mensaje = '';
  }