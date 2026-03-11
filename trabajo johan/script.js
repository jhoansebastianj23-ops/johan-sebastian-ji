function agregarTarea() {
    const texto = document.getElementById("tarea").value;
    const estado = document.getElementById("estado").value;
    const lista = document.getElementById("listaTareas");

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    const div = document.createElement("div");
    div.classList.add("tarea");

    if (estado === "pendiente") {
        div.classList.add("amarillo");
    } else {
        div.classList.add("verde");
    }

    div.textContent = texto;
    lista.appendChild(div);

    document.getElementById("tarea").value = "";
}