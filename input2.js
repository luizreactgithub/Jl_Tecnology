document.getElementById("r1").style.backgroundImage = 'url(img/home.jpg)';
document.getElementById("r1").style.backgroundSize = "cover";
document.getElementById("r1").style.width="40px";
document.getElementById("r1").style.height="40px";
/*mobile*/

document.getElementById("r10").style.backgroundImage = 'url(img/home.jpg)';
document.getElementById("r10").style.backgroundSize = "cover";
document.getElementById("r10").style.width="110px";
document.getElementById("r10").style.height="110px";
document.getElementById("r10").style.left="275px";
document.getElementById("r10").style.borderRadius="110px";

/*para os inputs nao acionados fiquem ceros na posi��o*/
document.getElementById("r20").style.left="295px";
document.getElementById("r30").style.left="295px";
document.getElementById("r40").style.left="295px";
document.getElementById("r50").style.left="295px";

$(window).scroll(function(){      
var position=$(window).scrollTop();



if(position >=2900){



}else{
  

$("div.radios").css({top:position, position:'relative'});


}


if(position >= 7600){



}else{
  

$("div.radios2").css({top:position, position:'relative'});

}



document.getElementById("ano").innerHTML = new Date().getFullYear();





var home2=$(this).attr("topo2");
var posicao1=$(home2).offset().top;
var ball=$(this).attr("ball");
var posicao2=$(ball).offset().top;
var prog=$(this).attr("prog");
var posicao3=$(prog).offset().top;
var ps=$(this).attr("ps");
var posicao4=$(ps).offset().top;
var final=$(this).attr("final");
var posicao5=$(final).offset().top;







if(position >=posicao1 && position < posicao2){

check1=false;

document.getElementById("r1").style.backgroundImage = 'url(img/home.jpg)';
document.getElementById("r1").style.backgroundSize = "cover";
document.getElementById("r1").style.width="40px";
document.getElementById("r1").style.height="40px";


document.getElementById("r2").style.background="transparent";
document.getElementById("r2").style.width="30px";
document.getElementById("r2").style.height="30px";

document.getElementById("r3").style.background="transparent";
document.getElementById("r3").style.width="30px";
document.getElementById("r3").style.height="30px";

document.getElementById("r4").style.background="transparent";
document.getElementById("r4").style.width="30px";
document.getElementById("r4").style.height="30px";

document.getElementById("r5").style.background="transparent";
document.getElementById("r5").style.width="30px";
document.getElementById("r5").style.height="30px";



/*mobile*/

document.getElementById("r10").style.backgroundImage = 'url(img/home.jpg)';
document.getElementById("r10").style.backgroundSize = "cover";
document.getElementById("r10").style.width="110px";
document.getElementById("r10").style.height="110px";
document.getElementById("r10").style.left="377px";


document.getElementById("r20").style.background="transparent";
document.getElementById("r20").style.width="70px";
document.getElementById("r20").style.height="70px";
document.getElementById("r20").style.left="399px";

document.getElementById("r30").style.background="transparent";
document.getElementById("r30").style.width="70px";
document.getElementById("r30").style.height="70px";
document.getElementById("r30").style.left="399px";

document.getElementById("r40").style.background="transparent";
document.getElementById("r40").style.width="70px";
document.getElementById("r40").style.height="70px";
document.getElementById("r40").style.left="399px";

document.getElementById("r50").style.background="transparent";
document.getElementById("r50").style.width="70px";
document.getElementById("r50").style.height="70px";
document.getElementById("r50").style.left="399px";


check2=true;
check3=true;
check4=true;
check5=true;


}


if(position >=posicao2+100 && position < posicao3-400 ){

check2=false;

document.getElementById("r2").style.backgroundImage = 'url(img/mapas.jpg)';
document.getElementById("r2").style.backgroundSize = "cover";
document.getElementById("r2").style.width="40px";
document.getElementById("r2").style.height="40px";




document.getElementById("r1").style.background="transparent";
document.getElementById("r1").style.width="30px";
document.getElementById("r1").style.height="30px";

document.getElementById("r3").style.background="transparent";
document.getElementById("r3").style.width="30px";
document.getElementById("r3").style.height="30px";

document.getElementById("r4").style.background="transparent";
document.getElementById("r4").style.width="30px";
document.getElementById("r4").style.height="30px";

document.getElementById("r5").style.background="transparent";
document.getElementById("r5").style.width="30px";
document.getElementById("r5").style.height="30px";



/*mobile*/


document.getElementById("r20").style.backgroundImage = 'url(img/mapas.jpg)';
document.getElementById("r20").style.backgroundSize = "cover";
document.getElementById("r20").style.width="110px";
document.getElementById("r20").style.height="110px";
document.getElementById("r20").style.borderRadius="110px";
document.getElementById("r20").style.left="377px";




document.getElementById("r10").style.background="transparent";
document.getElementById("r10").style.width="70px";
document.getElementById("r10").style.height="70px";
document.getElementById("r10").style.left="399px";


document.getElementById("r30").style.background="transparent";
document.getElementById("r30").style.width="70px";
document.getElementById("r30").style.height="70px";
document.getElementById("r30").style.left="399px";

document.getElementById("r40").style.background="transparent";
document.getElementById("r40").style.width="70px";
document.getElementById("r40").style.height="70px";
document.getElementById("r40").style.left="399px";

document.getElementById("r50").style.background="transparent";
document.getElementById("r50").style.width="70px";
document.getElementById("r50").style.height="70px";
document.getElementById("r50").style.left="399px";


check1=true;
check3=true;
check4=true;
check5=true;



}

if(position >=posicao3-100 && position < posicao4-450 ){

check3=false;

document.getElementById("r3").style.backgroundImage = 'url(img/pate.jpg)';
document.getElementById("r3").style.backgroundSize = "cover";
document.getElementById("r3").style.width="40px";
document.getElementById("r3").style.height="40px";



document.getElementById("r1").style.background="transparent";
document.getElementById("r1").style.width="30px";
document.getElementById("r1").style.height="30px";

document.getElementById("r2").style.background="transparent";
document.getElementById("r2").style.width="30px";
document.getElementById("r2").style.height="30px";

document.getElementById("r4").style.background="transparent";
document.getElementById("r4").style.width="30px";
document.getElementById("r4").style.height="30px";


document.getElementById("r5").style.background="transparent";
document.getElementById("r5").style.width="30px";
document.getElementById("r5").style.height="30px";


/*mobile*/
document.getElementById("r30").style.backgroundImage = 'url(img/pate.jpg)';
document.getElementById("r30").style.backgroundSize = "cover";
document.getElementById("r30").style.width="110px";
document.getElementById("r30").style.height="110px";
document.getElementById("r30").style.borderRadius="110px";
document.getElementById("r30").style.left="377px";



document.getElementById("r10").style.background="transparent";
document.getElementById("r10").style.width="70px";
document.getElementById("r10").style.height="70px";
document.getElementById("r10").style.left="399px";

document.getElementById("r20").style.background="transparent";
document.getElementById("r20").style.width="70px";
document.getElementById("r20").style.height="70px";
document.getElementById("r20").style.left="399px";

document.getElementById("r40").style.background="transparent";
document.getElementById("r40").style.width="70px";
document.getElementById("r40").style.height="70px";
document.getElementById("r40").style.left="399px";

document.getElementById("r50").style.background="transparent";
document.getElementById("r50").style.width="70px";
document.getElementById("r50").style.height="70px";
document.getElementById("r50").style.left="399px";


check2=true;
check1=true;
check4=true;
check5=true;



}

if(position >=posicao4-100 && position < posicao5-450 ){

check4=false;

document.getElementById("r4").style.backgroundImage = 'url(img/skins.jpg)';
document.getElementById("r4").style.backgroundSize = "cover";
document.getElementById("r4").style.width="40px";
document.getElementById("r4").style.height="40px";



document.getElementById("r1").style.background="transparent";
document.getElementById("r1").style.width="30px";
document.getElementById("r1").style.height="30px";

document.getElementById("r2").style.background="transparent";
document.getElementById("r2").style.width="30px";
document.getElementById("r2").style.height="30px";

document.getElementById("r3").style.background="transparent";
document.getElementById("r3").style.width="30px";
document.getElementById("r3").style.height="30px";


document.getElementById("r5").style.background="transparent";
document.getElementById("r5").style.width="30px";
document.getElementById("r5").style.height="30px";

/*mobile*/
document.getElementById("r40").style.backgroundImage = 'url(img/skins.jpg)';
document.getElementById("r40").style.backgroundSize = "cover";
document.getElementById("r40").style.width="110px";
document.getElementById("r40").style.height="110px";
document.getElementById("r40").style.borderRadius="110px";
document.getElementById("r40").style.left="377px";



document.getElementById("r10").style.background="transparent";
document.getElementById("r10").style.width="70px";
document.getElementById("r10").style.height="70px";
document.getElementById("r10").style.left="399px";

document.getElementById("r20").style.background="transparent";
document.getElementById("r20").style.width="70px";
document.getElementById("r20").style.height="70px";
document.getElementById("r20").style.left="399px";

document.getElementById("r30").style.background="transparent";
document.getElementById("r30").style.width="70px";
document.getElementById("r30").style.height="70px";
document.getElementById("r30").style.left="399px";


document.getElementById("r50").style.background="transparent";
document.getElementById("r50").style.width="70px";
document.getElementById("r50").style.height="70px";
document.getElementById("r50").style.left="399px";

check2=true;
check1=true;
check3=true;
check5=true;

}

if(position >=posicao5-100 ){

check5=false;

document.getElementById("r5").style.backgroundImage = 'url(img/balltown.jpg)';
document.getElementById("r5").style.backgroundSize = "cover";
document.getElementById("r5").style.width="40px";
document.getElementById("r5").style.height="40px";



document.getElementById("r1").style.background="transparent";
document.getElementById("r1").style.width="30px";
document.getElementById("r1").style.height="30px";

document.getElementById("r2").style.background="transparent";
document.getElementById("r2").style.width="30px";
document.getElementById("r2").style.height="30px";

document.getElementById("r3").style.background="transparent";
document.getElementById("r3").style.width="30px";
document.getElementById("r3").style.height="30px";


document.getElementById("r4").style.background="transparent";
document.getElementById("r4").style.width="30px";
document.getElementById("r4").style.height="30px";

/*mobile*/
document.getElementById("r50").style.backgroundImage = 'url(img/balltown.jpg)';
document.getElementById("r50").style.backgroundSize = "cover";
document.getElementById("r50").style.width="110px";
document.getElementById("r50").style.height="110px";
document.getElementById("r50").style.borderRadius="110px";
document.getElementById("r50").style.left="377px";



document.getElementById("r10").style.background="transparent";
document.getElementById("r10").style.width="70px";
document.getElementById("r10").style.height="70px";
document.getElementById("r10").style.left="399px";

document.getElementById("r20").style.background="transparent";
document.getElementById("r20").style.width="70px";
document.getElementById("r20").style.height="70px";
document.getElementById("r20").style.left="399px";

document.getElementById("r30").style.background="transparent";
document.getElementById("r30").style.width="70px";
document.getElementById("r30").style.height="70px";
document.getElementById("r30").style.left="399px";


document.getElementById("r40").style.background="transparent";
document.getElementById("r40").style.width="70px";
document.getElementById("r40").style.height="70px";
document.getElementById("r40").style.left="399px";

check2=true;
check1=true;
check3=true;
check4=true;

}


})

var check1=false;
var check2=true;
var check3=true;
var check4=true;
var check5=true;



function first(){


var home=$(this).attr("topo2");
var posicao=$(home).offset().top;


$("html, body").animate({
scrollTop:posicao-100
});


if(check1 == true){
document.getElementById("r1").style.background="cyan";
document.getElementById("r10").style.background="cyan";
}else{
 
}            

}


function second(){

if(check2 == true){
document.getElementById("r2").style.background="cyan";
document.getElementById("r20").style.background="cyan";
}else{
 
}            

var ball=$(this).attr("ball");

var posicao=$(ball).offset().top;
$("html, body").animate({
scrollTop:posicao+440

});

}
/*concerto mobile*/
function second2(){

if(check2 == true){
document.getElementById("r2").style.background="cyan";
document.getElementById("r20").style.background="cyan";
}else{
 
}            

var ball=$(this).attr("ball");

var posicao=$(ball).offset().top;
$("html, body").animate({
scrollTop:posicao+210

});

}


function third(){

if(check3 == true){
document.getElementById("r3").style.background="cyan";
document.getElementById("r30").style.background="cyan";
}else{
 
}            

var prog=$(this).attr("prog");
var posicao=$(prog).offset().top;


$("html, body").animate({
scrollTop:posicao
});


}
function forth(){


if(check4 == true){
document.getElementById("r4").style.background="cyan";
document.getElementById("r40").style.background="cyan";
}else{
 
}            

  
var ps=$(this).attr("ps");
var posicao=$(ps).offset().top;


$("html, body").animate({
scrollTop:posicao+20
});



}

function fifth(){


if(check5 == true){
document.getElementById("r5").style.background="cyan";
document.getElementById("r50").style.background="cyan";
}else{
 
}            

  
var final=$(this).attr("final");
var posicao=$(final).offset().top;


$("html, body").animate({
scrollTop:posicao+60
});



}
