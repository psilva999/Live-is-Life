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
   restart:document.querySelector('.restart'),

   voltaQuinzeSeg: document.querySelector('.volta-15-segundos'),
   avancaQuinzeSeg: document.querySelector('.avanca-15-segundos'),

   voltaMusica: document.querySelector('.skip-back'),
   trocaMusica: document.querySelector('.skip-forward'),
   desabilitaTrocaMusica: document.querySelector('.skip-forward-off'),

   ligaDesligaLegenda: document.querySelector('.subtitle'),
   subtitleMusica: document.querySelector('.legenda-musica')
}

clicaNoBotao.inicial.addEventListener('click', () => {
   altera.cabecalho.classList.remove('active')
   altera.optarMusica.classList.toggle('active')
})

clicaNoBotao.recusaSom.addEventListener('click', () => {
   altera.optarMusica.classList.remove('active')
   altera.jornada.classList.add('active')
})

function retiraActivePlayPause() {
   mexeNo.play.classList.remove('active')

   mexeNo.pause.classList.remove('active')
}

function pausePlay() {
   if (mexeNo.pause.classList.contains('active')) {
      mexeNo.audio.play()
   }

   else {
      mexeNo.audio.pause()
   }
}

function tempoVideo() {
   var tempoDoAudioEm = {
      minutos:parseInt(mexeNo.audio.duration / 60, 10),
      segundos:((mexeNo.audio.duration % 60) - 1).toFixed(0)
   }

   mexeNo.tempoTotalDaMusica.innerHTML = `0${tempoDoAudioEm.minutos}:${tempoDoAudioEm.segundos}`
}

function proximoSom() {
   mexeNo.trocaMusica.style.display = 'none'
   mexeNo.desabilitaTrocaMusica.style.display = 'block'

   mexeNo.audio.src = 'midia/audios/of-monsters-and-men-dirty-paws.mp3'
   altera.nomeMusica.innerHTML = "<a href='https://www.youtube.com/watch?v=OgO2U4quFDk' target='_blank'>Of Monsters and Men – Dirty Paws<img src='midia/svg/external-link.svg'></a>"

   mexeNo.tempoTotalDaMusica.innerHTML = `04:20`
   noFinal()

   if (mexeNo.play.classList.contains('active')) {
      mexeNo.play.classList.remove('active')

      mexeNo.pause.classList.add('active')
      mexeNo.audio.play()
   }

   else {
      mexeNo.audio.play()
   }
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

   if (aparece.mudaMinutos == 4 && aparece.mudaSegundos == 25) {
      proximoSom()
   }  

   retiraPlay()
   function retiraPlay() {
      if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 20 && mexeNo.restart.classList.contains('active')) {
         retiraActivePlayPause()
      }
   }

   noFinal()
}

function noFinal() {
   mexeNo.audio.onended = function restartFinalMusica() {
      retiraActivePlayPause()
      mexeNo.restart.classList.add('active')

      if (mexeNo.audio.currentTime == 0) {
         mexeNo.pause.classList.add('active')

         mexeNo.restart.classList.remove('active')
      }
   }
}

function pulaQuinzePraTras() {
   mexeNo.audio.currentTime += Number(this.dataset.skip)

   if (mexeNo.restart.classList.contains('active')) {
      mexeNo.restart.classList.remove('active')

      mexeNo.pause.classList.add('active')
      mexeNo.audio.play()
   }
}
mexeNo.voltaQuinzeSeg.addEventListener('click', pulaQuinzePraTras)

function pulaQuinzePraFrente() { mexeNo.audio.currentTime += Number(this.dataset.skip) }
mexeNo.avancaQuinzeSeg.addEventListener('click', pulaQuinzePraFrente, noFinal)

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

mexeNo.play.addEventListener('click', () => {
   mexeNo.play.classList.remove('active')
   mexeNo.audio.play()
   mexeNo.pause.classList.add('active')

   noFinal()
})

mexeNo.pause.addEventListener('click', () => {
   mexeNo.pause.classList.remove('active')

   mexeNo.audio.pause()
   mexeNo.play.classList.add('active')
})

mexeNo.restart.addEventListener('click', () => {
   mexeNo.restart.classList.remove('active')
   mexeNo.pause.classList.add('active')

   pausePlay()
   restartFinalMusica()
})

mexeNo.audio.addEventListener('timeupdate', mudaMinutosSegundos)
mexeNo.trocaMusica.addEventListener('click', proximoSom)

mexeNo.voltaMusica.addEventListener('click', () => {
   if (mexeNo.audio.currentTime >= 5) {
      mexeNo.audio.currentTime = 0

      if (mexeNo.restart.classList.contains('active')) {
         mexeNo.restart.classList.remove('active')

         mexeNo.pause.classList.add('active')
         mexeNo.audio.play()
      }
   }

   else {
      mexeNo.audio.src = 'midia/audios/stay-alive-jose-gonzalez.mp3'
      altera.nomeMusica.innerHTML = "<a href='https://www.youtube.com/watch?v=_HWRGKfSq3A' target='_blank'>Stay Alive - José González <img src='midia/svg/external-link.svg'></a>"

      mexeNo.desabilitaTrocaMusica.style.display = 'none'
      mexeNo.trocaMusica.style.display = 'block'
      mexeNo.tempoTotalDaMusica.innerHTML = `04:24`

      pausePlay()
      restartFinalMusica()
   }
})

mexeNo.ligaDesligaLegenda.addEventListener('click', () => {
   if (mexeNo.ligaDesligaLegenda.classList.contains('active')) {
      mexeNo.ligaDesligaLegenda.classList.remove('active')

      mexeNo.subtitleMusica.style.display = 'none'
   }

   else { 
      mexeNo.ligaDesligaLegenda.classList.add('active') 

      mexeNo.subtitleMusica.style.display = 'block'
   }
})