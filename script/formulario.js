var saberSeTreinaFisico = document.querySelector('.exercicios')

saberSeTreinaFisico.addEventListener('click', () => {
   var exercicios = {
      gostaDemais: document.querySelector('#cariani'),
      fazConstantemente: document.querySelector('#exercicios-constantes'),

      maisMenos: document.querySelector('#mais-menos'),

      bemComFisico: document.querySelector('#ryan'),
      sedentario: document.querySelector('#simpson')
   }

   var mudaGif = document.querySelector('#gif-exercicios')

   if (exercicios.gostaDemais.checked) {
      mudaGif.src = '../midia/gifs/gosto-muito.gif'
   }

   else if (exercicios.fazConstantemente.checked) {
      mudaGif.src = '../midia/gifs/constante.gif'
   }

   else if (exercicios.maisMenos.checked) {
      mudaGif.src = '../midia/images/mais-menos.webp'
   }

   else if (exercicios.bemComFisico.checked) {
      mudaGif.src = '../midia/gifs/ryan-pizza.gif'
   }

   else if (exercicios.sedentario.checked) {
      mudaGif.src = '../midia/images/sedentario.jpg'
   }
})

//exercicios.mudaGif.src = 'midia/video-audios-gif/'