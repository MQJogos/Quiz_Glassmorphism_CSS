

const container=document.querySelector(".app");

const myApp=[
              { 
               type:" A ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"A",options:['ABACAXI.jpg','IORGUTE.jpg','ELEFANTE.jpg','IGLU.jpg'],key:0},

                           {question:"A",options:['ARVORE.jpg','IOIO.jpg','ESQUILO.jpg' ,'ILHA.jpg'],key:0},

                           {question:"A",options:['ESPADA.jpg','OLHO.jpg','IORGUTE.jpg','ABACATE.jpg'],key:3},

                           {question:"A",options:['OURO.jpg' ,'ABOBORA.jpg','ILHA.jpg','URUBU.jpg'],key:1},
                           
                           {question:"A",options:['ARANHA.jpg','ILHA.jpg','URUBU.jpg','OVO.jpg'],key:0},

                           {question:"A",options:['ESCOVA.jpg','OVELHA.jpg','UVA.jpg','ARARA.jpg'],key:3},
                           
                           {question:"A",options:['ONIBUS.jpg','AVIAO.jpg','UNHAS.jpg','ELEFANTE.jpg'],key:1},

                           {question:"A",options:['ELEFANTE.jpg','OVO.jpg','ASTRONAUTA.jpg','UVA.jpg'],key:2},

                           {question:"A",options:['IMA.jpg','IORGUTE.jpg','ARMARIO.jpg','ELEFANTE.jpg'],key:2},

                           {question:"A",options:['ABELHA.jpg','ESCADA.jpg','ESPANTALHO.jpg','ESPADA.jpg'],key:0}

                          ]
              },

              { 
                   type:" E ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[
                              {question:"E",options:['ABACATE.jpg','ESPANTALHO.jpg','OVELHA.jpg','IGLU.jpg'],key:1},

                              {question:"E",options:['OLHO.jpg','IORGUTE.jpg','ELEFANTE.jpg','ABACAXI.jpg'],key:2},

                              {question:"E",options:['ABOBORA.jpg','ESCOVA.jpg','OLEO.jpg' ,'OVO.jpg',],key:1},

                              {question:"E ",options:['ESQUILO.jpg','ABOBORA.jpg','ILHA.jpg','OLEO.jpg'],key:0},

                              {question:"E",options:['OURO.jpg','URSO.jpg','ESTRADA.jpg','IMA.jpg',],key:2},

                              {question:"E",options:['ESTRELA.jpg','ARANHA.jpg','ILHA.jpg','ABOBORA.jpg'],key:0},

                              {question:"E",options:['ABACATE.jpg','ABACAXI.jpg','OURO.jpg','ESPADA.jpg'],key:3},

                              {question:"E",options:['OLHO.jpg','ESCADA.jpg','ABACAXI.jpg','AVIAO.jpg'],key:1},

                              {question:"E ",options:['ILHA.jpg','UNICORNIO.jpg','ESPAGUETE.jpg','IOIO.jpg'],key:2},

                              {question:"E",options:['ESCORREGADOR.jpg','UVA.jpg','OVO.jpg','ARVORE.jpg'],key:0}

                          ]
              },

               {
                   type:" I ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[ 
                             {question:"I",options:['ARARA.jpg','ESTRADA.jpg','IORGUTE.jpg', 'OLEO.jpg'],key:2},

                             {question:"I",options:['INCENDIO.jpg','ALHO.jpg','ESTRADA.jpg','AVIAO.jpg'],key:0},

                             {question:"I",options:['OVO.jpg' ,'ESCOVA.jpg','ILHA.jpg','ALHO.jpg'],key:2},

                             {question:"I",options:['ABOBORA.jpg','IMA.jpg','ESCADA.jpg', 'OURO.jpg'],key:1},

                             {question:"I",options:['IGLU.jpg','UNIVERSO.jpg','ABACAXI.jpg','OLHO.jpg'],key:0},

                             {question:"I",options:['OLHO.jpg','ARARA.jpg','ABACATE.jpg','INJECAO.jpg'],key:3},

                             {question:"I",options:['ABACATE.jpg','IOIO.jpg','OLHO.jpg','ELEFANTE.jpg'],key:1},
                             
                             {question:"I",options:['IGREJA.jpg','URUBU.jpg','OCULOS.jpg','ESCORREGADOR.jpg'],key:0},

                             {question:"I",options:['AVIAO.jpg','UM.jpg','ONIBUS.jpg','INSETO.jpg'],key:3},

                             {question:"I",options:['ELEFANTE.jpg','OVELHA.jpg','ISQUEIRO.jpg','ABELHA.jpg'],key:2}


                   ]

                },

                

              {
                   type:" O ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[ 
                                {question:"O",options:['ABACAXI.jpg','URUBU.jpg','ESPAGUETE.jpg','ONDA.jpg'],key:3},

                                {question:"O",options: ['OITO.jpg','AVIAO.jpg','UNHAS.jpg','IMA.jpg'],key:0},

                                {question:"O",options:['ARARA.jpg','ELEFANTE.jpg','ORELHA.jpg','ESTRELA.jpg'],key:2},

                                {question:"O",options:['IORGUTE.jpg','ABACAXI.jpg','OLHO.jpg','UNIVERSO.jpg'],key:2},

                                {question:"O",options:['UVA.jpg','OSSO.jpg','ABOBORA.jpg' ,'ESTRELA.jpg'],key:1},

                                {question:"O",options:['OCULOS.jpg','AVIAO.jpg','URUBU.jpg', 'ESCOVA.jpg'],key:0},

                                {question:"O",options:['IMA.jpg','ESPAGUETE.jpg','ARARA.jpg','ONIBUS.jpg'],key:3},

                                {question:"O",options:['AVIAO.jpg','ELEFANTE.jpg','ONCA.jpg','ARARA.jpg'],key:2},

                                {question:"O",options:['UNICORNIO.jpg','ABELHA.jpg','OURO.jpg','UM.jpg'],key:2},

                                {question:"O",options:['OVELHA.jpg','ELEFANTE.jpg','ABELHA.jpg','IGLU.jpg'],key:0}    

                              ]         
                          
               },


               {
                   type:" U ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[
                              {question:"U",options:['ABACATE.jpg','ABACAXI.jpg','UNIVERSO.jpg','ARARA.jpg'],key:2},

                              {question:"U",options:['ARARA.jpg','UNIFORME.jpg','ABACAXI.jpg','OURO.jpg'],key:1},

                              {question:"U",options:['OURO.jpg','ALHO.jpg','ESTRELA.jpg','UNHAS.jpg' ],key:3},

                              {question:"U",options:['ABOBORA.jpg','ABACAXI.jpg','URSO.jpg','ELEFANTE.jpg'],key:2},

                              {question:"U",options:['ILHA.jpg' ,'ESCOVA.jpg','ASTRONAUTA.jpg', 'URUBU.jpg'],key:3},

                              {question:"U",options:['IGLU.jpg','UVA.jpg','IORGUTE.jpg','IOIO.jpg'],key:1},

                              {question:"U",options:['UM.jpg','ASTRONAUTA.jpg','ILHA.jpg','IGLU.jpg'],key:0},

                              {question:"U",options:['OVO.jpg','IMA.jpg','UNICORNIO.jpg','ESTRELA.jpg'],key:2}

                              

                             

               ]

             } 

            ]

     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();
                

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
              var options=this.optionEle.children;
              for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="          ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="        ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }

           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              
              if (this.score > this.quizSize/2){
                   
                   this.optionEle.innerHTML="<h1><span>FIM DO JOGO</span> <br> PARABÉNS</h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><span>FIM DO JOGO</span> <br> PRATIQUE MAIS</h1>";
              }
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }


      

     



  
   
   
 


