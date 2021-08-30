var altera = {
   cabecalho: document.querySelector('.convite'),
   optarMusica: document.querySelector('#optar-musica'),

   nomeMusica: document.querySelector('.nome-musica'),
   player: document.querySelector('#player'),
   jornada: document.querySelector('#jornada')
}

var clicaNoBotao = {
   inicial: document.querySelector('#inicial'),

   aceitaSom: document.querySelector('.sim'),
   recusaSom: document.querySelector('.no')
}

clicaNoBotao.inicial.addEventListener('click', () => {
   altera.cabecalho.classList.toggle('active')

   altera.optarMusica.classList.toggle('active')
})

clicaNoBotao.aceitaSom.addEventListener('click', () => {
   altera.optarMusica.classList.toggle('active')

   altera.nomeMusica.classList.toggle('active')
   altera.player.classList.toggle('active')

   altera.jornada.classList.toggle('active')   
})

clicaNoBotao.recusaSom.addEventListener('click', () => {
   altera.optarMusica.classList.toggle('active')

   altera.jornada.classList.toggle('active')
})