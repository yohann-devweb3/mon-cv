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
