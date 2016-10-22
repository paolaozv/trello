;(function() {

    window.addEventListener("load", cargar);

    var section = document.getElementById("section");
    var contenedor = document.getElementById("contenedor");
    var box = document.getElementById("box");
    var formulario = document.getElementById("formulario");
    var entrada = document.getElementById("entrada");
    var boton = document.getElementById("boton");
    var contador = 1;

    function cargar() {
        box.addEventListener("click", addFormulario);
        boton.addEventListener("click", addTitle);
    }

    function addFormulario() {
        this.style.display = "none";
        formulario.style.display = "block";
        this.parentElement.classList.add("box-style");
        entrada.focus();
        entrada.addEventListener("keyup", validarTexto);
        boton.disabled = true;
    }

    function addTitle(e) {
        e.preventDefault();

        if (existeTexto(entrada.value)) {
        
            formulario.style.display = "none";

            var texto = entrada.value;
            var titulo = document.createElement("div");
            titulo.classList.add("titulo");
            titulo.textContent = texto;
            box.parentElement.insertBefore(titulo, box.parentElement.childNodes[0]);
            entrada.value = "";

            var enlace = document.createElement("a");
            enlace.setAttribute("href", "#");
            enlace.classList.add("enlace");
            var textoEnlace = document.createTextNode("Añadir una tarjeta...");
            enlace.appendChild(textoEnlace);
            box.parentElement.insertBefore(enlace, box.parentElement.childNodes[1]);

            enlace.addEventListener("click", addTextArea);

            box.parentElement.addEventListener("dragenter", entraArrastrar);
            box.parentElement.addEventListener("dragover", arrastrarSobre);
            box.parentElement.addEventListener("drop", soltar);

            var contenedorDerecha = document.createElement("div");
            contenedorDerecha.classList.add("contenedorDerecha");
            section.appendChild(contenedorDerecha);
            contenedorDerecha.appendChild(box);
            box.parentElement.classList.add("position");
            box.style.display = "block";
            contenedorDerecha.insertBefore(formulario, contenedorDerecha.childNodes[0]);
        }
    }

    function addTextArea() {
        this.style.display = "none";
        var formTextArea = document.createElement("form");
        this.parentElement.appendChild(formTextArea);

        var textArea = document.createElement("textarea");
        textArea.classList.add("textTarget");
        formTextArea.insertBefore(textArea, formTextArea.childNodes[0]);

        var botonText = document.createElement("button");
        botonText.setAttribute("type", "submit");
        botonText.classList.add("button");
        formTextArea.insertBefore(botonText, formTextArea.childNodes[1]);
        botonText.disabled = true;
        
        textArea.addEventListener("keyup", validarTexto);
        var textoBoton = document.createTextNode("Añadir");
        botonText.appendChild(textoBoton);
        textArea.focus();

        botonText.addEventListener("click", addForm);
    }

    function addForm(e) {
        e.preventDefault();

        var textoDiv = this.previousSibling.value.trim();
        var div = document.createElement("div");
        div.textContent = textoDiv;
        div.classList.add("divBorder");
        this.parentElement.style.display = "none";
        
        var parentButton = this.parentElement;
        parentButton.parentElement.appendChild(div);
        div.parentElement.appendChild(parentButton.previousElementSibling);

        parentButton.parentElement.lastChild.style.display = "block";
        div.id = "tarjeta" + contador;
        div.setAttribute("draggable", "true");
        
        div.addEventListener("dragstart", empiezaArrastrar);
        div.addEventListener("dragleave", dejaArrastrar);
        div.addEventListener("dragend", terminaArrastrar);
        contador++;
    }

    function empiezaArrastrar(e) {
        e.dataTransfer.setData("text", this.id);
        this.classList.add("color");
        var remove = document.getElementsByClassName("animated");
        for(var i = 0, longitud = remove.length; i < longitud; i++) {
            remove[i].classList.remove("animated", "shake");
        }
    }

    function arrastrarSobre(e) {
        e.preventDefault();
    }

    function soltar(e) {
        var idArrastrado = e.dataTransfer.getData("text");
        this.insertBefore(document.getElementById(idArrastrado), this.lastElementChild);
        this.classList.add("shake", "animated");
        var remove = document.getElementsByClassName("bordeColor");
        for(var i = 0, longitud = remove.length; i < longitud; i++) {
            remove[i].classList.remove("bordeColor");
        }
    }

    function terminaArrastrar(e) {
        this.classList.remove("color");
        this.parentElement.classList.remove("bordeColor");
    }

    function entraArrastrar(e) {
        this.classList.add("bordeColor");
    }

    function dejaArrastrar(e) {
        this.parentElement.classList.remove("bordeColor");
    }

    function validarTexto() {
        var mensaje = this.value.trim();
        if (mensaje.length == 0) {
            this.nextElementSibling.disabled = true;
        } else {
            this.nextElementSibling.disabled = false;
        }
    }

    function existeTexto(mensaje) {
        mensaje = mensaje.trim();
        if (mensaje.length == 0) {
            return false;
        } else {
            return true;
        }
    }

})();