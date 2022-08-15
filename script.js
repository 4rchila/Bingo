let CardOne = document.querySelector('.card-one');
let CardTwo = document.querySelector('.card-two');
let button = document.querySelector('.button-number'); 
let circle = document.querySelector('.circle');
const resultados = document.getElementById('result');
let player = [];
let cpu = [];
let num;

const fragmento = document.createDocumentFragment();

//player
for (let i = 0; i < 15; i++) {
    let num = Math.random() * 100;
    num = Math.round(num);
    const span1 = document.createElement('SPAN');
    span1.classList.add('spanplayer' + num);
    span1.textContent = num;
    fragmento.appendChild(span1);
    player.push(span1.textContent);
}
CardOne.appendChild(fragmento);
//cpu
for (let i = 0; i < 15; i++) {
    let num = Math.random() * 100;
    num = Math.round(num);
      const span2 = document.createElement('SPAN');
      span2.classList.add('spancpu' + num);
    span2.textContent = num;
    fragmento.appendChild(span2);
    cpu.push(span2.textContent);
}
CardTwo.appendChild(fragmento);
button.addEventListener('click',(num) =>{
        num = Math.random() * 100;
        num = Math.floor(num);
        button.textContent = num;
  let buttons = document.createElement('BUTTON');
  buttons.classList.add('resultadosBingo');
  buttons.textContent = num;
  resultados.appendChild(buttons);



  //eliminar
  function eliminar(array, elemento) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== elemento) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
  //eliminar

  for(nc of cpu){
    let resultadocpu = document.querySelector(`.spancpu${nc}`);
      if(nc == num){
        resultadocpu.style.background = 'none';
        resultadocpu.style.textDecoration = 'line-through' 
        resultadocpu.style.opacity = '0.5'
        cpu = eliminar(cpu,nc)
      }
    }
    for(np of player){
      if(np == num){
      let resultadoplayer = document.querySelector(`.spanplayer${np}`);
      resultadoplayer.style.background = 'none';
      resultadoplayer.style.textDecoration = 'line-through';
      resultadoplayer.style.opacity = '0.5'
      player = eliminar(player,np)
      }
    }
   
     if(cpu == false && player == false){
        alert('el duelo a terminado en un empate')
     }else if (cpu == false ){
      let writen = document.createElement('P')
      writen.classList.add('parrafo')
      writen.textContent = 'CPU WINS'
      circle.replaceChild(writen,button)
     }else if (player == false){
      let writen = document.createElement('P')
      writen.classList.add('parrafo')
      writen.textContent = 'PLAYERS WINS'
      circle.replaceChild(writen,button)
     }

})




// .    text-decoration: line-through