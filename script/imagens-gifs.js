var setorPara = {
   saberSeTreinaFisico: document.querySelector('.exercicios'),
   dieta: document.querySelector('.dieta'),

   vidaSexual: document.querySelector('.vida-sexual'),
   sono: document.querySelector('.sono')
} 


setorPara.saberSeTreinaFisico.addEventListener('click', () => {
   var exercicios = {
      gostaDemais: document.querySelector('#cariani'),
      fazConstantemente: document.querySelector('#exercicios-constantes'),

      maisMenos: document.querySelector('#mais-menos'),

      bemComFisico: document.querySelector('#ryan'),
      sedentario: document.querySelector('#simpson')
   }

   var mudaGif = document.querySelector('#gif-exercicios')

   if (exercicios.gostaDemais.checked) {
      mudaGif.src = 'midia/gifs/gosto-muito.gif'
   }

   else if (exercicios.fazConstantemente.checked) {
      mudaGif.src = 'midia/gifs/constante.gif'
   }

   else if (exercicios.maisMenos.checked) {
      mudaGif.src = 'midia/images/mais-menos.webp'
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