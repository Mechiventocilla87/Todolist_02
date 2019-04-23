function addTask(){
    var ul = $('#ul');
    var valorInput = $('#input_text').val();
    var span = '<span>'+valorInput +'</span> <br> ';
    var input = '<input class="elInput hidden" type="text">';
    var btnGuardar= "<button class='guardar hidden'>Save</button>";
    var btnEditar = "<button class='editar'>Edit</button>";
    var btnBorrar = "<button class='borrar'>Trash</button>";

    if (valorInput != '') {
    ul.append('<li class="li_add">'+span+input+btnGuardar+btnEditar+btnBorrar+'<hr class="hr_add"></li>');
    $('.totales').html('Cantidad de tareas creadas: '+ contador());
    }

    $('#input_text').val('');
}
 

//to add tasks pushing button
$('#boton').on('click', function (){
    addTask();
})


$('#input_text').on('keypress', function(e){
    
    if(e.keyCode===13){
       addTask();
    }
})


//counter of <li>
function contador(){
    var cantidadDeLi = $('li').length;
    return cantidadDeLi
    
}

//complete task counter
function contadorTach_(){
    var cantidadDeLiTachado = $('.tachado').length;
    return cantidadDeLiTachado
}


//to delete task
$(document).on('click', '.borrar', function () { 
    $(this).parent().remove();
    $('.totales').html('Cantidad de tareas creadas: '+ contador());
    $('.finalizadas').html('Cantidad de tareas finalizadas: '+ contadorTach_() +'  ');
})


//to edit task
$(document).on('click', '.editar', function () { 
    var valor = $(this).siblings('span').html();
    $(this).siblings('.elInput').removeClass('hidden'); 
    $(this).siblings('.elInput').val(valor);  
    $(this).addClass('hidden');
    $(this).siblings('.borrar').addClass('hidden');
    $(this).siblings('.guardar').removeClass('hidden');
    $(this).siblings('span').addClass('hidden');
});


//task complete
$(document).on('click', 'li span', function(){
    if($(this).hasClass("tachado")){
      $(this).removeClass("tachado")
    } else{
      $(this).addClass("tachado")
    
    }

    $('.finalizadas').html('Cantidad de tareas finalizadas: '+ contadorTach_()+'  ')
    
});


//to save task edited
$(document).on('click', '.guardar', function(){
    var nuevaTarea = $(this).siblings('.elInput').val();
    $(this).siblings('span').html(nuevaTarea);
    $(this).siblings('span').removeClass('hidden');
    $(this).addClass('hidden');
    $(this).siblings('.elInput').addClass('hidden');
    $(this).siblings('.editar').removeClass('hidden');
    $(this).siblings('.borrar').removeClass('hidden');

});


//to save doing enter in task edited
$(document).on('keypress', 'li .elInput', function(e) {
    if (e.keyCode === 13) {
        var nuevaTarea = $(this).val();
        $(this).siblings('span').html(nuevaTarea);
        $(this).siblings("span").removeClass("hidden");
        $(this).siblings(".borrar").removeClass("hidden");
        $(this).siblings(".editar").removeClass("hidden");
        $(this).addClass("hidden");
        $(this).siblings('.guardar').addClass("hidden");
    }
 });
















