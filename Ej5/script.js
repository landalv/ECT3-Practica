'use strict';

window.addEventListener('load', function () {
    document.getElementById('boton').addEventListener('click', function () {
        let xhr = new XMLHttpRequest();

        xhr.onload = procesarRespuesta;
        xhr.open("GET", "ajax.json", true);
        xhr.overrideMimeType("text/plain");
        xhr.send();

        function procesarRespuesta() {
            let respuesta = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            let autor = document.getElementById('autor')
            autor.innerText = respuesta.nombre + ' ' + respuesta.apellido;
            let titulo = document.getElementById('titulo');
            let subtitulo = document.getElementById('subtitulo');
            respuesta.libros.forEach(libro => {
                titulo.innerText += "\n " + libro.titulo;
                subtitulo.innerText += "\n " + libro.subTitulo + ' ';
            });
        }
    });
});