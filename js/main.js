function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


setInterval(jogo, 10)

  function jogo(){

    let prim = document.querySelector('#div2')
    let seg = document.querySelector('#div3')
    let ter = document.querySelector('#div4')
    let quar = document.querySelector('#div5')


    if(prim.firstChild != null){
        if(prim.firstChild.id == "misan1" || prim.firstChild.id == "misan2" ){
            prim.style.boxShadow = '0px 0px 10px 1px green'
        }
        else{
            prim.style.boxShadow = '0px 0px 10px 1px red'

        }
    }
    else{
        prim.style.boxShadow = '0px 0px 10px 1px transparent'
    }

    if(seg.firstChild != null){
        if(seg.firstChild.id == "miso1" || seg.firstChild.id == "miso2" ){
            seg.style.boxShadow = '0px 0px 10px 1px green'
        }
        else{
            seg.style.boxShadow = '0px 0px 10px 1px red'

        }
    }
    else{
        seg.style.boxShadow = '0px 0px 10px 1px transparent'
    }

    if(ter.firstChild != null){
        if(ter.firstChild.id == "miso1" || ter.firstChild.id == "miso2" ){
            ter.style.boxShadow = '0px 0px 10px 1px green'
        }
        else{
            ter.style.boxShadow = '0px 0px 10px 1px red'

        }
    }
    else{
        ter.style.boxShadow = '0px 0px 10px 1px transparent'
    }

    if(quar.firstChild != null){
        if(quar.firstChild.id == "misan1" || quar.firstChild.id == "misan2" ){
            quar.style.boxShadow = '0px 0px 10px 1px green'
        }
        else{
            quar.style.boxShadow = '0px 0px 10px 1px red'

        }
    }
    else{
        quar.style.boxShadow = '0px 0px 10px 1px transparent'
    }



    if(prim.firstChild != null && seg.firstChild != null && ter.firstChild != null && quar.firstChild != null){
        if((prim.firstChild.id == "misan1" || prim.firstChild.id == "misan2" ) && (seg.firstChild.id == "miso1" || seg.firstChild.id == "miso2" ) && (ter.firstChild.id == "miso1" || ter.firstChild.id == "miso2" ) && (quar.firstChild.id == "misan1" || quar.firstChild.id == "misan2" )){
           
            let premio = document.getElementById('premio')
            premio.innerHTML = 'Parabens! Você acertou todos!'

        }
    }
    else{
        let premio = document.getElementById('premio')
        premio.innerHTML = ''
    }

  }

  function reset(){

    document.querySelector("section").innerHTML = `<div class="escolhas">
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
        <img src="Misandria.png" draggable="true" ondragstart="drag(event)" id="misan1" >
      </div>
      
      <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
        <img src="Misoginia.png" draggable="true" ondragstart="drag(event)" id="miso1" >
      </div>

      <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
        <img src="Misandria.png" draggable="true" ondragstart="drag(event)" id="misan2" >
      </div>

      <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
        <img src="Misoginia.png" draggable="true" ondragstart="drag(event)" id="miso2" >
      </div>

    </div>

    <div class="respostas">


        <div class="quadrares">
      <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div class="texto">      
      <p>Atualmente, devido à ampliação dos movimentos feministas, o termo é sinônimo de Androfobia.</p>
    </div>
    </div>

    <div class="quadrares">
        <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div class="texto">      
        <p>A principal responsável por grande parte dos assassinatos de mulheres, também conhecido por feminicídio.</p>
      </div>
      </div>


      <div class="quadrares">
        <div id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div class="texto">      
        <p>Esse conceito abarca os sentimentos de desprezo, preconceito, repulsa e aversão às mulheres e ao que remete ao feminino.</p>
      </div>
      </div>


      <div class="quadrares">
        <div id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div class="texto">      
        <p>Pode se manifestar de várias maneiras, incluindo a discriminação sexual, a difamação dos homens ou mais amplamente o ódio, o medo, a raiva e o desprezo aos homens.</p>
      </div>
      </div>
    </div>`

  }