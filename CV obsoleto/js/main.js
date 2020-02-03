/*** ANIMACION MENU COLOR DEGRADADO ***/

let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let nombre = document.getElementById("nombre");
let title = document.getElementById("title");

boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ("enlaces dos");
        contador = 1;
        nombre.hidden = true;
        title.hidden = true;
    }else{
        enlaces.classList.remove ("dos");
        enlaces.className = ("enlaces uno");
        contador = 0;
        nombre.hidden = false;
        title.hidden = false;
    }
})

/*** ***/