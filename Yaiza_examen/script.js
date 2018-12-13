// $("document").ready(function(){
//
// }):
//
// function newLibro(){
// 	var titulo = document.getElementById("titulo").value;
// 	var autor = document.getElementById("autor1").value;
// 	var isbn = document.getElementById("isbn1").value;
// 	var genero = document.getElementByName("genero").value;
// 	var arrLibro = new Array();
// 	arrLibro.push(titulo, autor, isbn, genero);
//
// 	alert(arrLibro);
// }

window.onload = function(){

  // Constructor Libro
  function Libro(titulo, autor, isbn, generos) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.generos = generos;
  }

  var add = document.getElementById("add");
  add.addEventListener("click", function() {
		var form = document.getElementById('addform');
    var titulo = form.elements[0];
		var autor = form.elements[1];
    var isbn = form.elements[2];
    var generos = form.elements[3];
		alert(new Libro(titulo,autor,isbn,generos));
    //var insertar = new Libro('ppp','eee',4444,'historia');

  });
}
