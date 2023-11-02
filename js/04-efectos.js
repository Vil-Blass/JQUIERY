$(document).ready(function () {
    let ocultar = $("#ocultar");
    let mostrar = $("#mostrar");
    let caja = $("#caja");
    let todoEnUno = $("#todoEnUno");
    let animarte = $("#animame");


    //mostrar
    mostrar.click(function () {
        $(this).hide();
        $(ocultar).show();
        // caja.slideDown('slow');
        caja.show('slow');
        // caja.fadeTo('slow', 0.8);


        // caja.fadeIn('slow');
    });


    //ocultar
    ocultar.click(function () {
        $(this).hide();
        $(mostrar).show();
        // caja.slideUp('slow');

        caja.hide('slow');
        // caja.fadeTo('slow', 0.2);

        // caja.fadeOut('slow');
    });

    //todo en uno
    todoEnUno.click(function () {
     
        caja.toggle('fast');
        // caja.slideToggle('slow');
        // caja.fadeToggle('slow');
    
 

    })

   //animar la caja
    animarte.click(function(){
        caja.animate({
       marginLeft: '550px',
    })
    })



});