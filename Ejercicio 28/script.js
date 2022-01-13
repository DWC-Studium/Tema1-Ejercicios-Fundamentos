function preguntar(pregunta, si, no) {
    if (confirm(pregunta)) si()
    else no();
}

preguntar("¿Estás de acuerdo?",
    () => alert("Estás de acuerdo."),
    () => alert("Has cancelado la ejecución.")
);