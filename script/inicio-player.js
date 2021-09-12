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
   restart: document.querySelector('.restart'),

   voltaQuinzeSeg: document.querySelector('.volta-15-segundos'),
   avancaQuinzeSeg: document.querySelector('.avanca-15-segundos'),

   voltaMusica: document.querySelector('.skip-back'),
   trocaMusica: document.querySelector('.skip-forward'),
   desabilitaTrocaMusica: document.querySelector('.skip-forward-off'),

   containerSound: document.querySelector('#container-som'),
   som: document.querySelector('.sound'),
   alteraSom: document.querySelector('#altera-som'),
   somDesligado: document.querySelector('.muted'),

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

   mexeNo.subtitleMusica.classList.remove('stay-alive')
   mexeNo.subtitleMusica.classList.add('dirty-paws')
   mexeNo.audio.src = 'midia/audios/of-monsters-and-men-dirty-paws.mp3'

   altera.nomeMusica.href = 'https://www.youtube.com/watch?v=OgO2U4quFDk'
   altera.nomeMusica.innerHTML = "<ul class='dirty-paws'><li>Of</li><li>Monsters</li><li>and</li><li>Men -</li><li> Dirty</li><li>Paws</li><img src='midia/svg/external-link.svg'></ul>"

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

   altera.nomeMusica.href = 'https://www.youtube.com/watch?v=_HWRGKfSq3A'
   altera.nomeMusica.innerHTML = "<ul class='stay-alive'><li>Stay</li><li>Alive -</li><li> José</li><li>González</li><img src='midia/svg/external-link.svg'></ul>"

   altera.tempoDaMusica.classList.add('active')
   altera.player.classList.add('active')

   tempoVideo()
   mexeNo.audio.play()
   mexeNo.audio.volume = 0.4

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
      if (mexeNo.subtitleMusica.classList.contains('dirty-paws')) {
         mexeNo.subtitleMusica.classList.remove('dirty-paws')

         mexeNo.subtitleMusica.classList.add('stay-alive')
      }
      mexeNo.audio.src = 'midia/audios/stay-alive-jose-gonzalez.mp3'

      altera.nomeMusica.href = 'https://www.youtube.com/watch?v=_HWRGKfSq3A'
      altera.nomeMusica.innerHTML = "<ul class='stay-alive'><li>Stay</li><li>Alive -</li><li> José</li><li>González</li><img src='midia/svg/external-link.svg'></ul>"

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

mexeNo.containerSound.addEventListener('click', () => {
   if (mexeNo.alteraSom.classList.contains('active')) {
      mexeNo.alteraSom.classList.remove('active')
   }

   else {
      mexeNo.alteraSom.classList.add('active')
   }
})

function setVolume() {
   mexeNo.audio.volume = mexeNo.alteraSom.value / 10000
   
   if (mexeNo.alteraSom.value == 0) {
      mexeNo.som.classList.remove('active')
      mexeNo.somDesligado.classList.add('active')
   }

   else if (mexeNo.alteraSom.value >= 1) {
      mexeNo.somDesligado.classList.remove('active')
      mexeNo.som.classList.add('active')
   }
}

mexeNo.alteraSom.addEventListener('mousemove', setVolume)

mexeNo.som.addEventListener('click', () => {
   mexeNo.audio.muted = true
   mexeNo.alteraSom.value = 0

   mexeNo.som.classList.remove('active')
   mexeNo.somDesligado.classList.add('active')
   mexeNo.alteraSom.classList.add('active')
})

mexeNo.somDesligado.addEventListener('click', () => {
   mexeNo.audio.muted = false
   mexeNo.audio.volume = 0.4
   mexeNo.alteraSom.value = 4000

   mexeNo.somDesligado.classList.remove('active')
   mexeNo.som.classList.add('active')
   mexeNo.alteraSom.classList.add('active')
})

mexeNo.containerSound.addEventListener('mouseover', () => {
   mexeNo.alteraSom.classList.add('active')
})

mexeNo.containerSound.addEventListener('mouseout', () => {
   mexeNo.alteraSom.classList.remove('active')
})

mexeNo.alteraSom.addEventListener('mouseover', () => {
   mexeNo.alteraSom.classList.add('active')
   mexeNo.audio.muted = false
})

mexeNo.alteraSom.addEventListener('mouseout', () => {
   mexeNo.alteraSom.classList.remove('active')
})

function mudaMinutosSegundos() {
   var aparece = {
      momentoDaMusica: document.querySelector('.momento-da-musica'),
      mudaMinutos: Math.floor(mexeNo.audio.currentTime / 60, 10),
      mudaSegundos: Math.floor(mexeNo.audio.currentTime % 60)
   }

   var legendaStayAlive = document.querySelector('.legenda-musica')

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

   if (legendaStayAlive.classList.contains('stay-alive')) {
      if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos < 13) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 13 && aparece.mudaSegundos <= 16) {
         legendaStayAlive.innerHTML = 'Há um ritmo de pressa nos dias de hoje'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos > 16 && aparece.mudaSegundos < 19) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 19 && aparece.mudaSegundos <= 22) {
         legendaStayAlive.innerHTML = 'Onde as luzes não se movem e as cores não desaparecem'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 23 && aparece.mudaSegundos <= 25) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 26 && aparece.mudaSegundos <= 28) {
         legendaStayAlive.innerHTML = 'Te deixa vazio, com nada além de sonhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 29 && aparece.mudaSegundos <= 31) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 32 && aparece.mudaSegundos <= 35) {
         legendaStayAlive.innerHTML = 'Em um mundo que se tornou superficial. Em um mundo que se tornou pobre'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 38) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 39 && aparece.mudaSegundos <= 41) {
         legendaStayAlive.innerHTML = 'Às vezes há coisas que um homem não pode saber'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 42 && aparece.mudaSegundos <= 44) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 45 && aparece.mudaSegundos <= 48) {
         legendaStayAlive.innerHTML = 'Engrenagens não ligam e as folhas não crescem'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 49 && aparece.mudaSegundos <= 51) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 52 && aparece.mudaSegundos <= 54) {
         legendaStayAlive.innerHTML = 'Não há lugar para correr e não há gasolina'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 55 && aparece.mudaSegundos <= 57) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 58 || aparece.mudaMinutos == 1 && aparece.mudaSegundos <= 1) {
         legendaStayAlive.innerHTML = 'O motor não liga e o trem não parte'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 2 && aparece.mudaSegundos <= 4) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 5 && aparece.mudaSegundos <= 7) {
         legendaStayAlive.innerHTML = 'Motores não ligam e o trem não parte'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 8 && aparece.mudaSegundos <= 10) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 11 && aparece.mudaSegundos <= 13) {
         legendaStayAlive.innerHTML = 'Eu vou ficar com você esta noite'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 14 && aparece.mudaSegundos <= 17) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 18 && aparece.mudaSegundos <= 20) {
         legendaStayAlive.innerHTML = 'Te abraçar até a luz da manhã'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 21 && aparece.mudaSegundos <= 23) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 24 && aparece.mudaSegundos <= 27) {
         legendaStayAlive.innerHTML = 'De manhã assistir um novo dia nascer'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 28 && aparece.mudaSegundos <= 30) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 31 && aparece.mudaSegundos <= 33) {
         legendaStayAlive.innerHTML = 'Nós vamos fazer o que for apenas para permanecermos vivos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 34 && aparece.mudaSegundos <= 36) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 37 && aparece.mudaSegundos <= 39) {
         legendaStayAlive.innerHTML = 'Nós vamos fazer o que for apenas para permanecermos vivos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 40 && aparece.mudaSegundos <= 43) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 44 && aparece.mudaSegundos <= 46) {
         legendaStayAlive.innerHTML = 'Bem o que eu sinto é a maneira que eu escrevo'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 48) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 49 && aparece.mudaSegundos <= 51) {
         legendaStayAlive.innerHTML = 'Não é como os pensamentos do homem que mente'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 52 && aparece.mudaSegundos <= 54) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 55 && aparece.mudaSegundos <= 57) {
         legendaStayAlive.innerHTML = 'Há uma verdade e ela está do nosso lado'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 58 && aparece.mudaSegundos <= 59) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 00 && aparece.mudaSegundos <= 2) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 3 && aparece.mudaSegundos <= 5) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 6 && aparece.mudaSegundos <= 8) {
         legendaStayAlive.innerHTML = 'Olhe para o sol conforme os novos dias amanhecem'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 9 && aparece.mudaSegundos <= 10) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 11 && aparece.mudaSegundos <= 13) {
         legendaStayAlive.innerHTML = 'Eu vou esperar por você hoje à noite'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 14 && aparece.mudaSegundos <= 16) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 17 && aparece.mudaSegundos <= 19) {
         legendaStayAlive.innerHTML = 'Você está aqui para sempre e você está ao meu lado'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 21) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 22 && aparece.mudaSegundos <= 24) {
         legendaStayAlive.innerHTML = 'Eu estive esperando por toda minha vida'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 25 && aparece.mudaSegundos <= 27) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 28 && aparece.mudaSegundos <= 30) {
         legendaStayAlive.innerHTML = 'Para sentir o seu coração como se estivesse marcando o tempo'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 31 && aparece.mudaSegundos <= 32) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 33 && aparece.mudaSegundos <= 36) {
         legendaStayAlive.innerHTML = 'Nós vamos fazer o que for apenas para permanecermos vivos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 54) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 55 && aparece.mudaSegundos <= 57) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 58 && aparece.mudaSegundos <= 59 || aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 00 && aparece.mudaSegundos <= 01) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 2 && aparece.mudaSegundos <= 5) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 6 && aparece.mudaSegundos <= 8) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 9 && aparece.mudaSegundos <= 11) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 12 && aparece.mudaSegundos <= 16) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 17 && aparece.mudaSegundos <= 19) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 30) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 31 && aparece.mudaSegundos <= 35) {
         legendaStayAlive.innerHTML = 'Olhe para o sol conforme os dias nascem'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 40) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 41 && aparece.mudaSegundos <= 43) {
         legendaStayAlive.innerHTML = 'Há um ritmo de pressa nos dias de hoje'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 44 && aparece.mudaSegundos <= 46) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 49) {
         legendaStayAlive.innerHTML = 'Onde as luzes não se movem e as cores não desaparecem'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 50 && aparece.mudaSegundos <= 53) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 54 && aparece.mudaSegundos <= 56) {
         legendaStayAlive.innerHTML = 'Te deixa vazio, com nada além de sonhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 57 && aparece.mudaSegundos <= 59) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 2) {
         legendaStayAlive.innerHTML = 'Em um mundo que se tornou superficial. Em um mundo que se tornou pobre.'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 3 && aparece.mudaSegundos <= 5) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 6 && aparece.mudaSegundos <= 9) {
         legendaStayAlive.innerHTML = 'Mas há uma verdade e ela está do nosso lado'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 10 && aparece.mudaSegundos <= 12) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 13 && aparece.mudaSegundos <= 15) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando abra seus olhos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 16 && aparece.mudaSegundos <= 18) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 19 && aparece.mudaSegundos <= 23) {
         legendaStayAlive.innerHTML = 'Olhe para o sol conforme um novo dia nasce'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 24) {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }
   }

   var legendaDirtyPaws = document.querySelector('.legenda-musica')

   if (legendaDirtyPaws.classList.contains('dirty-paws')) {
      if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 16) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 17 && aparece.mudaSegundos <= 19) {
         legendaDirtyPaws.innerHTML = 'Pulando para cima e para baixo'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }
      
      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 21) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 22 && aparece.mudaSegundos <= 24) {
         legendaDirtyPaws.innerHTML = 'Minha cabeça é um animal'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 25) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 26 && aparece.mudaSegundos <= 28) {
         legendaDirtyPaws.innerHTML = 'E uma vez havia um animal'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 29) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 30 && aparece.mudaSegundos <= 32) {
         legendaDirtyPaws.innerHTML = 'Ele tinha um filho que cortava a grama'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 33 && aparece.mudaSegundos <= 34) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 35 && aparece.mudaSegundos <= 37) {
         legendaDirtyPaws.innerHTML = 'O filho era um garoto legal'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 38) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 39 && aparece.mudaSegundos <= 41) {
         legendaDirtyPaws.innerHTML = 'Eles tinham uma libélula de estimação'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 42) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 43 && aparece.mudaSegundos <= 45) {
         legendaDirtyPaws.innerHTML = 'A libélula um dia fugiu'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 46) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 50) {
         legendaDirtyPaws.innerHTML = 'Mas voltou com uma história para contar'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 51 || aparece.mudaMinutos == 1 && aparece.mudaSegundos <= 11) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 12 && aparece.mudaSegundos <= 14) {
         legendaDirtyPaws.innerHTML = 'Suas patas sujas e casaco peludo'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 15 && aparece.mudaSegundos <= 17) {
         legendaDirtyPaws.innerHTML = 'Ela fugiu para a encosta da floresta'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 18 && aparece.mudaSegundos <= 19) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 22) {
         legendaDirtyPaws.innerHTML = 'A floresta de árvores falantes'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos == 23) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 24 && aparece.mudaSegundos <= 26) {
         legendaDirtyPaws.innerHTML = 'Elas cantavam sobre os pássaros e as abelhas'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 27 && aparece.mudaSegundos <= 28) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 29 && aparece.mudaSegundos <= 31) {
         legendaDirtyPaws.innerHTML = 'As abelhas tinham declarado uma guerra'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 32 && aparece.mudaSegundos <= 35) {
         legendaDirtyPaws.innerHTML = 'O céu não era grande o suficiente para todos eles'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos == 36) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 37 && aparece.mudaSegundos <= 39) {
         legendaDirtyPaws.innerHTML = 'Os pássaros receberam ajuda debaixo'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 39 && aparece.mudaSegundos <= 40) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 41 && aparece.mudaSegundos <= 44) {
         legendaDirtyPaws.innerHTML = 'De patas sujas e das criaturas da neve'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 45 && aparece.mudaSegundos <= 59 || aparece.mudaSegundos == 2 && aparece.mudaSegundos <= 23) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 23 && aparece.mudaSegundos <= 25) {
         legendaDirtyPaws.innerHTML = 'E por um tempo as coisas ficaram frias'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos == 26) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 27 && aparece.mudaSegundos <= 29) {
         legendaDirtyPaws.innerHTML = 'Elas se esconderam, assustadas, em seus buracos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 30 && aparece.mudaSegundos <= 31) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 32 && aparece.mudaSegundos <= 33) {
         legendaDirtyPaws.innerHTML = 'A floresta que um dia era verde'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 34 && aparece.mudaSegundos <= 35) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 38) {
         legendaDirtyPaws.innerHTML = 'Foi pintada de preto por aquelas máquinas assassinas'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos == 39) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 40 && aparece.mudaSegundos <= 42) {
         legendaDirtyPaws.innerHTML = 'Mas ela e seus amigos peludos'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos == 43) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 44 && aparece.mudaSegundos <= 46) {
         legendaDirtyPaws.innerHTML = 'Derrubaram a abelha rainha e os seus homens'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 48) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 49 && aparece.mudaSegundos <= 51) {
         legendaDirtyPaws.innerHTML = 'E é assim que a história acaba'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 52 && aparece.mudaSegundos <= 55) {
         legendaDirtyPaws.innerHTML = 'A história da fera com aquelas quatro patas sujas'

         legendaStayAlive.style.backgroundColor = '#772f1a' 
         legendaStayAlive.style.backgroundImage = 'linear-gradient(315deg, #c98d7a 0%, #f2a65a 74%)'
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 56 && aparece.mudaSegundos <= 59 || aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 59 || aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 19) {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }
   }
}