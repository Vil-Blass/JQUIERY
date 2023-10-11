// uso estricto
'use strict';
$(document).ready(function () {
    console.log('Estamos listos!');

    //selectores de id
    $('#rojo').css('background', 'red').css('color', 'white');


    $('#amarillo').css('background', 'yellow').css('color', 'green');

    $('#verde').css('background', 'green').css('color', 'white');

    //selectores de clase
    let miClase = $('.zebra');
    console.log(miClase.eq);
    let miClase2 = $('.sin_borde').click(function () {
        console.log('click dado');
        //añadir clase
        $(this).addClass('zebra');
    });


    //selectores de etiquetas
    let parrafos = $('p').css('cursor', 'pointer');
    parrafos.click(function () {
        console.log('click dado');
        let that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }

    });

    //selectores de atributos

    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue').css('color', 'white');

// otros selectores

// $('p,a').addClass('margen-superior');
let buscar = $('#caja').find('resaltado')
    console.log(buscar);




});