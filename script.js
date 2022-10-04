// set les progress bar de facon animée
function setProgressBars(){
    array=["pb_HTML","pb_JS","pb_MICRO","pb_SQL","pb_PYTHON"]; // charge les ID des progressBar dans un tableau
    for (let index = 0; index < array.length; index++) {
        const element = array[index]; 

        var width = 20;
        var id = setInterval(frame, 62);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            var elem = document.getElementById(element);  
            width++; 
            elem.style.width = width + '%';  // change pourcentages
            elem.innerHTML = width * 1  + '%';
          }
        }
    }
  }

  // 'rounded' is the class I'm applying to the toast
  M.toast({html: 'Bienvenue sur mon cv en ligne !', classes: 'rounded'});




/***************************execute quand page est chargée*************** */
    $( document ).ready(function() {
      // Handler for .ready() called.

      //initialisation 
      $(".tap-target").tapTarget();
      $("#menu").hide();

             
      $( window ).resize(function() {
        var maTaille = $( window ).width(); // recupere la width de la fenetre
        maTaille = parseInt(maTaille);
        console.log(maTaille);
        if (maTaille>1247){
          $("#menu").show();
          $(".tap-target").tapTarget('open');
    
          $("#btnRedirect").addClass( "pulse" );
        } else{
          $("#menu").hide();
          $(".tap-target").tapTarget('close');
          $("#btnRedirect").removeClass( "pulse" );
        }
      });

     
     $(window).scroll(function (event) { // trigg quand on scroll
      var mywidth = $( window ).width(); // recupere la width de la fenetre
      var scroll = $(window).scrollTop(); //recupere la ligne ou se scroll
     
      
      parseInt(scroll);
      parseInt(mywidth);
      

        if ((scroll>500)&&(mywidth>949)){
          $("#menu").show();
          $(".tap-target").tapTarget('open');
    
          $("#btnRedirect").addClass( "pulse" );
        } else{
          $("#menu").hide();
          $(".tap-target").tapTarget('close');
          $("#btnRedirect").removeClass( "pulse" );
        }
       
    });
  });