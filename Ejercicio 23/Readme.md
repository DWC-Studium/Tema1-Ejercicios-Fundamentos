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