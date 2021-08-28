const mostra = {
   titulo: document.querySelector('.life'),

   inicio: document.querySelector('.start')
}

var tempo = 0

setInterval(() => {
   const imagemDeFundo = document.querySelector('.background')
   tempo++

   if (tempo == 1) {
      imagemDeFundo.style.filter = 'blur(2px)'
   }
   
   else {
      clearInterval(tempo)
   }
}, 2100)