function capitalize(sel) {
  $(sel).each( function(){
    var e = $(this);
    txt = e.html();
    var ws = txt.split(" ");
    e.html('');
    for( i in ws ) {
      e.append( '<b>' + ws[i][0] + '</b>' + ws[i].substring(1) + " ");
    }
  });

}

$(document).foundation();



      var siglas = Array(
        "TELEVISA", "TELMEX", "FACEBOOK", "CENSURA", "COMPADRE", "SOBORNO", "MONOPOLIO", "SALINAS", "AYOTZINAPA"
      );

      var palabras1 = Array(
        "Agencia", "Secretaría", "Instituto", "Consejo", "Departamento", "Unidad", "Comisión"
      );

      var palabras2 = Array(
"de nepotismo e impunidad", "de Intimidación y vigilancia", "para la manipulación mediática", "de la desaparición forzada", "de legitimación de la mentira", "de espionaje y venta de datos personales", "de saqueo a los bienes públicos", "de control de la opinión pública"
       );

      // var palabras3 = Array(
      //   'Espacio Público Intangible',
      //   'Sistemas Sociales',
      //   'Tecnologías Obsolescentes',
      //   'Aplicación de Medidas',
      //   'Trámites y Permisos'      
      // );


      function cambiarTitulo() {
        var siglasIndex = Math.floor(Math.random()*siglas.length); 
        var sigla = siglas[ siglasIndex ];
        var palabra1Index = Math.floor(Math.random()*palabras1.length);
        var palabra1 = palabras1[ palabra1Index ];
        var palabra2;
        palabra2 = palabras2[Math.floor(Math.random()*palabras2.length)];

        
        $('#siglas h1').html( sigla );

        // $('#cabecera #titulo h5').html( palabra1 + " de " + palabra2 +   " del " + palabra3 );
        if( siglasIndex == siglas.length - 1 ) {
          $('#cabecera #titulo h5').html( "Fue el Estado" );
        } else {
          $('#cabecera #titulo h5').html( palabra1 + " " + palabra2 );
        }
        // var palabra3 = palabras3[Math.floor(Math.random()*palabras3.length)];

        capitalize('#cabecera #titulo h5');

      }

      $(document).ready(function(){
        

        cambiarTitulo();

        setInterval( function() { cambiarTitulo(); }, 5000);



        $('#bullets').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
                
            }
          }
          ]
        });


        //capitalize('h1,h2,h3,h4,h5,h6');
      });


