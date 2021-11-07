var formulario = document.querySelector('#formulario')

var botaoQue = {
   entregaPrimeiraEtapa: document.querySelector('#infos-primeira-etapa'),
   entregaSegundaEtapa: document.querySelector('#infos-segunda-etapa'),

   voltaPrimeiraEtapa: document.querySelector('#volta-primeira-etapa'),
   voltaSegundaEtapa: document.querySelector('#volta-segunda-etapa'),

   indicaPerguntaSensivel: document.querySelector('.botao-mostra-aviso-pergunta-sensivel'),
   compartilhaSite: document.querySelector("#share"),

   finalizaEtapas: document.querySelector('#entregar-formulario'),
   copiaLink: document.querySelector('.copiar-link')
}

var mudaPara = {
   primeiraParteForm: document.querySelector('.primeira-parte'),
   segundaParteForm: document.querySelector('.segunda-parte'),

   terceiraParteForm: document.querySelector('.terceira-parte'),
   resultado: document.querySelector('.essencia'),

   containerPerguntaSensivel: document.querySelector('.pergunta-sensivel'),
   avisoPerguntaSensivel: document.querySelector('.aviso-pergunta-sensivel'),
   simplesMensagem: document.querySelector('.simples-mensagem'),

   fechaPorXoAvisoDePerguntaSensivel: document.querySelector('.fechar-aviso-por-x'),

   botaoQueAbrePerguntaSensivel: document.querySelector('.abrir-pergunta-sensivel'),
   botaoQueDeixaFechadoPerguntaSensivel: document.querySelector('.deixar-pergunta-sensivel-fechada'),

   backgroundPerguntaSensivelQuandoFocado: document.querySelector('.background-quando-focado'),

   fecharSharePorFora: document.querySelector(".cobre-tela"),
   fecharSharePorX: document.querySelector('#fecha-share-por-x'),
   abaDeCompartilhar: document.querySelector(".share-site"),

   linkCopiado: document.querySelector("#link"),
   indicaCopy: document.querySelector("#indica-copy")
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

var mensagem_erro = document.querySelector(".mensagem-erro")

botaoQue.entregaPrimeiraEtapa.addEventListener('click', () => {
   var input_nome = document.querySelector('#nome-user')
   var nome_user = document.querySelector("#nome-do-usuario")

   var altura_user = document.querySelector('#altura-user')
   var peso_user = document.querySelector('#peso-user')

   if (input_nome.value <= 0 || altura_user.value >= 2.20 || altura_user.value <= .7 || peso_user.value >= 150 || peso_user.value <= 30) {
      mensagem_erro.innerHTML = 'Insira seus dados corretamente'
      mensagem_erro.style.display = 'block'

      if (window.innerWidth <= 800) { mensagem_erro.style.animation = 'vem-da-direita-1000 .3s linear forwards' }
      else { mensagem_erro.style.animation = 'vem-da-direita .3s linear forwards' }
      
      apagaIndicadorDeErro()
   }

   else {
      mudaPara.primeiraParteForm.classList.toggle('active')
      mudaPara.segundaParteForm.classList.add('active')

      nome_user.innerHTML = `Oi ${input_nome.value}, prazer te conhecer <embed src='https://i.giphy.com/media/Lqx1czoPLTQg3I68d1/giphy.webp'>`
   }
})

function apagaIndicadorDeErro() {
   var tempoDoIndicadorDeErro = 1 * 60
   var teste = setInterval(contadorDoErro, 1000)

   function contadorDoErro() {
      tempoDoIndicadorDeErro--

      if (tempoDoIndicadorDeErro <= 56) {
         mensagem_erro.style.display = 'none'

         clearInterval(teste)
      }
   }
}  

botaoQue.entregaSegundaEtapa.addEventListener('click', () => {

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.terceiraParteForm.classList.add('active')
})

botaoQue.voltaPrimeiraEtapa.addEventListener('click', () => {

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.primeiraParteForm.classList.add('active')
})

botaoQue.voltaSegundaEtapa.addEventListener('click', () => {

   mudaPara.terceiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})

botaoQue.finalizaEtapas.addEventListener('click', () => {
   document.querySelector("#loading").style.display = 'block'

   if (window.innerWidth > 800) {
      document.querySelector("#loading").style.animation = 'aparece-loading .3s linear forwards'
   }

   else {
      document.querySelector("#loading").style.animation = 'aparece-loading-800 .3s linear forwards'
   }

   var tempoParaOResultado = 1 * 60
   var mostraResultado = setInterval(resultado, 1000)

   function resultado() {
      tempoParaOResultado--

      if (tempoParaOResultado <= 59) {
         mudaPara.terceiraParteForm.classList.toggle('active')
         mudaPara.resultado.classList.add('active')

         resultado_da_essencia()

         clearInterval(mostraResultado)
      }
   }

})

function resultado_da_essencia() {
   const
      data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
      pegarData = data.exec(document.querySelector('#nasce-user').value),

      day = pegarData[3],
      month = pegarData[2],
      ano_de_nascimento = pegarData[1]

   var momentoAtual = new Date().getFullYear()
   var mesAtual = new Date().getMonth() 
   var idade = momentoAtual - ano_de_nascimento 

   var anosFinais = 76 - idade
   var anosFinaisEmDias = anosFinais * 365

   var essenciaEm = {
      meses: anosFinais * 12,
      semanas: anosFinais * 52,
      horas: (anosFinais * 365) * 24
   }

   var mesesVividos = ((idade * 12) + (mesAtual - 1))

   if (idade <= 15) {
      document.querySelector('#passa-titulo-essencia').innerHTML = `Muito cedo pro teste 😅`
   }

   else if (idade >= 77 && idade <= 100) {
      document.querySelector('#passa-titulo-essencia').innerHTML = `Aproveite sua essência 😋`
   }

   else if (idade >= 101) {
      document.querySelector('#passa-titulo-essencia').innerHTML = `Você não tem essa idade 😑`
   }

   else {
      document.querySelector('#passa-titulo-essencia').innerHTML = `Você tem ${anosFinaisEmDias} dias de essência`

      document.querySelector('.essencia-anos').innerHTML = `${anosFinais} anos`
      document.querySelector('.essencia-meses').innerHTML = `${essenciaEm.meses} meses`

      document.querySelector('.essencia-semanas').innerHTML = `${essenciaEm.semanas} semanas`
      document.querySelector('.essencia-horas').innerHTML = `${essenciaEm.horas} horas`

      for (var i = 0; i < (idade - 1); i++) {
         document.querySelector('.container-dos-blocos.anos').innerHTML += "<div id='ano-que-passou'></div>"
      }

      document.querySelector('.container-dos-blocos.anos').innerHTML += "<div id='ano-atual'></div>"
      
      var count = 0
      while (count < anosFinais) {
         count++
         document.querySelector('.container-dos-blocos.anos').innerHTML += "<div id='ano-futuro'></div>"
      }

      for (var p = 0; p < ((mesesVividos * .15).toFixed(0)); p++) {
         document.querySelector(".container-dos-blocos.meses").innerHTML += "<div id='meses-que-passaram'></div>"
      }
      document.querySelector(".container-dos-blocos.meses").innerHTML += ` ... + ${(mesesVividos * .85).toFixed(0)} ... `

      document.querySelector(".container-dos-blocos.meses").innerHTML += "<div id='mes-atual'></div>"
 
      for (var count2 = 0; count2 < ((essenciaEm.meses * .05).toFixed(0)); count2++) {
         document.querySelector(".container-dos-blocos.meses").innerHTML += `<div id='meses-futuros'></div>`
      }
      document.querySelector(".container-dos-blocos.meses").innerHTML += ` ... + ${(essenciaEm.meses * .95).toFixed(0)}`
   }
}

document.querySelector("#amplia-blocos-anos").onclick = () => {
   mostra_blocos_ampliados()

   const
      data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
      pegarData = data.exec(document.querySelector('#nasce-user').value),

      day = pegarData[3],
      month = pegarData[2],
      ano_de_nascimento = pegarData[1]

   var momentoAtual = new Date().getFullYear()
   var idade = momentoAtual - ano_de_nascimento
   var anosFinais = 76 - idade
   
   document.querySelector("#indica-nome-bloco").innerHTML = 'Anos'
   document.querySelector('#container-dos-blocos-ampliados').innerHTML = ""

   for (var i = 0; i < (idade - 1); i++) {
      document.querySelector('#container-dos-blocos-ampliados').innerHTML += "<div id='ano-que-passou'></div>"
   }

   document.querySelector('#container-dos-blocos-ampliados').innerHTML += "<div id='ano-atual'></div>"

   var count = 0
   while (count < anosFinais) {
      count++
      document.querySelector('#container-dos-blocos-ampliados').innerHTML += "<div id='ano-futuro'></div>"
   }
}

document.querySelector('#amplia-blocos-meses').onclick = () => {
   mostra_blocos_ampliados()

   const
      data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
      pegarData = data.exec(document.querySelector('#nasce-user').value),

      day = pegarData[3],
      month = pegarData[2],
      ano_de_nascimento = pegarData[1]

   var momentoAtual = new Date().getFullYear()
   var mesAtual = new Date().getMonth()
   var idade = momentoAtual - ano_de_nascimento

   var anosFinais = 76 - idade
   var essenciaEm = { meses: anosFinais * 12, }
   var mesesVividos = ((idade * 12) + (mesAtual - 1))

   document.querySelector("#indica-nome-bloco").innerHTML = 'Meses'
   document.querySelector('#container-dos-blocos-ampliados').innerHTML = ""

   for (var p = 0; p < ((mesesVividos * .3).toFixed(0)); p++) {
      document.querySelector("#container-dos-blocos-ampliados").innerHTML += "<div id='meses-que-passaram'></div>"
   }
   document.querySelector("#container-dos-blocos-ampliados").innerHTML += ` ... + ${(mesesVividos * .7).toFixed(0)} ... `

   document.querySelector("#container-dos-blocos-ampliados").innerHTML += "<div id='mes-atual'></div>"

   for (var count2 = 0; count2 < ((essenciaEm.meses * .1).toFixed(0)); count2++) {
      document.querySelector("#container-dos-blocos-ampliados").innerHTML += `<div id='meses-futuros'></div>`
   }
   document.querySelector("#container-dos-blocos-ampliados").innerHTML += ` ... + ${(essenciaEm.meses * .9).toFixed(0)}`
}

function mostra_blocos_ampliados() {
   document.querySelector('.cobre-tela-para-blocos').style.display = 'block'
   document.querySelector(".mostra-blocos-ampliados").style.display = 'block'
}

document.querySelector('.cobre-tela-para-blocos').onclick = () => { retira_blocos_ampliados() }
document.querySelector('.fechar-blocos-por-x').onclick = () => { retira_blocos_ampliados() }

function retira_blocos_ampliados() {
   document.querySelector('.cobre-tela-para-blocos').style.display = 'none'
   document.querySelector(".mostra-blocos-ampliados").style.display = 'none'
}

botaoQue.compartilhaSite.onclick = () => {
   mudaPara.fecharSharePorFora.style.display = 'block'
   mudaPara.abaDeCompartilhar.style.display = 'block'

   mudaPara.fecharSharePorFora.style.animation = 'mostra .1s linear forwards'
   mudaPara.abaDeCompartilhar.style.animation = 'mostra .2s linear forwards'
}

mudaPara.fecharSharePorX.onclick = () => { fechaAbaDeCompartilhar() }
mudaPara.fecharSharePorFora.onclick = () => { fechaAbaDeCompartilhar() }

function fechaAbaDeCompartilhar() {
   mudaPara.indicaCopy.src = 'https://i.ibb.co/tYyJGvy/copy.png'

   mudaPara.fecharSharePorFora.style.display = 'none'
   mudaPara.abaDeCompartilhar.style.display = 'none'
}

botaoQue.copiaLink.onclick = function copiarLinkDoSite(modo) {
   modo.preventDefault()

   mudaPara.linkCopiado.select()
   mudaPara.linkCopiado.setSelectionRange(0, 9999)
   document.execCommand('copy')

   mudaPara.indicaCopy.src = 'https://i.ibb.co/TkmqZZr/check.png'

   var time = 1 * 60
   setInterval(function apagaIndicadoDeCopy() {
      var segundos = time % 60

      time--
      if (segundos >= 59) {
         mudaPara.indicaCopy.src = 'https://i.ibb.co/tYyJGvy/copy.png'
      }

      setTimeout()
   }, 1000)
}