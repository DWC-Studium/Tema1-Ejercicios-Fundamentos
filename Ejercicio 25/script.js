function comprobarEdad1(edad) {
    return (edad > 18) ? true : confirm('¿Tienes el permiso de tus padres para acceder a esta página?');
}

function comprobarEdad2(edad) {
    return (edad > 18) || confirm('¿Tienes el permiso de tus padres para acceder a esta página?');
}