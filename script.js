
function setProgressBars(){
    array=["pb_HTML","pb_JS","pb_MICRO","pb_SQL","pb_PYTHON"];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);

    
   
        var width = 20;
        var id = setInterval(frame, 62);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            var elem = document.getElementById(element);  
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
          }
        }
    }


   
  }
