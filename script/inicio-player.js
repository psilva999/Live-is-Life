let altera = {
   imagemBackground: document.querySelector('.background-image'),
   optarMusica: document.querySelector('#optar-musica'),

   nomeMusica: document.querySelector('.nome-musica'),
   jornada: document.querySelector('#jornada'),

   audio: document.querySelector('#audio'),
   tempoTotalDaMusica: document.querySelector('.total'),

   play: document.querySelector('.play'),
   pause: document.querySelector('.pause'),
   restart: document.querySelector('.restart'),

   trocaMusica: document.querySelector('.skip-forward'),
   desabilitaTrocaMusica: document.querySelector('.skip-forward-off'),

   containerSound: document.querySelector('#container-som'),
   som: document.querySelector('.sound'),
   alteraSom: document.querySelector('#altera-som'),
   somDesligado: document.querySelector('.muted'),

   ligaDesligaLegenda: document.querySelector('.subtitle'),
   subtitleMusica: document.querySelector('.legenda-musica')
}

document.querySelector('#inicial').onclick = () => {
   document.querySelector('.convite').classList.remove('active')
   altera.optarMusica.classList.toggle('active')
}

document.querySelector('.no').onclick = () => {
   altera.optarMusica.classList.remove('active')
   altera.jornada.classList.add('active')

   altera.imagemBackground.style.animation = 'borradoDasFases 3s'
   altera.imagemBackground.style.animationFillMode = 'forwards'
}

function retiraActivePlayPause() {
   altera.play.classList.remove('active')

   altera.pause.classList.remove('active')
}

function pausePlay() {
   if (altera.pause.classList.contains('active')) {
      altera.audio.play()
   }

   else {
      altera.audio.pause()
   }
}

function tempoVideo() {
   var tempoDoAudioEm = {
      minutos:parseInt(altera.audio.duration / 60, 10),
      segundos:((altera.audio.duration % 60) - 1).toFixed(0)
   }

   altera.tempoTotalDaMusica.innerHTML = `0${tempoDoAudioEm.minutos}:${tempoDoAudioEm.segundos}`
}

function proximoSom() {
   altera.trocaMusica.style.display = 'none'
   altera.desabilitaTrocaMusica.style.display = 'block'

   altera.subtitleMusica.classList.remove('stay-alive')
   altera.subtitleMusica.classList.add('dirty-paws')
   altera.audio.src = 'midia/audios/of-monsters-and-men-dirty-paws.mp3'

   altera.nomeMusica.href = 'https://www.youtube.com/watch?v=OgO2U4quFDk'
   altera.nomeMusica.innerHTML = "<ul class='dirty-paws'><li>Of</li><li>Monsters</li><li>and</li><li>Men -</li><li> Dirty</li><li>Paws</li><img src='midia/svg/external-link.svg'></ul>"

   altera.tempoTotalDaMusica.innerHTML = `04:20`
   noFinal()

   if (altera.play.classList.contains('active')) {
      altera.play.classList.remove('active')

      altera.pause.classList.add('active')
      altera.audio.play()
   }

   else {
      altera.audio.play()
   }
}

function noFinal() {
   altera.audio.onended = function restartFinalMusica() {
      retiraActivePlayPause()
      altera.restart.classList.add('active')

      if (altera.audio.currentTime == 0) {
         altera.pause.classList.add('active')

         altera.restart.classList.remove('active')
      }
   }
}

function pulaQuinzePraTras() {
   altera.audio.currentTime += Number(this.dataset.skip)

   if (altera.restart.classList.contains('active')) {
      altera.restart.classList.remove('active')

      altera.pause.classList.add('active')
      altera.audio.play()
   }
}
document.querySelector('.volta-15-segundos').onclick = pulaQuinzePraTras

function pulaQuinzePraFrente() { altera.audio.currentTime += Number(this.dataset.skip) }
document.querySelector('.avanca-15-segundos').onclick = pulaQuinzePraFrente, noFinal

document.querySelector('.sim').onclick = () => {
   altera.imagemBackground.style.animation = 'borradoDasFases 3s'
   altera.imagemBackground.style.animationFillMode = 'forwards'

   altera.optarMusica.classList.toggle('active')
   altera.nomeMusica.classList.add('active')

   altera.nomeMusica.href = 'https://www.youtube.com/watch?v=_HWRGKfSq3A'
   altera.nomeMusica.innerHTML = "<ul class='stay-alive'><li>Stay</li><li>Alive -</li><li> José</li><li>González</li><img src='midia/svg/external-link.svg'></ul>"

   document.querySelector('.tempo-musica').classList.add('active')
   document.querySelector('#player').classList.add('active')

   tempoVideo()
   altera.audio.play()
   altera.audio.volume = 0.4

   altera.jornada.classList.toggle('active')
}

altera.play.onclick = () => {
   altera.play.classList.remove('active')
   altera.audio.play()
   altera.pause.classList.add('active')

   noFinal()
}

altera.pause.onclick = () => {
   altera.pause.classList.remove('active')

   altera.audio.pause()
   altera.play.classList.add('active')
}

altera.restart.onclick = () => {
   altera.restart.classList.remove('active')
   altera.pause.classList.add('active')

   pausePlay()
   restartFinalMusica()
}

altera.audio.ontimeupdate = mudaMinutosSegundos
altera.trocaMusica.onclick = proximoSom

document.querySelector('.skip-back').onclick = () => {
   if (altera.audio.currentTime >= 5) {
      altera.audio.currentTime = 0

      if (altera.restart.classList.contains('active')) {
         altera.restart.classList.remove('active')

         altera.pause.classList.add('active')
         altera.audio.play()
      }
   }

   else {
      if (altera.subtitleMusica.classList.contains('dirty-paws')) {
         altera.subtitleMusica.classList.remove('dirty-paws')

         altera.subtitleMusica.classList.add('stay-alive')
      }
      altera.audio.src = 'midia/audios/stay-alive-jose-gonzalez.mp3'

      altera.nomeMusica.href = 'https://www.youtube.com/watch?v=_HWRGKfSq3A'
      altera.nomeMusica.innerHTML = "<ul class='stay-alive'><li>Stay</li><li>Alive -</li><li> José</li><li>González</li><img src='midia/svg/external-link.svg'></ul>"

      altera.desabilitaTrocaMusica.style.display = 'none'
      altera.trocaMusica.style.display = 'block'
      altera.tempoTotalDaMusica.innerHTML = `04:24`

      pausePlay()
      restartFinalMusica()
   }
}

altera.ligaDesligaLegenda.onclick = () => {
   if (altera.ligaDesligaLegenda.classList.contains('active')) {
      altera.ligaDesligaLegenda.classList.remove('active')

      altera.subtitleMusica.style.display = 'none'
   }

   else { 
      altera.ligaDesligaLegenda.classList.add('active') 

      altera.subtitleMusica.style.display = 'block'
   }
}

altera.containerSound.onclick = () => {
   if (altera.alteraSom.classList.contains('active')) {
      altera.alteraSom.classList.remove('active')
   }

   else {
      altera.alteraSom.classList.add('active')
   }
}

function setVolume() {
   altera.audio.volume = altera.alteraSom.value / 10000
   
   if (altera.alteraSom.value == 0) {
      altera.som.classList.remove('active')
      altera.somDesligado.classList.add('active')
   }

   else if (altera.alteraSom.value >= 1) {
      altera.somDesligado.classList.remove('active')
      altera.som.classList.add('active')
   }
}

altera.alteraSom.onmousemove = setVolume

altera.som.onclick = () => {
   altera.audio.muted = true
   altera.alteraSom.value = 0

   altera.som.classList.remove('active')
   altera.somDesligado.classList.add('active')
   altera.alteraSom.classList.add('active')
}

altera.somDesligado.onclick = () => {
   altera.audio.muted = false
   altera.audio.volume = 0.4
   altera.alteraSom.value = 4000

   altera.somDesligado.classList.remove('active')
   altera.som.classList.add('active')
   altera.alteraSom.classList.add('active')
}

altera.containerSound.onmouseover = () => {
   altera.alteraSom.classList.add('active')
}

altera.containerSound.onmouseout = () => {
   altera.alteraSom.classList.remove('active')
}

altera.alteraSom.onmouseover = () => {
   altera.alteraSom.classList.add('active')
   altera.audio.muted = false
}

altera.alteraSom.onmouseout = () => {
   altera.alteraSom.classList.remove('active')
}

function mudaMinutosSegundos() {
   var aparece = {
      momentoDaMusica: document.querySelector('.momento-da-musica'),
      mudaMinutos: Math.floor(altera.audio.currentTime / 60, 10),
      mudaSegundos: Math.floor(altera.audio.currentTime % 60)
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
      if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 20 && altera.restart.classList.contains('active')) {
         retiraActivePlayPause()
      }
   }
   noFinal()

   if (legendaStayAlive.classList.contains('stay-alive')) {
      if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos < 13) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 13 && aparece.mudaSegundos <= 16) {
         legendaStayAlive.innerHTML = 'Há um ritmo de pressa nos dias de hoje'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos > 16 && aparece.mudaSegundos < 19) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 19 && aparece.mudaSegundos <= 22) {
         legendaStayAlive.innerHTML = 'Onde as luzes não se movem e as cores não desaparecem'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 23 && aparece.mudaSegundos <= 25) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 26 && aparece.mudaSegundos <= 28) {
         legendaStayAlive.innerHTML = 'Te deixa vazio, com nada além de sonhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 29 && aparece.mudaSegundos <= 31) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 32 && aparece.mudaSegundos <= 35) {
         legendaStayAlive.innerHTML = 'Em um mundo que se tornou superficial. Em um mundo que se tornou pobre'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 38) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 39 && aparece.mudaSegundos <= 41) {
         legendaStayAlive.innerHTML = 'Às vezes há coisas que um homem não pode saber'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 42 && aparece.mudaSegundos <= 44) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 45 && aparece.mudaSegundos <= 48) {
         legendaStayAlive.innerHTML = 'Engrenagens não ligam e as folhas não crescem'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 49 && aparece.mudaSegundos <= 51) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 52 && aparece.mudaSegundos <= 54) {
         legendaStayAlive.innerHTML = 'Não há lugar para correr e não há gasolina'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 55 && aparece.mudaSegundos <= 57) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 58 || aparece.mudaMinutos == 1 && aparece.mudaSegundos <= 1) {
         legendaStayAlive.innerHTML = 'O motor não liga e o trem não parte'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 2 && aparece.mudaSegundos <= 4) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 5 && aparece.mudaSegundos <= 7) {
         legendaStayAlive.innerHTML = 'Motores não ligam e o trem não parte'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 8 && aparece.mudaSegundos <= 10) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 11 && aparece.mudaSegundos <= 13) {
         legendaStayAlive.innerHTML = 'Eu vou ficar com você esta noite'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 14 && aparece.mudaSegundos <= 17) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 18 && aparece.mudaSegundos <= 20) {
         legendaStayAlive.innerHTML = 'Te abraçar até a luz da manhã'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 21 && aparece.mudaSegundos <= 23) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 24 && aparece.mudaSegundos <= 27) {
         legendaStayAlive.innerHTML = 'De manhã assistir um novo dia nascer'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 28 && aparece.mudaSegundos <= 30) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 31 && aparece.mudaSegundos <= 33) {
         legendaStayAlive.innerHTML = 'Nós vamos fazer o que for apenas para permanecermos vivos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 34 && aparece.mudaSegundos <= 36) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 37 && aparece.mudaSegundos <= 39) {
         legendaStayAlive.innerHTML = 'Nós vamos fazer o que for apenas para permanecermos vivos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 40 && aparece.mudaSegundos <= 43) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 44 && aparece.mudaSegundos <= 46) {
         legendaStayAlive.innerHTML = 'Bem o que eu sinto é a maneira que eu escrevo'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 48) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 49 && aparece.mudaSegundos <= 51) {
         legendaStayAlive.innerHTML = 'Não é como os pensamentos do homem que mente'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 52 && aparece.mudaSegundos <= 54) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 55 && aparece.mudaSegundos <= 57) {
         legendaStayAlive.innerHTML = 'Há uma verdade e ela está do nosso lado'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 58 && aparece.mudaSegundos <= 59) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 00 && aparece.mudaSegundos <= 2) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 3 && aparece.mudaSegundos <= 5) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 6 && aparece.mudaSegundos <= 8) {
         legendaStayAlive.innerHTML = 'Olhe para o sol conforme os novos dias amanhecem'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 9 && aparece.mudaSegundos <= 10) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 11 && aparece.mudaSegundos <= 13) {
         legendaStayAlive.innerHTML = 'Eu vou esperar por você hoje à noite'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 14 && aparece.mudaSegundos <= 16) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 17 && aparece.mudaSegundos <= 19) {
         legendaStayAlive.innerHTML = 'Você está aqui para sempre e você está ao meu lado'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 21) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 22 && aparece.mudaSegundos <= 24) {
         legendaStayAlive.innerHTML = 'Eu estive esperando por toda minha vida'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 25 && aparece.mudaSegundos <= 27) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 28 && aparece.mudaSegundos <= 30) {
         legendaStayAlive.innerHTML = 'Para sentir o seu coração como se estivesse marcando o tempo'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 31 && aparece.mudaSegundos <= 32) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 33 && aparece.mudaSegundos <= 36) {
         legendaStayAlive.innerHTML = 'Nós vamos fazer o que for apenas para permanecermos vivos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 54) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 55 && aparece.mudaSegundos <= 57) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 58 && aparece.mudaSegundos <= 59 || aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 00 && aparece.mudaSegundos <= 01) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 2 && aparece.mudaSegundos <= 5) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 6 && aparece.mudaSegundos <= 8) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 9 && aparece.mudaSegundos <= 11) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 12 && aparece.mudaSegundos <= 16) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 17 && aparece.mudaSegundos <= 19) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando, abra seus olhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 30) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 31 && aparece.mudaSegundos <= 35) {
         legendaStayAlive.innerHTML = 'Olhe para o sol conforme os dias nascem'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 40) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 41 && aparece.mudaSegundos <= 43) {
         legendaStayAlive.innerHTML = 'Há um ritmo de pressa nos dias de hoje'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 44 && aparece.mudaSegundos <= 46) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 49) {
         legendaStayAlive.innerHTML = 'Onde as luzes não se movem e as cores não desaparecem'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 50 && aparece.mudaSegundos <= 53) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 54 && aparece.mudaSegundos <= 56) {
         legendaStayAlive.innerHTML = 'Te deixa vazio, com nada além de sonhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 57 && aparece.mudaSegundos <= 59) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 2) {
         legendaStayAlive.innerHTML = 'Em um mundo que se tornou superficial. Em um mundo que se tornou pobre.'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 3 && aparece.mudaSegundos <= 5) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 6 && aparece.mudaSegundos <= 9) {
         legendaStayAlive.innerHTML = 'Mas há uma verdade e ela está do nosso lado'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 10 && aparece.mudaSegundos <= 12) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 13 && aparece.mudaSegundos <= 15) {
         legendaStayAlive.innerHTML = 'O amanhecer está chegando abra seus olhos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 16 && aparece.mudaSegundos <= 18) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 19 && aparece.mudaSegundos <= 23) {
         legendaStayAlive.innerHTML = 'Olhe para o sol conforme um novo dia nasce'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 24) {
         retiraSubtitle()
      }

      function colocaSubtitle() {
         legendaStayAlive.style.backgroundColor = 'rgb(230,127,9)'
         legendaStayAlive.style.backgroundImage = 'radial-gradient(circle, rgba(230,127,9,1) 27%, rgba(254,105,10,1) 59%)'
      }

      function retiraSubtitle() {
         legendaStayAlive.innerHTML = ''
         legendaStayAlive.style.background = 'none'
      }
   }

   var legendaDirtyPaws = document.querySelector('.legenda-musica')

   if (legendaDirtyPaws.classList.contains('dirty-paws')) {
      if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 16) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 17 && aparece.mudaSegundos <= 19) {
         legendaDirtyPaws.innerHTML = 'Pulando para cima e para baixo'

         colocaSubtitle() 
      }
      
      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 21) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 22 && aparece.mudaSegundos <= 24) {
         legendaDirtyPaws.innerHTML = 'Minha cabeça é um animal'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 25) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 26 && aparece.mudaSegundos <= 28) {
         legendaDirtyPaws.innerHTML = 'E uma vez havia um animal'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 29) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 30 && aparece.mudaSegundos <= 32) {
         legendaDirtyPaws.innerHTML = 'Ele tinha um filho que cortava a grama'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 33 && aparece.mudaSegundos <= 34) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 35 && aparece.mudaSegundos <= 37) {
         legendaDirtyPaws.innerHTML = 'O filho era um garoto legal'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 38) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 39 && aparece.mudaSegundos <= 41) {
         legendaDirtyPaws.innerHTML = 'Eles tinham uma libélula de estimação'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 42) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 43 && aparece.mudaSegundos <= 45) {
         legendaDirtyPaws.innerHTML = 'A libélula um dia fugiu'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos == 46) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 50) {
         legendaDirtyPaws.innerHTML = 'Mas voltou com uma história para contar'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 0 && aparece.mudaSegundos >= 51 || aparece.mudaMinutos == 1 && aparece.mudaSegundos <= 11) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 12 && aparece.mudaSegundos <= 14) {
         legendaDirtyPaws.innerHTML = 'Suas patas sujas e casaco peludo'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 15 && aparece.mudaSegundos <= 17) {
         legendaDirtyPaws.innerHTML = 'Ela fugiu para a encosta da floresta'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 18 && aparece.mudaSegundos <= 19) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 20 && aparece.mudaSegundos <= 22) {
         legendaDirtyPaws.innerHTML = 'A floresta de árvores falantes'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos == 23) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 24 && aparece.mudaSegundos <= 26) {
         legendaDirtyPaws.innerHTML = 'Elas cantavam sobre os pássaros e as abelhas'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 27 && aparece.mudaSegundos <= 28) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 29 && aparece.mudaSegundos <= 31) {
         legendaDirtyPaws.innerHTML = 'As abelhas tinham declarado uma guerra'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 32 && aparece.mudaSegundos <= 35) {
         legendaDirtyPaws.innerHTML = 'O céu não era grande o suficiente para todos eles'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos == 36) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 37 && aparece.mudaSegundos <= 39) {
         legendaDirtyPaws.innerHTML = 'Os pássaros receberam ajuda debaixo'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 39 && aparece.mudaSegundos <= 40) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 41 && aparece.mudaSegundos <= 44) {
         legendaDirtyPaws.innerHTML = 'De patas sujas e das criaturas da neve'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 1 && aparece.mudaSegundos >= 45 && aparece.mudaSegundos <= 59 || aparece.mudaSegundos == 2 && aparece.mudaSegundos <= 23) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 23 && aparece.mudaSegundos <= 25) {
         legendaDirtyPaws.innerHTML = 'E por um tempo as coisas ficaram frias'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos == 26) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 27 && aparece.mudaSegundos <= 29) {
         legendaDirtyPaws.innerHTML = 'Elas se esconderam, assustadas, em seus buracos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 30 && aparece.mudaSegundos <= 31) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 32 && aparece.mudaSegundos <= 33) {
         legendaDirtyPaws.innerHTML = 'A floresta que um dia era verde'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 34 && aparece.mudaSegundos <= 35) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 36 && aparece.mudaSegundos <= 38) {
         legendaDirtyPaws.innerHTML = 'Foi pintada de preto por aquelas máquinas assassinas'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos == 39) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 40 && aparece.mudaSegundos <= 42) {
         legendaDirtyPaws.innerHTML = 'Mas ela e seus amigos peludos'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos == 43) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 44 && aparece.mudaSegundos <= 46) {
         legendaDirtyPaws.innerHTML = 'Derrubaram a abelha rainha e os seus homens'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 47 && aparece.mudaSegundos <= 48) {
         retiraSubtitle()
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 49 && aparece.mudaSegundos <= 51) {
         legendaDirtyPaws.innerHTML = 'E é assim que a história acaba'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 52 && aparece.mudaSegundos <= 55) {
         legendaDirtyPaws.innerHTML = 'A história da fera com aquelas quatro patas sujas'

         colocaSubtitle() 
      }

      else if (aparece.mudaMinutos == 2 && aparece.mudaSegundos >= 56 && aparece.mudaSegundos <= 59 || aparece.mudaMinutos == 3 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 59 || aparece.mudaMinutos == 4 && aparece.mudaSegundos >= 0 && aparece.mudaSegundos <= 19) {
         retiraSubtitle()
      }

      function colocaSubtitle() {
         legendaDirtyPaws.style.backgroundColor = 'rgb(230,127,9)'
         legendaDirtyPaws.style.backgroundImage = 'radial-gradient(circle, rgba(230,127,9,1) 27%, rgba(254,105,10,1) 59%)'
      }

      function retiraSubtitle() {
         legendaDirtyPaws.innerHTML = ''
         legendaDirtyPaws.style.background = 'none'
      }
   }
}