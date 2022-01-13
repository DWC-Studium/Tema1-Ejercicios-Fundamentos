<h1>Ejercicio 1</h1>
<p>Crear una página que muestre el mensaje: "Me encanta JavaScript".</p>

<h1>Ejercicio 3</h1>
<ul>
    <li>Declara dos variables: admin y nombre.</li>
    <li>Asigna el valor "Juan" a nombre.</li>
    <li>Copia el valor de nombre a admin.</li>
    <li>Muestra el valor de admin usando alert (debe salir “Juan”).</li>
</ul>

<h1>Ejercicio 9</h1>
<p>Crea una página web que pregunta por un nombre y lo muestra por pantalla.</p>

<h1>Ejercicio 10</h1>
<p>Crea un script que pide al visitante introducir dos números y muestra su suma.</p>

<h1>Ejercicio 12</h1>
<p>Usando la construcción if..else, escribe el código que pregunte: ‘¿Cuál es el nombre "oficial" de JavaScript?’</p>
<p>Si el visitante introduce "ECMAScript", entonces muestra “¡Correcto!”, y si no muestra: "¿No lo sabes? ¡ECMAScript!”</p>

<h1>Ejercicio 13</h1>
<p>Usando if..else, escribe el código que obtiene un número a través de prompt y luego muestra en un alert:</p>
<ol>
    <li>1, si el valor es mayor que cero,</li>
    <li>-1, si es menor que cero,</li>
    <li>0, si es igual a cero.</li>
</ol>
<p>En esta tarea asumimos que la entrada es siempre un número.</p>

<h1>Ejercicio 14</h1>
<p>SReescribe este if usando el operador ternario '?':</p>

  if (a + b <p 4) {
    result = 'Por debajo';
  } else {
    result = 'Por encima';
  }

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

<h1>Ejercicio 16</h1>
<p>Escribe una condición “if” para comprobar que edad está entre 14 y 90 inclusive.</p>
<p>“Inclusive” significa que edad puede alcanzar los límites 14 o 90.</p>

<h1>Ejercicio 17</h1>
<p>Escribe una condición if para comprobar que edad NO está entre 14 y 90 inclusive.</p>
<p>Crea dos variantes: la primera usando NOT !, y la segunda sin usarla.</p>

<h1>Ejercicio 18</h1>
<p>Escribe el código que pregunta por un login con prompt.</p>
<p>Si el visitante escribe "Admin", entonces prompt pregunta por la contraseña. Si el input es una línea vacía o Esc, mostrar “Cancelado.”; si es otro string, mostrar “No te conozco</p>”.
<p>La contraseña se comprueba como sigue:</p>
<ol>
    <li>Si es igual a “TheMaster”, entonces muestra “Bienvenido!”,</li>
    <li>Otro string, muestra “Contraseña incorrecta”,</li>
    <li>Para un string vacío o input cancelado, muestra “Cancelado.”</li>
</ol>
<p>Usa bloques de if anidados. Piensa en la legibilidad general del código.</p>
<p>Pista: pasando un input vacío a un prompt se devuelve un string vacío ''. Presionando Esc durante un prompt se devuelve null.</p>

<h1>Ejercicio 19</h1>
<p>Usa el bucle for para sacar cada número par del 2 al 10.</p>

<h1>Ejercicio 20</h1>
<p>Reescribe el código cambiando el bucle for por while sin alterar su comportamiento (la salida debe ser la misma).</p>

    for (let i = 0; i <p 3; i++) {
      alert( `número ${i}!` );
    }

<h1>Ejercicio 21</h1>
<p>Escribe un bucle que con un prompt que pida un número mayor que 100. Si el visitante introduce otro número lo pide de nuevo.</p>
<p>El bucle debe preguntar por un número hasta que el visitante introduzca un número mayor que 100 o cancele el input/introduzca una línea vacía.</p>
<p>Aquí asumimos que el visitante sólo introduce números. No hay necesidad de implementar un manejo especial de valores no numéricos en esta tarea.</p>

<h1>Ejercicio 22</h1>
<p>Un número entero mayor que uno 1 se le llama primo si no se puede dividir sin resto por ningún número excepto 1 y sí mismo.</p>
<p>En otras palabras, n > 1 es primo si no puede ser dividido exactamente por nada excepto 1 y n.</p>
<p>Por ejemplo, 5 es primo, porque no se puede dividir sin resto por 2, 3 ni 4.</p>
<p>Escribe el código que muestra los números primos en el intervalo de 2 a n.</p>
<p>Para n = 10 el resultado será 2,3,5,7.</p>
<p>Nota: El código debe funcionar para cualquier n, no hacer que funcione para un valor fijo.</p>

<h1>Ejercicio 23</h1>
<p>Escribe el código usando if..else que correspondería al siguiente switch:</p>
    
    switch (navegador) {
      case 'Edge':
        alert( "Tienes Edge!" );
        break;
      case 'Chrome':
      case 'Firefox':
      case 'Safari':
      case 'Opera':
        alert( 'Está bien, también soporto estos navegadores' );
        break;
      default:
        alert( 'Espero que esta página se vea bien' );
    }

<h1>Ejercicio 25</h1>
<p>La siguiente función devuelve true si el parámetro edad es mayor que 18.</p>
<p>En cualquier otro caso pide una confirmación y la devuelve como resultado.</p>

  function comprobarEdad(edad) {
    if (edad > 18) {
      return true;
    } else {
      return confirm('¿Tienes el permiso de tus padres para acceder a esta página?');
    }
  }

<p>Reescribe manteniendo el mismo comportamiento, pero sin if, en una única línea.</p>
<p>Haz dos variantes:</p>
<ol>
  <li>Usando un operador de interrogación ?</li>
  <li>Usando OR ||</li>
</ol>

<h1>Ejercicio 26</h1>
<p>Escribe una función min(a,b) que devuelve el menor de los dos números a y b.</p>
<p>Por ejemplo:</p>

  min(2, 5) == 2
  min(3, -1) == -1
  min(1, 1) == 1

<h1>Ejercicio 27</h1>
<p>Escribe una función potencia(x,n) que devuelve x elevado a n. O, en otras palabras, multiplica x por sí mismo n veces y devuelve el resultado.</p>

  potencia(3, 2) = 3 * 3 = 9
  potencia(3, 3) = 3 * 3 * 3 = 27
  potencia(1, 100) = 1 * 1 * ...* 1 = 1

<p>Crea una página web que pide x y n, y luego muestra el resultado de potencia(x,n).</p>
<p>Nota: En esta tarea la función debe soportar sólo valores naturales de n: enteros desde 1.</p>

<h1>Ejercicio 28</h1>
<p>Reemplaza las funciones con funciones flecha en el código:</p>

  function preguntar(pregunta, si, no) {
    if (confirm(pregunta)) si()
    else no();
  }
  preguntar(
    "¿Estás de acuerdo?",
    function() { alert("Estás de acuerdo."); },
    function() { alert("Has cancelado la ejecución."); }
  );

<h1>Ejercicio 29</h1>
<p>Crear una función leerNumero que pide números hasta que el visitante introduce un valor numérico válido.</p>
<p>El valor resultante debe ser devuelto como número.</p>
<p>El visitante también puede parar el proceso introduciendo una línea vacía o presionando “CANCELAR”. En este caso, la función debería devolver null.</p>

<h1>Ejercicio 30</h1>
<p>La función Math.random() crea un valor aleatorio de 0 a 1 (sin incluir 1).</p>
<p>Escribe la función random(min, max) para generar una función que genere un número decimal aleatorio de min a max (sin incluir max).</p>
<p>Ejemplos de funcionamiento:</p>

    alert( random(1, 5) ); // 1.2345623452
    alert( random(1, 5) ); // 3.7894332423
    alert( random(1, 5) ); // 4.3435234525

<h1>Ejercicio 31</h1>
<p>Escribe una función laPrimeraMayuscula(str) que devuelve string str con el primer carácter en mayúscula, por ejemplo:</p>

    laPrimeraMayuscula("julio") == "Julio";

<h1>Ejercicio 32</h1>
<p>Escribe una función checkSpam(str) que devuelve true si str contiene ‘viagra’ o ‘XXX’, y false en caso contrario.</p>
<p>Debe funcionar sin tener en cuenta mayúsculas y minúsculas:</p>

    checkSpam('compra ViAgRA ahora') == true
    checkSpam('xxxxx gratis') == true
    checkSpam("correo importante") == false

<h1>Ejercicio 33</h1>
<p>Crear una función truncar(str, maxlength) que comprueba la longitud de str y, si excede maxlength – reemplaza el final de str con el caracter de elipsis "…", para hacer su longitud igual a maxlength.</p>
<p>El resultado de la función debería ser el string, truncado en su caso.</p>
<p>Por ejemplo:</p>

    truncar("Lo que me gustaría contarte de este tema es:", 20) = "Lo que me gustaría …"
    truncar("Hola a todos!", 20) = "Hola a todos!"

<h1>Ejercicio 34</h1>
<p>Tenemos un precio de la forma "$120". Esto es: el signo de dólar va primero y luego el número.</p>
<p>Crear una función extraerValorMoneda(str) que extraiga el valor numérico de este string y lo devuelva.</p>
<p>Ejemplo:</p>

  alert( extraerValorMoneda('$120') === 120 ); // true

<h1>Ejercicio 35</h1>
<p>Crea un objeto Date para la fecha: Feb 20, 2012, 3:12am. La zona horaria es la local.</p>
<p>Muéstrala usando alert.</p>

<h1>Ejercicio 36</h1>
<p>Escribir una función getDiaSemana(date) para mostrar el día de la semana en formato corto: ‘L’, ‘M’, ‘X’, ‘J’, ‘V’, ‘S’, ‘D’.</p>
<p>Por ejemplo:</p>

  let date = new Date(2012, 0, 3);  // 3 Jan 2012
  alert( getDiaSemana(date) );        // debería mostrar "M"

<h1>Ejercicio 37</h1>
<p>Los países europeos tienen días de la semana comenzando en lunes (número 1), luego martes (número 2), y así hasta domingo (número 7). Escribir una función getDiaLocal(date) que devuelva el día "europeo" de la semana para date.</p>

  let date = new Date(2012, 0, 3);  // 3 Jan 2012
  alert( getDiaLocal(date) );       // martes, debería mostrar 2

<h1>Ejercicio 38</h1>
<p>Crear una fucnión getFechaHace(fecha, dias) que devuelva el día del mes que fue dias días antes de fecha.</p>
<p>Por ejemplo, si hoy es 20, entonces getFechaHace(new Date(), 1) debería ser 19 y getFechaHace(new Date(), 2) debería ser 18.</p>
<p>Debería funcionar de forma fiable entre meses y años:</p>

  let fecha = new Date(2015, 0, 2);
  alert( getFechaHace(fecha, 1) ); // 1, (1 Ene 2015)
  alert( getFechaHace(fecha, 2) ); // 31, (31 Dic 2014)
  alert( getFechaHace(fecha, 365) ); // 2, (2 Ene 2014)

<p>Nota. La función no debe modificar la fecha dada.</p>

<h1>Ejercicio 39</h1>
<p>Escribir una función getUltimoDiaMes(year, month) que devuelve el último día del mes. Algunas veces es 30, 31 o incluso 28/29 si es febrero.</p>
<p>Parámetros:</p>
<ol>
  <li>year – año de 4 dígitos, por ejemplo 2012.</li>
  <li>month – mes, de 0 a 11.</li>
</ol>
<p>Por ejemplo, getUltimoDiaMes(2012, 1) = 29 (febrero de año bisiesto).</p>

<h1>Ejercicio 40</h1>
<p>Escribir una función getSegundosHoy() que devuelva el número de segundos desde el principio del día de hoy.</p>
<p>Por ejemplo, si ahora son las 10:00 am, y no se hay cambio de hora de verano, entonces:</p>

  getSegundosHoy() == 36000 // (3600 * 10)

<p>La función debería funcionar en cualquier día. Esto es, debería no tener guardado el valor de “hoy”.</p>

<h1>Ejercicio 41</h1>
<p>Crear una función getSegundosHastaManana() que devuelva el número de segundos que quedan hasta mañana.</p>
<p>Por ejemplo, si hoy es 23:00, entonces:</p>

  getSegundosHastaManana() == 3600

<p>Nota. La función debe funcionar cualquier día del año, el "hoy" no está escrito.</p>

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
