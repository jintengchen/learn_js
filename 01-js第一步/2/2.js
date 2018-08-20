      // JavaScript goes here
      document.addEventListener("DOMContentLoaded", function(){
        function createParagraph() {
            var para = document.createElement('h1');
            para.textContent = 'You clicked the buttion!';
             document.body.appendChild(para);
          }
        
        var buttons = document.querySelectorAll('button');
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click',createParagraph);
        }


      });
