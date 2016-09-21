window.addEventListener("load", function() {

    var contenedor = document.getElementById("contenedor");
    var box = document.getElementById("box");
    
    box.addEventListener("click", function() {
        addTag();
    });

    function addTag() {
        box.style.display = "none";

        var formulario = document.createElement("form");
        contenedor.insertBefore(formulario, contenedor.childNodes[0]);

        var publicacion = document.createElement("input");
        formulario.insertBefore(publicacion, formulario.childNodes[0]).classList.add("write");

        var boton = document.createElement("button");
        var texto = document.createTextNode("Guardar");
        boton.appendChild(texto);
        formulario.insertBefore(boton, formulario.childNodes[1]).classList.add("boton");

        var icon = document.createElement("icon");
        var style = formulario.insertBefore(icon, formulario.childNodes[2])
        style.classList.add("icon-cross");
        style.classList.add("iconPosition");

        contenedor.classList.add("caja");
    }
});                     