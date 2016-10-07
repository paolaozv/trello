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
        boton.addEventListener("click", addText);
        boton.addEventListener("click", addSection);
    }

    function addFormulario() {
        this.style.display = "none";
        formulario.style.display = "block";
        this.parentElement.classList.add("caja");
        entrada.focus();
    }

    function addText(e) {
        e.preventDefault();

        formulario.style.display = "none";

        var texto = entrada.value;
        var titulo = document.createElement("div");
        titulo.innerHTML = texto;
        box.parentElement.insertBefore(titulo, box.parentElement.childNodes[0]);
        titulo.classList.add("titulo");
        entrada.value = "";

        var enlace = document.createElement("a");
        var textoEnlace = document.createTextNode("Añadir una tarjeta...");
        enlace.appendChild(textoEnlace);
        box.parentElement.insertBefore(enlace, box.parentElement.childNodes[1]);
        enlace.classList.add("enlace");
        enlace.setAttribute("href", "#");

        box.parentElement.addEventListener("dragenter", entraArrastrar);
        box.parentElement.addEventListener("dragover", arrastrarSobre);
        box.parentElement.addEventListener("drop", soltar);

        enlace.addEventListener("click", addTextArea);
    }

    function addSection(e) {
        e.preventDefault();

        var contenedorDerecha = document.createElement("div");
        section.appendChild(contenedorDerecha);

        contenedorDerecha.classList.add("contenedorDerecha");

        contenedorDerecha.appendChild(box);
        box.style.display = "block";
        contenedorDerecha.insertBefore(formulario, contenedorDerecha.childNodes[0]);
        box.parentElement.classList.add("position");
    }

    function addTextArea() {
        this.style.display = "none";
        var formTextArea = document.createElement("form");
        this.parentElement.appendChild(formTextArea);
        var textArea = document.createElement("textarea");
        formTextArea.insertBefore(textArea, formTextArea.childNodes[0]);
        textArea.classList.add("textTarget");
        var botonText = document.createElement("button");
        formTextArea.insertBefore(botonText, formTextArea.childNodes[1]);
        var textoBoton = document.createTextNode("Añadir");
        botonText.appendChild(textoBoton);
        botonText.classList.add("button");
        botonText.setAttribute("type", "submit");
        textArea.focus();

        botonText.addEventListener("click", addForm);
    }

    function addForm(e) {
        e.preventDefault();

        var textoDiv = this.previousSibling.value;
        var div = document.createElement("div");
        div.innerHTML = textoDiv;
        this.parentElement.style.display = "none";
        var parentButton = this.parentElement;
        parentButton.parentElement.appendChild(div);
        div.classList.add("divBorder");
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
        this.classList.remove("shake", "animated");
    }

    function arrastrarSobre(e) {
        e.preventDefault();
    }

    function soltar(e) {
        var idArrastrado = e.dataTransfer.getData("text");
        this.insertBefore(document.getElementById(idArrastrado), this.lastElementChild);
        this.classList.remove("bordeColor");
        this.classList.add("shake", "animated");
    }

    function terminaArrastrar(e) {
        this.classList.remove("color");
    }

    function entraArrastrar(e) {
        this.classList.add("bordeColor");
    }

    function dejaArrastrar(e) {
        this.parentElement.classList.remove("bordeColor");
        this.parentElement.classList.remove("shake", "animated");
    }

})();