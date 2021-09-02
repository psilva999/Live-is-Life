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
      mudaGif.src = 'https://i.ibb.co/yhvymQY/gosto-muito.gif'
   }

   else if (exercicios.fazConstantemente.checked) {
      mudaGif.src = 'https://i.ibb.co/6HRQbxt/constante.gif'
   }

   else if (exercicios.maisMenos.checked) {
      mudaGif.src = 'https://i.ibb.co/hFK1j48/mais-menos.webp'
   }

   else if (exercicios.bemComFisico.checked) {
      mudaGif.src = 'https://i.ibb.co/yhBCv3q/ryan-pizza.gif'
   }

   else if (exercicios.sedentario.checked) {
      mudaGif.src = 'https://i.ibb.co/C9ZvbRP/sedentario.jpg'
   }
})

//exercicios.mudaGif.src = 'midia/video-audios-gif/'