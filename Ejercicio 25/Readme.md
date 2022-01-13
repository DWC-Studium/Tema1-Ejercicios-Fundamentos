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