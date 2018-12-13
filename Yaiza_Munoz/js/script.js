// Constructor Libro para después crear libros nuevos
function Libro(titulo, autor, isbn, generos) {
  this.titulo = titulo;
  this.autor = autor;
  this.isbn = isbn;
  this.generos = generos;
}

//inicializamos array de libros

var libros = new Array();

//creamos libro

function crearLibro(libroNuevo){
  var inLibros = false;
  $('#lista-dispo p').each(function(){
    if($(this).html() == libroNuevo.titulo && $(this).html() == libroNuevo.autor){
      inLibros = true;
    }
    if($(this).hasClass('creado')){
      $(this).removeClass('creado');
    }
  });
  if (!inLibros) {
    $('#lista-dispo').append('<p class="creado">' + libroNuevo.titulo + '</p>');
    libros.push(libroNuevo);
    console.log(libros);
  }else {
    alert('El libro que se está intentando crear llamado' + libroNuevo.titulo + ' ya existe');
  }
}

//función que sirve para cuando pulsamos en añadir nuevo Libro

function pulsarAnadir(){
  var tituloNuevo = document.getElementById("titulo1").value;
  var autorNuevo = document.getElementById("autor1").value;
  var isbnNuevo = document.getElementById("isbn1").value;
  var generosNuevos = new Array();

  $('#checkboxes input').each(function(){
    if($(this).prop('checked')){
      generosNuevos.push($(this).val());
    }
  });
  var libroNuevo = new Libro(tituloNuevo,autorNuevo,isbnNuevo,generosNuevos);
  crearLibro(libroNuevo);
}

//funcion que sirve cuando pulsamos en prestar

//recorre el array de libros y si coincide el valor del titulo con el titulo que está lo presta

function pulsarPrestar(){
  var titulo = document.getElementById("titulo2").value;
  for (var i = 0; i < libros.length; i++) {
    if (titulo == libros[i].titulo) {
      prestarLibro(libros[i]);
    }
  }
}

//función de prestar libro

function prestarLibro(libro){

  $('#lista-prest p').each(function(){
    if($(this).hasClass('prestado')){
      $(this).removeClass('prestado');
    }
  });
    $('#lista-prest').append('<p class="prestado">'+libro.titulo+'</p>');
    $("#lista-dispo .seleccionado").remove();
    $("#consulta")[0].reset();

}

//función de pulsar devolver

function pulsarDevolver(){
  var titulo = document.getElementById("titulo2").value;
  for (var i = 0; i < libros.length; i++) {
    if (titulo == libros[i].titulo) {
      devolverLibro(libros[i]);
    }
  }
}
//funcion de devolver libro

function devolverLibro(libro){
  $('#lista-dispo p').each(function(){
    if($(this).hasClass('devuelto')){
      $(this).removeClass('devuelto');
    }
  });

    $('#lista-dispo').append('<p class="devuelto">'+libro.titulo+'</p>');
    $("#lista-dispo .seleccionado").remove();
    $("#consulta")[0].reset();

}


$(document).ready(function(){

//función para seleccionar en los libros de la lista de disponibles

  $("#lista-dispo").on('click', 'p', function(){
    for (var i = 0; i < libros.length; i++) {
      if ($(this).html() == libros[i].titulo) {
        var libroSeleccionado = libros[i];
        if (document.getElementById("titulo2").value == libros[i].titulo) {
          alert('Ya lo tienes seleccionado');
        }else {
          $(this).removeClass('creado');
          $(this).addClass('seleccionado');

          document.getElementById("titulo2").value = libroSeleccionado.titulo;
          document.getElementById("autor2").value = libroSeleccionado.autor;
          document.getElementById("isbn2").value = libroSeleccionado.isbn;
          document.getElementById("generos2").value = libroSeleccionado.generos;

          console.log(libroSeleccionado);
        }
      }

    }
  });


  //seleccionar un libro dela lista de prestamos y pasar sus valor al formulario de consulta

  $("#lista-prest").on('click', 'p', function(){
    for (var i = 0; i < libros.length; i++) {
      if ($(this).html() == libros[i].titulo) {
        var libroSeleccionado = libros[i];
      //  var consulta = document.getElementById('consulta');
        if (document.getElementById("titulo2").value == libros[i].titulo) {
          alert('Ya lo tienes seleccionado');
        }else {
          $(this).removeClass('prestado');
          $(this).addClass('seleccionado');

          document.getElementById("titulo2").value = libroSeleccionado.titulo;
          document.getElementById("autor2").value = libroSeleccionado.autor;
          document.getElementById("isbn2").value = libroSeleccionado.isbn;
          document.getElementById("generos2").value = libroSeleccionado.generos;

          console.log(libroSeleccionado);
        }
      }

    }
  });

  $( "#nuevo" ).validate({
     rules: {
       titulo: {
         required: true,
         minlength: 5
       },
       autor: {
         required: true,
         minlength:3
       },
       generos: {
         required: true
       },
       isbn: {
         number: true
       }
     },
     messages:{
       titulo: "Introduce al menos 5 caracteres",
       autor: "Introduce al menos 3 caracteres",
       isbn: "Tiene que ser un numero"
     },
     errorPlacement: function(input){
       input.addClass("errorForm");
     }
   });

   $( "#consulta" ).validate({
      rules: {
        mail: {
          email: true
        }
      },
      messages:{
        email: "Introduce un email valido"
      },
      errorPlacement: function(input){
        input.addClass("errorForm");
      }
    });

});
