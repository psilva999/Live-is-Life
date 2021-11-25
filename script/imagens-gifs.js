document.querySelector('.exercicios').onclick = () => {
   var mudaGif = document.querySelector('#gif-exercicios')

   if (document.querySelector('#cariani').checked) {
      mudaGif.src = 'midia/gifs/gosto-muito.gif'
   }

   else if (document.querySelector('#exercicios-constantes').checked) {
      mudaGif.src = 'midia/gifs/constante.gif'
   }

   else if (document.querySelector('#mais-menos').checked) {
      mudaGif.src = 'https://i.ibb.co/QmWDyJq/mais-menos.jpg'
   }

   else if (document.querySelector('#ryan').checked) {
      mudaGif.src = 'midia/gifs/ryan-pizza.gif'
   }

   else if (document.querySelector('#pessoa-sedentaria').checked) {
      mudaGif.src = 'midia/images/sedentario.jpg'
   }
}

document.querySelector('.dieta').onclick = () => {
   var mudaDieta = document.querySelector('#img-alimentacao')

   if (document.querySelector('#saudavel').checked) {
      mudaDieta.src = 'midia/images/alm-saudavel.jpg'
   }

   else if (document.querySelector('#flexivel').checked) {
      mudaDieta.src = 'midia/images/alm-flexivel.jpg'
   }

   else if (document.querySelector('#desregrada').checked) {
      mudaDieta.src = 'midia/images/alm-gordurosa.jpg'
   }
}

document.querySelector('.vida-sexual').onclick = () => {
   var mudaVidaIntima = document.querySelector('#imagem-vida-sexual')

   if (document.querySelector('#nao-informa-vida-sexual').checked) {
      mudaVidaIntima.src = 'midia/images/silence.jpg'
   }

   else if (document.querySelector('#baixa').checked) {
      mudaVidaIntima.src = 'midia/images/em-baixa.png'
   }

   else if (document.querySelector('#equilibrada').checked) {
      mudaVidaIntima.src = 'midia/images/equilibrada.png'
   }

   else if (document.querySelector('#ativa').checked) {
      mudaVidaIntima.src = 'https://i.ibb.co/7jRK69c/free-woman.jpg'
   }
}

document.querySelector('.sono').onclick = () => {
   var mudaGifSono = document.querySelector("#gif-horas-sono")

   if (document.querySelector('#sono-nulo').checked) {
      mudaGifSono.src = 'midia/gifs/insonia.gif'
   }

   else if (document.querySelector('#dorme-mal').checked) {
      mudaGifSono.src = 'midia/gifs/2-4-horas.gif'
   }

   else if (document.querySelector('#sono-normal').checked) {
      mudaGifSono.src = 'midia/gifs/5-8-horas.gif'
   }

   else if (document.querySelector('#dorminhoco').checked) {
      mudaGifSono.src = 'midia/gifs/dorminhoco.gif'
   }
}

document.querySelector('.satisfeito-vida').onclick = () => {
   var vida = {
      muitoBoa: document.querySelector('#muito-bom'),
      boa: document.querySelector('#bom'),

      naoSabe: document.querySelector('#nao-sei-vida'),

      ruim: document.querySelector('#ruim'),
      muitoRuim: document.querySelector('#muito-ruim')
   }

   var gif = {
      smile: document.querySelector('#emoji-smile'),
      fight: document.querySelector('#emoji-fight'),

      doubt: document.querySelector('#emoji-doubt'),

      time: document.querySelector('#emoji-time'),
      sad: document.querySelector('#emoji-sad')
   }

   if (vida.muitoBoa.checked) {
      gif.smile.src = 'midia/gifs/emoji-smile.gif'
      gif.smile.style.display = 'block'
   }

   else if (vida.muitoBoa.checked == false) {
      gif.smile.src = ''
      gif.smile.style.display = 'none'
   }

   if (vida.boa.checked) {
      gif.fight.src = 'midia/gifs/emoji-fight.gif'
      gif.fight.style.display = 'block'
   }

   else if (vida.boa.checked == false) {
      gif.fight.src = ''
      gif.fight.style.display = 'none'
   }

   if (vida.naoSabe.checked) {
      gif.doubt.src = 'midia/gifs/emoji-doubt.gif'
      gif.doubt.style.display = 'block'
   }

   else if (vida.naoSabe.checked == false) {
      gif.doubt.src = ''
      gif.doubt.style.display = 'none'
   }

   if (vida.ruim.checked) {
      gif.time.src = 'midia/gifs/time.gif'
      gif.time.style.display = 'block'
   }

   else if (vida.ruim.checked == false) {
      gif.time.src = ''
      gif.time.style.display = 'none'
   }

   if (vida.muitoRuim.checked) {
      gif.sad.src = 'midia/gifs/emoji-sad.gif'
      gif.sad.style.display = 'block'
   }

   else if (vida.muitoRuim.checked == false) {
      gif.sad.src = ''
      gif.sad.style.display = 'none'
   }
}