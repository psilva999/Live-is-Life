var modifica = {
   play: document.querySelector('.play'),
   pause: document.querySelector('.pause')
}

modifica.play.addEventListener('click', () => {
   modifica.play.classList.remove('active')

   modifica.pause.classList.add('active')
})

modifica.pause.addEventListener('click', () => {
   modifica.pause.classList.remove('active')

   modifica.play.classList.add('active')
})