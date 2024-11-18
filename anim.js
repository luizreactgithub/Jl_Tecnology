
var larguraTela = window.innerWidth;

// LOAD - Cancelado
/*

   //pra carregar mais tempo no 4k
   if(larguraTela >= 3540){
  
     
    
    
 setTimeout(function() {

  document.body.style.overflowY = "visible";
  document.getElementById("loading").style.display= "none";



  }, 0)




     
    document.getElementById("loading").style.position= "relative";
    document.getElementById("loading").style.display= "block";

 

    
    document.body.style.overflowY = "hidden";
   
    
   
   }else{
   }
*/




   setTimeout(function() {



    document.getElementById("full").style.position="relative";
    document.getElementById("full").style.animationName="footer";
    document.getElementById("full").style.display="flex";
    document.getElementById("full").style.animationDuration="1s";

    document.getElementById("full").style.animationIterationCount="infinite";
    document.getElementById("full").style.animationDelay="0s";




    
    document.getElementById("footer").style.position="relative";
    document.getElementById("footer").style.animationName="footer";
    document.getElementById("footer").style.display="flex";
    document.getElementById("footer").style.animationDuration="1s";

    document.getElementById("footer").style.animationIterationCount="infinite";
    document.getElementById("footer").style.animationDelay="0s";
  
    }, 100)
  



//Passagem de imagens #######################################################################################################

var i = 1
var timer
var timer_2
var timer_3
var picture;

document.getElementById("main_2").src="carrosel/mobile_unreal/unreal.jpg"; 
document.getElementById("main").src="carrosel/unreal/unreal.jpg"; 




// Jeito que eu encontrei de pré carregar a animação pra nao ficar com aquela animação curta e feia no inicio



//carrega as imagens do tamanho certo em 4k  
if(larguraTela >= 3540){

  document.getElementById("main").style.width="auto";
  document.getElementById("main").style.height="1750px";

}




setTimeout(function() {

  three();


  document.getElementById("anim").style.position="relative";

  var home=$(this).attr("full");
  var posicao=$(home).offset().top;
  
  
  $("html, body").animate({

  scrollTop:posicao+280
  },2000);

  
  
}, 500)
  

setTimeout(function() {

  two();
  document.getElementById("anim").style.position="relative";

}, 1000)
  

setTimeout(function() {

  first();
  document.getElementById("anim").style.position="relative";



}, 2000)
  

// ***********************************************************************************************************/
  

interval()

function interval(){
 
i=1;


switch(picture) {
   case 1:

   animation();

       break;
   case 2:
     
   animation_2();


       break;
   case 3:

   animation_3();


       break;
   default:
       console.log("nothing");
}

}


function animation(){


 //suporte de imagem pra mobile 
   if(larguraTela <= 1220){
  
      document.getElementById("main_2").src="carrosel/mobile_unreal/unreal.jpg"; 
    
   
   }else{


       document.getElementById("anim").style.position="absolute";
       document.getElementById("anim").style.animationName="carrosel";
       document.getElementById("anim").style.display="flex";
       document.getElementById("anim").style.animationDuration="1s";

       document.getElementById("anim").style.animationIterationCount="infinite";
       document.getElementById("anim").style.animationDelay="0s";
     
       setTimeout(function() {
 

        document.getElementById("anim").style.display="none";
  

      }, 970)

      document.getElementById("main").src="carrosel/unreal/unreal.jpg"; 



   
    }
    



}

function animation_2(){



   
 //suporte de imagem pra mobile 
 if(larguraTela <= 1220){
  
  document.getElementById("main_2").src="carrosel/mobile_ia/ia.jpg"; 

       
   
}else{



 
 document.getElementById("anim").style.position="absolute";
 document.getElementById("anim").style.animationName="carrosel3";
 document.getElementById("anim").style.display="flex";
 document.getElementById("anim").style.animationDuration="1s";

 document.getElementById("anim").style.animationIterationCount="infinite";
 document.getElementById("anim").style.animationDelay="0s";

 setTimeout(function() {


  document.getElementById("anim").style.display="none";


}, 970)

  
  document.getElementById("main").src="carrosel/ia/ia.jpg"; 


  
}

   
    

}

function animation_3(){


 //suporte de imagem pra mobile 
 if(larguraTela <= 1220){
   
  document.getElementById("main_2").src="carrosel/mobile_gta/gta.jpg"; 

        
   
}else{


 document.getElementById("anim").style.position="absolute";
 document.getElementById("anim").style.animationName="carrosel2";
 document.getElementById("anim").style.display="flex";
 document.getElementById("anim").style.animationDuration="1s";

 document.getElementById("anim").style.animationIterationCount="infinite";
 document.getElementById("anim").style.animationDelay="0s";

 setTimeout(function() {


  document.getElementById("anim").style.display="none";


}, 970)




  document.getElementById("main").src="carrosel/gta/gta.jpg"; 




}





    

}

function first(){



   document.getElementById("px_1").checked=true;
   document.getElementById("px_2").checked=false;
   document.getElementById("px_3").checked=false;

   document.getElementById("px_10").checked=true;
   document.getElementById("px_20").checked=false;
   document.getElementById("px_30").checked=false;
   picture=1
   interval()


}
function two(){

   document.getElementById("px_1").checked=false;
   document.getElementById("px_2").checked=true;
   document.getElementById("px_3").checked=false;

   document.getElementById("px_10").checked=false;
   document.getElementById("px_20").checked=true;
   document.getElementById("px_30").checked=false;
   picture=2
   interval()

  

}
function three(){
   
   document.getElementById("px_1").checked=false;
   document.getElementById("px_2").checked=false;
   document.getElementById("px_3").checked=true;

      
   document.getElementById("px_10").checked=false;
   document.getElementById("px_20").checked=false;
   document.getElementById("px_30").checked=true;
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
 




