'use strict';

$(function () {
    $("#boton").click(function () {
        //sacamos los datos de ajax.xml
        $.get(
            "ajax.php",
            { nombre: "Carlos", apellido: "Landa Vázquez" },
            function (datos) {
                let container = document.createElement("div");
                container.className = "container";
                $("body").append(container);
                $(".container").css({ marginTop: "1%" });
                $(".container").text(datos);
                console.log(datos);
            });
    });
});
