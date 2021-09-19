var formulario = document.querySelector('#formulario')

var botaoQue = {
   entregaPrimeiraEtapa: document.querySelector('#infos-primeira-etapa'),
   entregaSegundaEtapa: document.querySelector('#infos-segunda-etapa'),

   voltaPrimeiraEtapa: document.querySelector('#volta-primeira-etapa'),
   voltaSegundaEtapa: document.querySelector('#volta-segunda-etapa'),

   indicaPerguntaSensivel: document.querySelector('.botao-mostra-aviso-pergunta-sensivel'),

   finalizaEtapas: document.querySelector('#entregar-formulario')
}

var mudaPara = {
   primeiraParteForm: document.querySelector('.primeira-parte'),
   segundaParteForm: document.querySelector('.segunda-parte'),

   terceiraParteForm: document.querySelector('.terceira-parte'),
   resultado: document.querySelector('#essencia'),

   containerPerguntaSensivel: document.querySelector('.pergunta-sensivel'),
   avisoPerguntaSensivel: document.querySelector('.aviso-pergunta-sensivel'),
   simplesMensagem: document.querySelector('.simples-mensagem'),

   fechaPorXoAvisoDePerguntaSensivel: document.querySelector('.fechar-aviso-por-x'),

   botaoQueAbrePerguntaSensivel: document.querySelector('.abrir-pergunta-sensivel'),
   botaoQueDeixaFechadoPerguntaSensivel: document.querySelector('.deixar-pergunta-sensivel-fechada'),

   backgroundPerguntaSensivelQuandoFocado: document.querySelector('.background-quando-focado')
}

var retiraDesfocoPerguntaSensivel = document.querySelector('.suicidio')

function retiraAvisoPerguntaSensivel() {
   mudaPara.avisoPerguntaSensivel.classList.remove('active')

   mudaPara.simplesMensagem.classList.remove('active')
}

botaoQue.indicaPerguntaSensivel.addEventListener('click', () => {
   mudaPara.avisoPerguntaSensivel.classList.add('active')

   mudaPara.simplesMensagem.classList.add('active')
})

mudaPara.avisoPerguntaSensivel.addEventListener('click', retiraAvisoPerguntaSensivel)
mudaPara.fechaPorXoAvisoDePerguntaSensivel.addEventListener('click', retiraAvisoPerguntaSensivel)
mudaPara.botaoQueDeixaFechadoPerguntaSensivel.addEventListener('click', retiraAvisoPerguntaSensivel)

mudaPara.botaoQueAbrePerguntaSensivel.addEventListener('click', () => {
   retiraAvisoPerguntaSensivel()
   mudaPara.containerPerguntaSensivel.classList.remove('active')

   retiraDesfocoPerguntaSensivel.style.filter = 'none'
   retiraDesfocoPerguntaSensivel.classList.add('background')

   retiraDesfocoPerguntaSensivel.style.marginTop = '60px'
   retiraDesfocoPerguntaSensivel.style.marginBottom = '0px'
})

botaoQue.entregaPrimeiraEtapa.addEventListener('click', () => {

   mudaPara.primeiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})

botaoQue.entregaSegundaEtapa.addEventListener('click', () => {

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.terceiraParteForm.classList.add('active')
})

botaoQue.finalizaEtapas.addEventListener('click', () => {

   mudaPara.terceiraParteForm.classList.toggle('active')
   mudaPara.resultado.classList.add('active')
})

botaoQue.voltaPrimeiraEtapa.addEventListener('click', () => {

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.primeiraParteForm.classList.add('active')
})

botaoQue.voltaSegundaEtapa.addEventListener('click', () => {

   mudaPara.terceiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})