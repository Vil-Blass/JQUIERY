$(document).ready(function(){
    // alert("Eventos cargado")


    let caja = $('#caja')
    // //mouseOver y mouseOut
    // caja.mouseover(function(){

    //     $(this).css('background-color', 'red', '300ms')
        
    // })

    // caja.mouseout(function(){
    //     $(this).css('background-color', 'yellow', )
    // })


    //hover
    function cambiaRojo(){
        $(this).css('background-color', 'red', '300ms')
    }
    function cambiaAmarillo(){
        $(this).css('background-color', 'yellow', '300ms')
        
    }
    function remover(){

        $(this).css('background-color', '' , '200ms')
    }
caja.hover(cambiaRojo, cambiaAmarillo )


//click  y dblclick

caja.click(remover)
caja.dblclick(function(){
    $(this).css('background-color', 'blue', '300ms').css('font-size', '30px').css('color', 'white').css('font-weight', 'bold')

})


// focus y blur

let nombre = $('#nombre')


nombre.focus(function(){
    $(this).css('border', '2px solid green')
})

nombre.blur(function(){
    $(this).css('border', '1px solid black')
    
    
    datos.text($(this).val()).show();


})

let datos = $('#datos')
// mousedown y mouseup
datos.mousedown(function () { 
    $(this).css('border-color', 'darkblue').css('border-width', '5px')
    
});
datos.mouseup(function () {
    $(this).css('border-color', 'black').css('border-width', '1px')

})


//mousemove y mouseleave
$(document).mousemove(function(){
    let div_sigueme = $('#sigueme')

    $('body').css('cursor', 'none')
    div_sigueme.css('left', event.pageX).css('top', event.pageY)
    //mostrar por consola las posicion del raton con eventos clientes x y
    console.log('  X  :', event.clientX, '  Y  :', event.clientY)  
  


})





})











