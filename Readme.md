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
  if (a + b < 4) {
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
    for (let i = 0; i < 3; i++) {
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