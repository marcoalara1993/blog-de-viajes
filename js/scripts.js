$(function() {
    'use strict';

    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();
        return false;
    }




    /*  var proximosViajes = ['Londres', 'Valencia', 'Paris', 'Milan'];

      $.each(proximosViajes, function(i, v) { // i = indice, v = valor
          if (i == 0) {
              $('aside').append('<h2> Proximos viajes </h2>')
          }
          $('aside').append('<li>' + v + '</li>');
      });

      var viajesPorFecha = {
          primero: 'Londres',
          segundo: 'Valencia',
          tercero: 'Buenos Aires',
          cuarto: 'Caracas',
          quinto: 'Santiago de Chile'
      };

      console.log(viajesPorFecha);

      $.each(viajesPorFecha, function(i, v) {
          $('aside').append('<li>' + i + ' - ' + v + '</li>');
      });

      //$('aside').load('promociones.html');*/




    /*$('.logo img').on('click', cargarAjax);

    function cargarAjax() {
        $.ajax('promociones.txt', {
            success: agregarContenido,
            type: 'GET',
            datatype: 'text'
        });
    }

    function agregarContenido(data, status, jqxhr) {
        $('aside').text(data);
        console.log(status);
    }*/

    /*
        $('.logo img').click(function() {
            $('main article:first').slideUp(1000);
        });

        $('aside').click(function() {
            $('main article:first').slideDown(1000);
        });


        /*$('.logo img').on('click', function() {
            $(this).animate({ 'width': '200px' }, 1000);
        });

        $('main article img').on('mouseenter', aumentarImagen);
        $('main article img').on('mouseleave', disminuirImagen);

        function aumentarImagen() {
            $(this).animate({ 'width': '100%' });
        }

        function disminuirImagen() {
            $(this).animate({ 'width': '350px' });
        }


        /*
        $('.navegacion').show();


        $('.logo img').css({ 'width': '300px' });

        $('main article h2').css({ 'color': 'darkgrey' });

        $('aside').css({
            'background-color': '#e1e1e1',
            'text-transform': 'uppercase',
            'padding': '20px'
        });

        $('.main article h2').on('mouseenter, cambiarColor');

        function cambiarColor() {
            $('.navegacion').css('background-color', 'red');
        }

        /*$('main article:last img').on('click', function() {
            $(this).attr('src', 'img/imagen_2.jpg')
        });*/


    /* $('main').on({
         click: function() {
             $(this).addClass('fondorojo activo')
         },
         mouseenter: function() {
             $(this).addClass('fondorojo')
         },
         mouseleave: function() {
             $(this).addClass('activo')
         }
     })*/

    /* $('div.logo img').addClass("activo");
     $('.navegacion').show();
     //$('.navegacion nav ul li:first').addClass("activo");
     $('main article:first').addClass("activo");

     $('.navegacion ul li a').on('click', function(e) {
         $('.navegacion ul li a').removeClass('activo');
         e.preventDefault();
         $(this).addClass('activo');

     });*/


    /*$('#menu').on('click', function() {
        $('#navegacion').show();
    });*/

    /*$('div.logo img').on('mouseenter', function() {
        console.log("sobre el logo");
    });*/

    /*$('div.logo img').on('mouseleave', function() {
        console.log("fuera el logo");
    });*/


    /* $('div.logo img').on('click', function() {
         $(this).remove();
     });*/

    /*$('div.logo img').on('click', function() {
        console.log("Has hecho click en el logo");
    });*/

    // $('main article:first').hide();
    /*
        let copia = $('main article').clone();

        $('main').prepend('copia');
    */

    /*var clon = $("main article:last").clone();
    $(clon).appendTo('main');*/

})