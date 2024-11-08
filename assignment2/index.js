

      let firstdogE1 =document.getElementById("firstdog");

      let likecolorE1 =document.getElementById("likecolor");

      let thumbiconE1 =document.getElementById("thumbicon");

      let iconE1 =document.getElementById("icon");

      let isCheck = true;


      function ChangeDog(){



        if(isCheck === true){


        firstdogE1.src ="image/dog3.avif";


        likecolorE1.style.backgroundColor = "rgb(76, 174, 219)";

        iconE1.style.color ="rgb(76, 174, 219)";


        
        isCheck = false;

        }

        else{


          firstdogE1.src ="image/dog2.avif";

          likecolorE1.style.backgroundColor = "rgb(135, 139, 141)";
        
          iconE1.style.color ="rgb(135, 139, 141)";

          
          isCheck = true;
        


        }

      }
