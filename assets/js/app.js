$(document).ready(function(){

	var imgItems=$(".slider li").length; // cuenta cuantos elementos hay de estos//
		for(i=1; i <=imgItems; i++){
			$("pagination").append("<li><span class="fa fa-circle" aria-hidden="true"></span></li>")
		}
//ocultar todos los sliter//
	$(".slider li").hide();
	//mostrar solo el primer slide//
	$(".slider li:first").show();
//se llama al primer li de pagination y se le asigna otro color//
	$(".pagination li:first").css({"color": "yellow" });

//al dar click a la pagination tiene que cambiar la imagen//
$(".pagination li").click(pagination);
//al dar click a la flecha derecha cambiar imagen siguiente//
$(".right span").click(nextSlider);
//al dar click a la flecha izquierda cambiar imagen anterior//
$(".left span").click(prevSlider);

//FUNCIONES

function pagination(){
	var paginationPos= $(this).index() +1;

	$(".slider li").hide();
	$(".slider li:nth-child("+ paginationPos +")").fadeIn();
}



});