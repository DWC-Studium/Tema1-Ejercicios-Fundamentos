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