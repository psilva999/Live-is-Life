var altera = {
   cabecalho: document.querySelector('.convite'),
   optarMusica: document.querySelector('#optar-musica')
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

})

clicaNoBotao.recusaSom.addEventListener('click', () => {

})