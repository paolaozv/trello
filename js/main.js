window.addEventListener("load", function() {

    var section = document.getElementById("section");
    var contenedor = document.getElementById("contenedor");
    var box = document.getElementById("box");
    var formulario = document.getElementById("formulario");
    var entrada = document.getElementById("entrada");
    var boton = document.getElementById("boton");

    box.addEventListener("click", function() {
        this.style.display = "none";
        formulario.style.display = "block";
        this.parentElement.classList.add("caja");
        entrada.focus();
    });
        
    boton.addEventListener("click", function(e) {
        e.preventDefault();

        addText();
        addSection();
    });

    function addText() {
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

        enlace.addEventListener("click", function() {
            addTextArea(this);
        });
    }

    function addSection() {
        var contenedorDerecha = document.createElement("div");
        section.appendChild(contenedorDerecha);

        contenedorDerecha.classList.add("contenedorDerecha");

        contenedorDerecha.appendChild(box);
        box.style.display = "block";
        contenedorDerecha.insertBefore(formulario, contenedorDerecha.childNodes[0]);
    }

    function addTextArea(enlace) {
        console.log(enlace);
        enlace.style.display = "none";
        var formTextArea = document.createElement("form");
        enlace.parentElement.appendChild(formTextArea);
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
    }

});           
   


        
              


