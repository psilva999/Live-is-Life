var setorPara = {
   saberSeTreinaFisico: document.querySelector('.exercicios'),
   dieta: document.querySelector('.dieta'),

   vidaIntima: document.querySelector('.vida-sexual'),
   sono: document.querySelector('.sono'),

   satisfeitoVida: document.querySelector('.satisfeito-vida')
} 

setorPara.saberSeTreinaFisico.addEventListener('click', () => {
   var exercicios = {
      gostaDemais: document.querySelector('#cariani'),
      fazConstantemente: document.querySelector('#exercicios-constantes'),

      maisMenos: document.querySelector('#mais-menos'),

      bemComFisico: document.querySelector('#ryan'),
      sedentario: document.querySelector('#pessoa-sedentaria')
   }

   var mudaGif = document.querySelector('#gif-exercicios')

   if (exercicios.gostaDemais.checked) {
      mudaGif.src = 'midia/gifs/gosto-muito.gif'
   }

   else if (exercicios.fazConstantemente.checked) {
      mudaGif.src = 'midia/gifs/constante.gif'
   }

   else if (exercicios.maisMenos.checked) {
      mudaGif.src = 'https://i.ibb.co/QmWDyJq/mais-menos.jpg'
   }

   else if (exercicios.bemComFisico.checked) {
      mudaGif.src = 'midia/gifs/ryan-pizza.gif'
   }

   else if (exercicios.sedentario.checked) {
      mudaGif.src = 'midia/images/sedentario.jpg'
   }
})

setorPara.dieta.addEventListener('click', () => {
   var alimentacao = {
      saudavel: document.querySelector('#saudavel'),
      flexivel: document.querySelector('#flexivel'),

      desregrada: document.querySelector('#desregrada')
   }
   var mudaDieta = document.querySelector('#img-alimentacao')

   if (alimentacao.saudavel.checked) {
      mudaDieta.src = 'midia/images/alm-saudavel.jpg'
   }

   else if (alimentacao.flexivel.checked) {
      mudaDieta.src = 'midia/images/alm-flexivel.jpg'
   }

   else if (alimentacao.desregrada.checked) {
      mudaDieta.src = 'midia/images/alm-gordurosa.jpg'
   }
})

setorPara.vidaIntima.addEventListener('click', () => {
   var intimo = {
      naoInforma: document.querySelector('#nao-informa-vida-sexual'),
      baixa: document.querySelector('#baixa'),

      equilibrada: document.querySelector('#equilibrada'),
      ativa: document.querySelector('#ativa')
   }
   var mudaVidaIntima = document.querySelector('#imagem-vida-sexual')

   if (intimo.naoInforma.checked) {
      mudaVidaIntima.src = 'midia/images/silence.jpg'
   }

   else if (intimo.baixa.checked) {
      mudaVidaIntima.src = 'midia/images/em-baixa.png'
   }

   else if (intimo.equilibrada.checked) {
      mudaVidaIntima.src = 'midia/images/equilibrada.png'
   }

   else if (intimo.ativa.checked) {
      mudaVidaIntima.src = 'https://i.ibb.co/7jRK69c/free-woman.jpg'
   }
})

setorPara.sono.addEventListener('click', () => {
   var nivelSono = {
      nulo: document.querySelector('#sono-nulo'),
      dormeMal: document.querySelector('#dorme-mal'),

      normal: document.querySelector('#sono-normal'),
      dorminhoco: document.querySelector('#dorminhoco')
   }

   var mudaGifSono = document.querySelector("#gif-horas-sono")

   if (nivelSono.nulo.checked) {
      mudaGifSono.src = 'midia/gifs/insonia.gif'
   }

   else if (nivelSono.dormeMal.checked) {
      mudaGifSono.src = 'midia/gifs/2-4-horas.gif'
   }

   else if (nivelSono.normal.checked) {
      mudaGifSono.src = 'midia/gifs/5-8-horas.gif'
   }

   else if (nivelSono.dorminhoco.checked) {
      mudaGifSono.src = 'midia/gifs/dorminhoco.gif'
   }
})

setorPara.satisfeitoVida.addEventListener('click', () => {
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
})