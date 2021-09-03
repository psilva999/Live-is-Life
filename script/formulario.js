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
      mudaGif.src = 'https://i.ibb.co/VYvJ0wz/gosto-muito.gif'
   }

   else if (exercicios.fazConstantemente.checked) {
      mudaGif.src = 'https://i.ibb.co/W2Yd8W1/constante.gif'
   }

   else if (exercicios.maisMenos.checked) {
      mudaGif.src = 'https://i.ibb.co/v1Rj7Nk/mais-menos.webp'
   }

   else if (exercicios.bemComFisico.checked) {
      mudaGif.src = 'https://i.ibb.co/0qfK8kk/ryan-pizza.gif'
   }

   else if (exercicios.sedentario.checked) {
      mudaGif.src = 'https://i.ibb.co/vXFCr3C/sedentario.jpg'
   }
})