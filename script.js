

var btnNext = document.querySelector('a.next img');
var btnPrev = document.querySelector('a.prev img');
var images = document.querySelectorAll('#gallery img');

 var i = 0;

btnNext.onclick = function (){

    images[i].className = " ";
   i++;

	if(i >= images.length){

		i = 0;
	}

	images[i].className = "show";

}
btnPrev.onclick = function (){

    images[i].className = " ";
    i--;
	if(i < 0){
		i = images.length-1;
	}

	images[i].className = "show";

}
function slideOp()
{
  images[i].className = " ";
 i++;

if(i >= images.length){

  i = 0;
}

images[i].className = "show";
}
if(!onclick){
	setTimeout(slideOp, 1000);
}
