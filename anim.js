


//Passagem de imagens #######################################################################################################

var i = 1
var timer
var timer_2
var timer_3
var picture=1



interval()

function interval(){
 
i=1;


switch(picture) {
   case 1:
       //faz com o elemente seja "inclicavel" pra nao aumentar a velocidade da animaçao caso clique mais de um vez
       document.getElementById("px_1").style.pointerEvents="none"
       document.getElementById("px_2").style.pointerEvents="none"
       document.getElementById("px_3").style.pointerEvents="none"
               //opacidade
              document.getElementById("px_1").style.opacity="0.2"
              document.getElementById("px_2").style.opacity="0.2"
              document.getElementById("px_3").style.opacity="0.2"
           
       timer=  setInterval(animation ,45);

       break;
   case 2:
     
       document.getElementById("px_1").style.pointerEvents="none"
       document.getElementById("px_2").style.pointerEvents="none"
       document.getElementById("px_3").style.pointerEvents="none"
               //opacidade
              document.getElementById("px_1").style.opacity="0.2"
              document.getElementById("px_2").style.opacity="0.2"
              document.getElementById("px_3").style.opacity="0.2"

       timer_2=  setInterval(animation_2 ,45);


       break;
   case 3:
       
      document.getElementById("px_1").style.pointerEvents="none"
      document.getElementById("px_2").style.pointerEvents="none"
      document.getElementById("px_3").style.pointerEvents="none"
             //opacidade
             document.getElementById("px_1").style.opacity="0.2"
             document.getElementById("px_2").style.opacity="0.2"
             document.getElementById("px_3").style.opacity="0.2"

       timer_3=  setInterval(animation_3 ,45);


       break;
   default:
       console.log("nothing");
}

}


function animation(){


 //suporte de imagem pra mobile 
   if(larguraTela <= 1220){
  
      document.getElementById("main").src="carrosel/mobile_unreal/unreal ("+i+").jpg"; 
    
     
     //################################################################################## repetiçao    
      if(i >= 22){ 
      
         //reseta o interval zerando a velocidade 
         clearInterval(timer)
        
      //volta a ser clicavel
      document.getElementById("px_3").style.pointerEvents="auto"
      document.getElementById("px_2").style.pointerEvents="auto"
      document.getElementById("px_1").style.pointerEvents="auto"
                //opacidade
                document.getElementById("px_1").style.opacity="1"
                document.getElementById("px_2").style.opacity="1"
                document.getElementById("px_3").style.opacity="1"
    
    
    
             }else{ 
        
              i++ 
       
       }
   
    //################################################################################## repetiçao    
   
   }else{

      document.getElementById("main").src="carrosel/unreal/unreal ("+i+").jpg"; 

      
    
     //################################################################################## repetiçao    
     if(i >= 25){ 
      
      //reseta o interval zerando a velocidade 
      clearInterval(timer)
     
   //volta a ser clicavel
   document.getElementById("px_3").style.pointerEvents="auto"
   document.getElementById("px_2").style.pointerEvents="auto"
   document.getElementById("px_1").style.pointerEvents="auto"
             //opacidade
             document.getElementById("px_1").style.opacity="1"
             document.getElementById("px_2").style.opacity="1"
             document.getElementById("px_3").style.opacity="1"
 
 
 
          }else{ 
     
           i++ 
    
    }

    //################################################################################## repetiçao    

    }
    



}

function animation_2(){


 //suporte de imagem pra mobile 
 if(larguraTela <= 1220){
   
   document.getElementById("main").src="carrosel/mobile_gta/gta ("+i+").jpg"; 

        //################################################################################## repetiçao    
        if(i >= 22){ 
      
         //reseta o interval zerando a velocidade 
         clearInterval(timer_2)
        
      //volta a ser clicavel
      document.getElementById("px_3").style.pointerEvents="auto"
      document.getElementById("px_2").style.pointerEvents="auto"
      document.getElementById("px_1").style.pointerEvents="auto"
                //opacidade
                document.getElementById("px_1").style.opacity="1"
                document.getElementById("px_2").style.opacity="1"
                document.getElementById("px_3").style.opacity="1"
    
    
    
             }else{ 
        
              i++ 
       
       }
   
    //################################################################################## repetiçao    
    
 }else{

   document.getElementById("main").src="carrosel/gta/gta ("+i+").jpg"; 



     //################################################################################## repetiçao    
     if(i >= 25){ 
      
      //reseta o interval zerando a velocidade 
      clearInterval(timer_2)
     
   //volta a ser clicavel
   document.getElementById("px_3").style.pointerEvents="auto"
   document.getElementById("px_2").style.pointerEvents="auto"
   document.getElementById("px_1").style.pointerEvents="auto"
             //opacidade
             document.getElementById("px_1").style.opacity="1"
             document.getElementById("px_2").style.opacity="1"
             document.getElementById("px_3").style.opacity="1"
 
 
 
          }else{ 
     
           i++ 
    
    }

 //################################################################################## repetiçao    



 }



    

}

function animation_3(){



   
 //suporte de imagem pra mobile 
 if(larguraTela <= 1220){
  
   document.getElementById("main").src="carrosel/mobile_ia/ia ("+i+").jpg"; 

        //################################################################################## repetiçao    
        if(i >= 23){ 
      
         //reseta o interval zerando a velocidade 
         clearInterval(timer_3)
        
      //volta a ser clicavel
      document.getElementById("px_3").style.pointerEvents="auto"
      document.getElementById("px_2").style.pointerEvents="auto"
      document.getElementById("px_1").style.pointerEvents="auto"
                //opacidade
                document.getElementById("px_1").style.opacity="1"
                document.getElementById("px_2").style.opacity="1"
                document.getElementById("px_3").style.opacity="1"
    
    
    
             }else{ 
        
              i++ 
       
       }
   
    //################################################################################## repetiçao    
    
 }else{
   
   document.getElementById("main").src="carrosel/ia/ia ("+i+").jpg"; 

        //################################################################################## repetiçao    
        if(i >= 25){ 
      
         //reseta o interval zerando a velocidade 
         clearInterval(timer_3)
        
      //volta a ser clicavel
      document.getElementById("px_3").style.pointerEvents="auto"
      document.getElementById("px_2").style.pointerEvents="auto"
      document.getElementById("px_1").style.pointerEvents="auto"
                //opacidade
                document.getElementById("px_1").style.opacity="1"
                document.getElementById("px_2").style.opacity="1"
                document.getElementById("px_3").style.opacity="1"
    
    
    
             }else{ 
        
              i++ 
       
       }
   
    //################################################################################## repetiçao    
   
 }

    


    

}

function first(){

   document.getElementById("px_1").checked=true;
   document.getElementById("px_2").checked=false;
   document.getElementById("px_3").checked=false;
   picture=1
   interval()

}
function two(){

   document.getElementById("px_1").checked=false;
   document.getElementById("px_2").checked=true;
   document.getElementById("px_3").checked=false;
   picture=2
   interval()

}
function three(){
   
   document.getElementById("px_1").checked=false;
   document.getElementById("px_2").checked=false;
   document.getElementById("px_3").checked=true;
   picture=3
   interval()



}

//#############################################################################################################################




/* movimentaçao grafico section 3*/
       

     //funçao do scroll , quando aparece o objeto na tela
     const section= document.querySelector('#_3');

     const myObserver= new IntersectionObserver((entries) => {
      
  
      entries.forEach((entry) => {
         //se ele entrar na tela 
        if (entry.isIntersecting) {
            
            um(); 
           
            
        }else {}


   })
})
   // observando o elemento section 
    myObserver.observe(section);

    //tela tamanho 
    var larguraTela = window.innerWidth;
   

    function um(){

     if(larguraTela <= 4000 && larguraTela > 2500 ){   

     document.getElementById("um").style.width= "700px";
     document.getElementById("um").style.transition = "width 3s"; 

     dois()

     }


     if(larguraTela <= 2500 && larguraTela >= 1366 ){

     document.getElementById("um").style.width= "500px";
     document.getElementById("um").style.transition = "width 3s"; 
       
     dois()
       

     }
    
     if(larguraTela <= 1366){

     document.getElementById("um").style.width= "300px";
     document.getElementById("um").style.transition = "width 3s"; 
     
     dois()


     }


    }

    function dois(){

        if(larguraTela <= 4000 && larguraTela > 2500 ){   

            document.getElementById("dois").style.width= "600px";
            document.getElementById("dois").style.transition = "width 5s"; 
              
            tres()
               
       
            }
       
       
            if(larguraTela <= 2500 && larguraTela >= 1366 ){
       
            document.getElementById("dois").style.width= "400px";
            document.getElementById("dois").style.transition = "width 5s"; 
              
            tres()
               
       
            }
           
            if(larguraTela <= 1366){
       
            document.getElementById("dois").style.width= "280px";
            document.getElementById("dois").style.transition = "width 5s"; 
             
            tres()
       
            }
    
     }
    
    function tres(){


        if(larguraTela <= 4000 && larguraTela > 2500 ){   

            document.getElementById("tres").style.width= "420px";
            document.getElementById("tres").style.transition = "width 6s"; 
                
            quatro()
       
            }
       
       
            if(larguraTela <= 2500 && larguraTela >= 1366 ){
       
            document.getElementById("tres").style.width= "350px";
            document.getElementById("tres").style.transition = "width 6s"; 
                
            quatro()

            }
           
            if(larguraTela <= 1366){
       
            document.getElementById("tres").style.width= "230px";
            document.getElementById("tres").style.transition = "width 6s"; 
             
            quatro()

            }



      }
            
    function quatro(){
               
 
        if(larguraTela <= 4000 && larguraTela > 2500 ){   

            document.getElementById("quatro").style.width= "350px";
            document.getElementById("quatro").style.transition = "width 7s"; 
               
            cinco()
            }
       
       
            if(larguraTela <= 2500 && larguraTela >= 1366 ){
       
            document.getElementById("quatro").style.width= "230px";
            document.getElementById("quatro").style.transition = "width 7s"; 
                
            cinco()
       
            }
           
            if(larguraTela <= 1366){
       
            document.getElementById("quatro").style.width= "130px";
            document.getElementById("quatro").style.transition = "width 7s"; 
           
            cinco()
            
       
            }
            
    }
                
    function cinco(){


        if(larguraTela <= 4000 && larguraTela > 2500 ){   

            document.getElementById("cinco").style.width= "280px";
            document.getElementById("cinco").style.transition = "width 8s"; 
                
       
            }
       
       
            if(larguraTela <= 2500 && larguraTela >= 1366 ){
       
            document.getElementById("cinco").style.width= "180px";
            document.getElementById("cinco").style.transition = "width 8s"; 
                

       
            }
           
            if(larguraTela <= 1366){
       
            document.getElementById("cinco").style.width= "100px";
            document.getElementById("cinco").style.transition = "width 8s"; 
             
        
       
            }
                

    }


    /* ##################################################################################################################  */





/* SECTION _2 ############################################################################################################# */


    //funçao do scroll , quando aparece o objeto na tela
    const section2= document.querySelector('#_2');

    const myObserver2= new IntersectionObserver((entries) => {

     entries.forEach((entry) => {
        //se ele entrar na tela 
        if (entry.isIntersecting) {
        
   

         document.getElementById("soft").style.opacity= "1";
         document.getElementById("soft").style.transition = "5s"; 

         document.getElementById("arg").style.opacity= "1";
         document.getElementById("arg").style.transition = "5s"; 

         document.getElementById("_15").style.opacity= "1";
         document.getElementById("_15").style.transition = "5s"; 

         // laptop balançando
         document.getElementById("laptop").style.transform = "rotate(0deg)";
         document.getElementById("laptop").style.transition = "3s"; 




             if(larguraTela <= 4000 && larguraTela > 2500 ){   

           

              // lap

              document.getElementById("lap").style.left= "30px";
              document.getElementById("lap").style.transition = "5s"; 

         
               // top
       
              document.getElementById("top").style.left= "3300px";
              document.getElementById("top").style.transition = "5s"; 

       
       
             }else if(larguraTela < 2500 && larguraTela > 720 ){

               

             // lap

             document.getElementById("lap").style.left= "30px";
             document.getElementById("lap").style.transition = "5s"; 

        
              // top

              var position= larguraTela-250;
      
             document.getElementById("top").style.left= position+"px";
             document.getElementById("top").style.transition = "5s"; 
             
             }
      
          
         //responsividade


        } else {
        


        }

      })
})
  // observando o elemento section 
   myObserver2.observe(section2);




/* ##################################################################################################################  */
 




