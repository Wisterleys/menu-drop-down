class DropDown{
   //O OBJETIVO É COLOCAR, SE NÃO EXITIR CRIAR, O STYLE DENTRO DO HEAD E APONTAR PARA QUAL ELEMENTO VAI MEU SVG, OU SEJA, O LOCAL INFORMADO NO CONSTRUTOR
    constructor(local,obj={}){
       /**
        * LOCAL = ONDE VAI SER INSERIDO A IMAGEM DO DROPDOWN? document.querySelector("#id do elemento")
        * OBJ= TODOS OS ELEMENTOS QUE SÃO O MENU, OU SEJA, PRECISA NOMEAR A CHAVE COM O NOME E INFORMAR document.querySelector("#id")
        */
        this._local=local;
        this._obj=obj;
        this.insertHTML(local,obj);
    }
    getCodeImageSvg(){
        return {
         styles:`
         *{border:1px solid red;}
            #drop{
               position: relative;
               width: 40px;
               height: 50px;
               padding: 0px;
               margin: 0px;
            }
            #impres{
               position:relative;
               padding:0px;
               margin:0px;
               text-align: left;
               border:1px solid red;
            }
            .lisD{
               position: relative;
               padding:0px;
               margin:0px;
               list-style-type:none;
               text-align: left;
               border:1px solid blue;
            }
            #svg8{
               position: relative;
               width: 100%;
               height: 100%;
               margin:0px;
            }
            #rect846{
            fill:#2b0000;
            stroke:#000000;
            stroke-width:0.264583;
            cursor: pointer;
            transition: fill 0.5s;
            }
            #rect846:hover{
            fill:#360557;
            }
            #rect846:active{
            fill:#00ff0d;
            }
           .path{
            fill:#ffffff;
            stroke:#000000;
            stroke-width:2px;
            stroke-linecap:butt;
            stroke-linejoin:miter;
            stroke-opacity:1
           }
           .path:hover{
            fill:#0c0c0c;
            stroke:#fdf8f8;
           }
            `,
            tagSvg:`
            <div id="drop">
      <svg
     
      viewBox="0 0 210 297"
      id="svg8"
      >
     <g>
        
       
       <rect
          id="rect846"
          style=""
          width="100%"
          height="100%"
          x="0"
          y="0" />
       <path
          class="path"
          d="m 26.71046,58.964599 c -1.511952,1.511907 3.275746,17.386906 18.395137,25.828232 15.119392,8.441326 40.569279,9.449242 67.405863,9.82721 26.83659,0.377967 55.05825,0.125988 69.16922,-1.6378 14.11098,-1.763788 14.11098,-5.039518 -11.21379,-6.929535 C 145.14211,84.16269 94.494315,83.658731 65.264039,76.981177 36.033763,70.303623 28.222412,57.452692 26.71046,58.964599 Z"
          id="path939"
          inkscape:path-effect="#path-effect941"
          inkscape:original-d="m 20.410714,44.60119 c 4.787963,15.875265 9.57566,31.750264 14.363095,47.625 25.45117,1.008221 50.901057,2.016138 76.351191,3.023809 28.22305,-0.251725 56.44471,-0.503703 84.66666,-0.755952 2.7e-4,-3.275594 2.7e-4,-6.551324 0,-9.827381 C 145.14211,84.162952 94.494312,83.658995 43.845239,83.15476 36.033839,70.303577 28.222487,57.452646 20.410714,44.60119 Z" />
       <path
       class="path"
         
          d="m 26.762767,115.96105 c -1.511952,1.51191 3.275746,17.38691 18.395137,25.82823 15.119391,8.44133 40.569278,9.44924 67.405856,9.82721 26.83659,0.37797 55.05825,0.12599 69.16923,-1.63779 14.11098,-1.76379 14.11098,-5.03952 -11.2138,-6.92954 C 145.19441,141.15914 94.546621,140.65518 65.316345,133.97763 36.08607,127.30008 28.27472,114.44914 26.762767,115.96105 Z"
          id="path939-1"
          inkscape:path-effect="#path-effect960"
          inkscape:original-d="m 20.46302,101.59764 c 4.787963,15.87527 9.57566,31.75027 14.363095,47.625 25.45117,1.00822 50.901057,2.01614 76.351195,3.02381 28.22304,-0.25172 56.4447,-0.5037 84.66666,-0.75595 2.6e-4,-3.27559 2.6e-4,-6.55132 0,-9.82738 C 145.19441,141.1594 94.546618,140.65545 43.897545,140.15121 36.086145,127.30003 28.274793,114.4491 20.46302,101.59764 Z" />
       <path
       class="path"
         
          d="m 29.030623,163.58606 c -1.511953,1.51191 3.275746,17.38691 18.395137,25.82823 15.119392,8.44133 40.569279,9.44924 67.40586,9.82721 26.83659,0.37797 55.05825,0.12599 69.16923,-1.63779 14.11098,-1.76379 14.11098,-5.03952 -11.2138,-6.92954 -25.32479,-1.89002 -75.972572,-2.39398 -105.202848,-9.07153 -29.230276,-6.67755 -37.041627,-19.52849 -38.553579,-18.01658 z"
          id="path939-1-0"
          inkscape:path-effect="#path-effect979"
          inkscape:original-d="m 22.730875,149.22265 c 4.787963,15.87527 9.57566,31.75027 14.363096,47.625 25.451171,1.00822 50.901058,2.01614 76.351199,3.02381 28.22304,-0.25172 56.4447,-0.5037 84.66666,-0.75595 2.6e-4,-3.27559 2.6e-4,-6.55132 0,-9.82738 -50.64957,-0.50372 -101.297355,-1.00767 -151.946429,-1.51191 -7.8114,-12.85118 -15.622753,-25.70211 -23.434526,-38.55357 z" />
     </g>
   </svg>
   
    </div>
            `
        }
    }
    insertAux(local,obj={},o){//Esse método ajuda o método insertHTML apenas
      document.querySelector("style").innerHTML+=obj.styles;
      local.innerHTML=obj.tagSvg;
      local.style.height="50px"
      document.querySelector("#drop").style.display="block";
      document.querySelector("#drop").style.float="left";
      this.calcPositionImpress(local,document.querySelector("#drop"),o)
    }
    insertHTML(local,o){//AQUI FAÇO A INSERÇÃO PROPRIAMENTE DITA
      let obj= this.getCodeImageSvg();
      if(document.querySelector("style")){
         this.insertAux(local,obj,o)
      }else{
         this.createTagsObj({local:document.querySelector("head"),tag:"style",addTag:obj.styles})
         this.insertAux(local,obj,o)
      }
    }
    calcPositionImpress(loca,imgSvgTag,obj){
      /* offsetHeight: 50
      offsetLeft: 0
      offsetParent: nav#nav
      offsetTop: 0
      offsetWidth */
      let cont=45;
      let vetCont=[]
      let li=`<li class='lisD'>
     ${CorrenteSvg.corrente()}
      </li>`;
      const base=110;
      for(let key in obj){
         //console.log(obj[key].length,cont)
         
         let qd = obj[key].split(" ")
         vetCont.push(qd);
         
         li+=`<li class="lisD">${obj[key]}</li>`
         
      }
      cont = (cont*vetCont[vetCont.length-1].length)
      cont = (cont>base)?cont:base;//FIXAR UMA LARGURA MINIMA
      //console.log(cont)
      this.createTagsObj({local:loca,tag:"ul",id:"impres",style:`left:${imgSvgTag.offsetLeft}px;top:${imgSvgTag.offsetTop+imgSvgTag.offsetHeight}px;width:${cont}px;`,addTag:li})
      
    }
    createTagsObj(obj={}){
       /**
        * PRECISA DE ALGUNS PARAÊMTROS NECESSÁRIOS PARA USAR
        * PRECISA PASSAR
        * 
        * LOCAL= DENTRO DE QUAL ELEMENTO VAI SER CRIADO A TAG INFORMADA
        * TAG = QUAL TAG DESEJA CRIAR
        * addTag = DESEJA INSERIR UMA TAG JÁ PRONTA DENTRO DESSA TAG QUE ESTÁ CRIANDO? SE SIM! ENTÃO INFORME EX: <P>EXEMPLO</P>
        */
      if(obj.local && obj.tag){
          let tag = document.createElement(obj.tag);
          for(let key in obj){
              if(key != "local" && key != "tag" && key != "addTag"){
                  let att = document.createAttribute(key)
                  att.value=obj[key];
                  tag.setAttributeNode(att)
                  
                  
              }
          }
          if(obj.addTag){
                  tag.innerHTML=obj.addTag;
                    //console.log(obj,obj.addTag)
          }
          obj.local.appendChild(tag);
      }
  }
}