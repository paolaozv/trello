window.addEventListener("load", function() {

    var contenedor = document.getElementById("contenedor");
    var box = document.getElementById("box");
    var formulario = document.getElementById("formulario");
    
    box.addEventListener("click", function() {
        addTag();
    });

    function addTag() {
        box.style.display = "none";

        var entrada = document.createElement("input");
        formulario.insertBefore(entrada, formulario.childNodes[0]);
        entrada.classList.add("write");
        entrada.setAttribute("type", "text");
        entrada.setAttribute("placeholder", "Añadir una lista...")

        var boton = document.createElement("button");
        var textoBoton = document.createTextNode("Guardar");
        boton.appendChild(textoBoton);
        formulario.insertBefore(boton, formulario.childNodes[1]);
        boton.classList.add("boton");
        boton.setAttribute("type", "submit");

        var icon = document.createElement("icon");
        formulario.insertBefore(icon, formulario.childNodes[2]);
        icon.classList.add("icon-cross");
        icon.classList.add("iconPosition");

        contenedor.classList.add("caja");

        boton.addEventListener("click", function(e) {
            e.preventDefault();

            entrada.style.display = "none";
            boton.style.display = "none";
            icon.style.display = "none";

            var texto = entrada.value;
            var titulo = document.createElement("div");
            titulo.innerHTML = texto;
            formulario.insertBefore(titulo, formulario.childNodes[0]);
            titulo.classList.add("titulo");

            var enlace = document.createElement("a");
            var textoEnlace = document.createTextNode("Añadir una tarjeta...");
            enlace.appendChild(textoEnlace);
            formulario.insertBefore(enlace, formulario.childNodes[1]);
            enlace.classList.add("enlace");
        });
    }
});                     