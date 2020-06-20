function modal() {
    let boton = document.getElementById("abrirModal");
    let contenedor = document.getElementById("miModal");
    let cerrar = document.getElementById("cerrarModal");


    boton.addEventListener("click", () => {
        contenedor.style.display = "block";
    })

    cerrar.addEventListener("click", () => {
        contenedor.style.display= "none";
    })
}

modal()