//

        let counterE1 = document.getElementById("counter");

        let imgSecE1= document.getElementById("imgSec");

        let errorMsg = document.getElementById("errorMsg");

        let remainderE1 = document.getElementById("remainder");

        let count = 200;




        function decImgSize(){
              

                count = count - 5;

                counterE1.textContent= count;

                if(count > 200){

                // imgSecE1.style.width = count;

                errorMsg.textContent = "To much small";

                }


         
        }

                


        function incImgSize(){


                count = count + 5;

                counterE1.textContent= count;

                if(count <200 ){

                        // imgSecE1.style.width = count;
                        // imgSecE1.style.height = count;

                 errorMsg.textContent = "To much large";

                 }



                
        }