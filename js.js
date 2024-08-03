

class AbreMenu{

constructor(mobile,nav,navLinks){

this.mobile=document.querySelector(mobile);
this.nav=document.querySelector(nav);
this.navLinks=document.querySelectorAll(navLinks);
this.ativando="active";  
this.ativando2="active";                 /*atributo active que esta no css*/
this.Ativar= this.Ativar.bind(this);   /*muda o this pra que ele acesse minha classe abremenu e não a  div do nav pra que funcione*/

}

animar(){

    this.navLinks.forEach((link) =>{
        
        link.style.animation              /* operador ternário se o dom do navegador não tiver a propriedade animation vai ser colocado se já estiver deixa vazio pois já tem  */
        ? (link.style.animation = "")
            : (link.style.animation = `linkFade 0.3s ease forwards 0.4s`);
    
    
        });
    
    
    }
    


Ativar(){

  this.nav.classList.toggle(this.ativando);/*toggle ao clicar ele adicioana o ective no nav*/
  this.mobile.classList.toggle(this.ativando);/*toggle ao clicar ele adicioana o ective no nav*/
  this.animar();

}




Clicar(){ /*função especifica de clique*/

     this.mobile.addEventListener("click",this.Ativar);/*clique aciona função ativar*/


    
}


/*este metodo inicia automaticamente*/
init(){

    if(this.mobile){/*se o atributo mobile existir*/

     this.Clicar();/*chama o função clicar*/

    }

return this;

}


}


const abreMenu = new AbreMenu(/*inserindo os m eus identificadores do css por parametro que está acima nos atributos = mobile,nav e navLinks*/
".mobile2",
".nav2",
".nav2 li",

);

abreMenu.init();/*exedcutando o init*/