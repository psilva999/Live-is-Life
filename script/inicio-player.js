var altera = {
   cabecalho: document.querySelector('.convite'),
   optarMusica: document.querySelector('#optar-musica'),

   nomeMusica: document.querySelector('.nome-musica'),
   tempoDaMusica: document.querySelector('.tempo-musica'),
   jornada: document.querySelector('#jornada'),

   player: document.querySelector('#player')
}

var clicaNoBotao = {
   inicial: document.querySelector('#inicial'),

   aceitaSom: document.querySelector('.sim'),
   recusaSom: document.querySelector('.no')
}

var mexeNo = {
   audio: document.querySelector('#audio'),
   tempoTotalDaMusica: document.querySelector('.total'),

   play: document.querySelector('.play'),
   pause: document.querySelector('.pause'),

   voltaQuinzeSeg: document.querySelector('.volta-15-segundos'),
   avancaQuinzeSeg: document.querySelector('.avanca-15-segundos'),

   voltaMusica: document.querySelector('.skip-back'),
   trocaMusica: document.querySelector('.skip-forward')
}

clicaNoBotao.inicial.addEventListener('click', () => {
   altera.cabecalho.classList.remove('active')

   altera.optarMusica.classList.toggle('active')
})

clicaNoBotao.recusaSom.addEventListener('click', () => {
   altera.optarMusica.classList.remove('active')

   altera.jornada.classList.add('active')
})

function tempoVideo() {
   var tempoDoAudioEm = {
      minutos: parseInt(mexeNo.audio.duration / 60, 10),
      segundos: ((mexeNo.audio.duration % 60) - 1).toFixed(0)
   }

   mexeNo.tempoTotalDaMusica.innerHTML = `0${tempoDoAudioEm.minutos}:${tempoDoAudioEm.segundos}`
}

function mudaMinutosSegundos() {
   var aparece = {
      momentoDaMusica: document.querySelector('.momento-da-musica'),
      mudaMinutos: Math.floor(mexeNo.audio.currentTime / 60, 10),
      mudaSegundos: Math.floor(mexeNo.audio.currentTime % 60)
   }

   if (aparece.mudaSegundos >= 0 && aparece.mudaSegundos < 10) {
      aparece.momentoDaMusica.innerHTML = `0${aparece.mudaMinutos}:0${aparece.mudaSegundos}`
   }

   else {
      aparece.momentoDaMusica.innerHTML = `0${aparece.mudaMinutos}:${aparece.mudaSegundos}`
   }
}

clicaNoBotao.aceitaSom.addEventListener('click', () => {
   altera.optarMusica.classList.toggle('active')
   altera.nomeMusica.classList.add('active')
   altera.nomeMusica.innerHTML = "<a href='https://www.youtube.com/watch?v=_HWRGKfSq3A' target='_blank'>Stay Alive - José González <img src='midia/svg/external-link.svg'></a>"

   altera.tempoDaMusica.classList.add('active')
   altera.player.classList.add('active')

   tempoVideo()
   mexeNo.audio.play()

   altera.jornada.classList.toggle('active')
})

mexeNo.audio.addEventListener('timeupdate', mudaMinutosSegundos)

mexeNo.play.addEventListener('click', () => {
   mexeNo.play.classList.remove('active')

   mexeNo.audio.play()
   mexeNo.pause.classList.add('active')
})

mexeNo.pause.addEventListener('click', () => {
   mexeNo.pause.classList.remove('active')

   mexeNo.audio.pause()
   mexeNo.play.classList.add('active')
})

function skip() { mexeNo.audio.currentTime += Number(this.dataset.skip) }
mexeNo.voltaQuinzeSeg.addEventListener('click', skip)
mexeNo.avancaQuinzeSeg.addEventListener('click', skip)

mexeNo.trocaMusica.addEventListener('click', () => {   
   mexeNo.voltaMusica.style.opacity = '1'
   mexeNo.voltaMusica.style.cursor = 'pointer'
   
   mexeNo.audio.src = 'midia/audios/of-monsters-and-men-dirty-paws.mp3'
   altera.nomeMusica.innerHTML = "<a href='https://www.youtube.com/watch?v=OgO2U4quFDk' target='_blank'>Of Monsters and Men – Dirty Paws<img src='midia/svg/external-link.svg'></a>"

   mexeNo.trocaMusica.style.cursor = 'auto'
   mexeNo.trocaMusica.style.opacity = '.5'

   if (mexeNo.pause.classList.contains('active')) {
      mexeNo.audio.play()
   }

   else {
      mexeNo.audio.pause()
   }

   mexeNo.tempoTotalDaMusica.innerHTML = `04:20`
})

mexeNo.voltaMusica.addEventListener('click', () => {
   mexeNo.audio.src = 'midia/audios/stay-alive-jose-gonzalez.mp3'

   altera.nomeMusica.innerHTML = "<a href='https://www.youtube.com/watch?v=_HWRGKfSq3A' target='_blank'>Stay Alive - José González <img src='midia/svg/external-link.svg'></a>"

   if (mexeNo.pause.classList.contains('active')) {
      mexeNo.audio.play()
   }

   else {
      mexeNo.audio.pause()
   }

   mexeNo.voltaMusica.style.cursor = 'auto'
   mexeNo.voltaMusica.style.opacity = '.5'

   mexeNo.trocaMusica.style.cursor = 'pointer'
   mexeNo.trocaMusica.style.opacity = '1'

   mexeNo.tempoTotalDaMusica.innerHTML = `04:25`
})