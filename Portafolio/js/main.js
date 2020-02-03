/**** MENU ****/

(() => {
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    menus();
});
window.addEventListener('click', function(e){
    console.log(e.target);
    if (cerrado == false){
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width >= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});
})();

/**** SCROLL ENLACES ****/

(() => {
$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor=='todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.'+valor).hide('1000');
            $('.cont-work').filter('.'+valor).show('1000');
        }
    });

    let diseño = $('#diseño').offset().top,
    servicio = $('#servicio').offset().top,
    trabajo = $('#trabajo').offset().top,
    contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let diseño = $('#diseño').offset().top,
    servicio = $('#servicio').offset().top,
    trabajo = $('#trabajo').offset().top,
    contacto = $('#contacto').offset().top;
    });

    $('#enltop').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlinicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enldiseño').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: diseño-100
        }, 600);
    });

    $('#enlservicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio-100
        }, 600);
    });

   $('#enltrabajo').on('click', function(e){
       e.preventDefault();
       $('html, body').animate({
           scrollTop: trabajo-100
       }, 600);
    });

    $('#enlcontacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto-100
        }, 600);
    });
});
})();

/**** EN-ES ****/

$('.change-lang').click(function () {
    $('#en').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('#es').animate({height: "toggle", opacity: "toggle"}, "slow");
});

/**** TRADUCCION ****/

var strings = {
    en:{
        portitulo: "Developer Junior",
        enlinicio:"Top",
        enldiseño:"Design",
        enlservicio:"Conocimiento",
        enltrabajo:"Work",
        enlcontacto:"Contact",
        titdiseño:"Design",
        subdiseño:"take a new look",
        diseño1:"Predeterminate design",
        diseño2:"Less bright and more dark",
        diseño3:"Look more cute than the 'classic' design. Its a crazy dud?",
        titservicio:"My knowledge",
        subservicio:"How i work and part of my life",
        tittrabajo:"Proyects",
        subtrabajo:"With some help",
        trabajo1:"All",
        copyright:"Code made for Nieto's Sergio ©All the rights reserved. 2019."
    },
    es:{
        portitulo:"Programador Junior",
        enlinicio:"Inicio",
        enldiseño:"Diseño",
        enlservicio:"Conocimiento",
        enltrabajo:"Trabajo",
        enlcontacto:"Contacto",
        titdiseño:"Diseños del Portafolio",
        subdiseño:"Cambia tu estilo",
        diseño1:"El diseño predeterminado",
        diseño2:"Brinda un aspecto oscuro reduciendo el brillo",
        diseño3:"Un aspecto más ortodoxo. ¿A que es una locura?",
        titservicio:"Mi conocimiento",
        subservicio:"Parte de lo que soy y las herramientas que utilizo",
        tittrabajo:"Proyectos",
        subtrabajo:"En los que recibí algun tipo de ayuda",
        trabajo1:"Todos",
        copyright:"Codigo hecho por Sergio Nieto ©Todos los derechos reservados. 2019."
    }
};
$(document).ready(function(){

$(".change-lang").on("click", function(){
    var lang = $(this).data("lang");

$("#portitulo").text(strings[lang].portitulo),
$("#enlinicio").text(strings[lang].enlinicio),
$("#enldiseño").text(strings[lang].enldiseño);
$("#enlservicio").text(strings[lang].enlservicio);
$("#enltrabajo").text(strings[lang].enltrabajo);
$("#enlcontacto").text(strings[lang].enlcontacto);
$("#titdiseño").text(strings[lang].titdiseño);
$("#subdiseño").text(strings[lang].subdiseño);
$("#diseño1").text(strings[lang].diseño1);
$("#diseño2").text(strings[lang].diseño2);
$("#diseño3").text(strings[lang].diseño3);
$("#titservicio").text(strings[lang].titservicio);
$("#subservicio").text(strings[lang].subservicio);
$("#tittrabajo").text(strings[lang].tittrabajo);
$("#subtrabajo").text(strings[lang].subtrabajo);
$("#trabajo1").text(strings[lang].trabajo1);
$("#copyright").text(strings[lang].copyright);
    });
});

/**** POP-UP ****/

/**** IMAGENES MID ****/

/**** DISEÑO ****/
