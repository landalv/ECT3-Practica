'use strict';

$(function () {
    $("#boton").click(function () {
        //sacamos los datos de ajax.xml
        $.get(
            "ajax.json",
            function (datos) {
                console.log(datos);
                $("#autor").append(datos.nombre + " " + datos.apellido);
                let libros = datos.libros;
                let count = 1;
                libros.forEach(libro => {
                    $("#titulo" + count).append(libro.titulo);
                    $("#subtitulo" + count).append(libro.subTitulo);
                    count++;
                });

            });
    });
});
