'use strict';

function procesaDatos(data) {
    let datos = data;
    console.log(datos);
    let items = $(datos).find("item");
    //recorremos los datos para mostrarlos
    console.log(items);
    let response = "";
    items.each(function () {
        response += "<h3>" + "Nombre: " + $(this).attr("nombre") + ", " + "Apellido: " + $(this).attr("apellido") + "</h3>" + "\n";
        console.log("Nombre: " + $(this).attr("nombre") + "; " + "Apellidos: " + $(this).attr("apellido"));
    });
    $("#boton").after(response);
}

$(function () {
    $("#boton").click(function () {
        //sacamos los datos de ajax.xml con get
        $.get("ajax.xml", function (datos) {
            procesaDatos(datos);
        });

    });
});
