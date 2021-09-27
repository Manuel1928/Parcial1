let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos')
        contador++;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlace uno');
        contador = 0; 
    }
})