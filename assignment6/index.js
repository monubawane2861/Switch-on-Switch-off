

let stopBtnE1 = document.getElementById("stopBtn");

let readyBtnE1 = document.getElementById("readyBtn");

let goBtnE1 = document.getElementById("goBtn");

let stopFirstE1  = document.getElementById("stopFirst");

let readySecE1 = document.getElementById("readySec");

let goThirdE1 = document.getElementById("goThird");

let isCheck =true;

function checkStopColor(){

  if(isCheck === true){

          stopFirstE1.style.backgroundColor ="red";

          stopBtnE1.style.backgroundColor ="red";
          
          isCheck = false;    

  }

  else{

            stopFirstE1.style.backgroundColor ="rgb(47, 45, 49)";

            stopBtnE1.style.backgroundColor ="rgb(47, 45, 49)";

            isCheck = true;

  }

}


let isCheckSec = true;

function checkReadyColor(){

  if(isCheckSec === true){

    readySecE1.style.backgroundColor ="yellow";

      
    readyBtnE1.style.backgroundColor ="yellow";


          isCheckSec= false;
  }
  
  
  else{

    readySecE1.style.backgroundColor =" rgb(47, 45, 49)";

    readyBtnE1.style.backgroundColor =" rgb(47, 45, 49)";


          isCheckSec = true;
  }

}


let isCheckThird = 0;

function checkGoColor(){

  if(isCheckThird === true){


            goThirdE1.style.backgroundColor ="green";
            
            goBtnE1.style.backgroundColor ="green";

            isCheckThird= false;


  }
  
   
  else{


            goThirdE1.style.backgroundColor ="rgb(47, 45, 49)";
        
            goBtnE1.style.backgroundColor ="rgb(47, 45, 49)";
            
            isCheckThird = true;
  }
}