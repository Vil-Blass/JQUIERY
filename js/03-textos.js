// uso estricto
'use strict';
$(document).ready(function () {
    // alert("hola");

    $('a').each(function () {
        let estos = $(this);
        let enlaces = estos.attr('href');
        console.log(enlaces);
        estos.text(enlaces);
        estos.attr("target", "_blank");

    })


    $("#addButton").removeAttr('disabled')
    .click(function () {
       
        reloadLinks();
    })
});

function reloadLinks() {

    let enlace = $("#addLink").val();
    $("#addLink").val('');
    
    $("#menu").append("<li><a href='" + enlace + "'>" + enlace + "</a></li>");
    $('#menu').prepend("<li><a href='" + enlace + "'>" + enlace + "</a></li>");


}

