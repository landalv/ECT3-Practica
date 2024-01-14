'use strict';

function procesaDatos(data) {
    let datos = data;
    console.log(datos);
    let items = $(datos).find("item");
    //recorremos los datos para mostrarlos
    console.log(items);
    let count = 1;
    items.each(function () {
        $("#contenedor" + count).html("<h3>" + "Nombre: " + $(this).attr("nombre") + ", " + "Apellido: " + $(this).attr("apellido") + "</h3>");
        console.log("Nombre: " + $(this).attr("nombre") + "; " + "Apellidos: " + $(this).attr("apellido"));
        count++;
    });
}

$(function () {
    $("#boton").click(function () {
        //sacamos los datos de ajax.xml
        $.get("ajax.xml", function (datos) {
            procesaDatos(datos);
        });
    });
});
