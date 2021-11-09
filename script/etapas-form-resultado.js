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
var longevidade_media_do_brasileiro = 76
var essencia = longevidade_media_do_brasileiro

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

   retira_essencia_da_primeira_parte()

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

function retira_essencia_da_primeira_parte() {
   var imc = {
      peso: document.querySelector('#peso-user').value,
      altura: document.querySelector('#altura-user').value
   }

   if (document.querySelector('#pessoa-sedentaria').checked && (imc.peso / (imc.altura ^ 2)) >= 25) {
      consequencias_primeira_parte(6)

      document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://www.endocrino.org.br/obesidade-x-expectativa-de-vida/' target='_blank'>😟 - Pessoas obesas perdem de dois a dez anos de suas vidas</a></p>"
   }

   if (document.querySelector('#pessoa-sedentaria').checked && (imc.peso / (imc.altura ^ 2)) <= 18.4) {
      consequencias_primeira_parte(5)

      document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://veja.abril.com.br/saude/estar-abaixo-do-peso-eleva-risco-de-vida-mais-do-que-obesidade/' target='_blank'>😕 - Pessoas abaixo do peso vivem cinco anos a menos</a></p>"
   }

   function consequencias_primeira_parte(modo_p_1) {
      essencia = longevidade_media_do_brasileiro - modo_p_1

      longevidade_media_do_brasileiro -= modo_p_1
   }
}

botaoQue.voltaPrimeiraEtapa.addEventListener('click', () => {

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.primeiraParteForm.classList.add('active')
})

botaoQue.entregaSegundaEtapa.addEventListener('click', () => {
   retira_essencia_segunda_parte()

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.terceiraParteForm.classList.add('active')
})

function retira_essencia_segunda_parte() {
   if (document.querySelector('#sim-kids').checked) {
      consequencias_segunda_parte(2)

      document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://www.dw.com/pt-br/ter-filhos-pode-aumentar-longevidade-diz-estudo/a-37936560#:~:text=Apesar de maior preocupação ao,pessoas que vivem na Suécia.' target='_blank'>👨‍👩‍👧‍👧 - Pessoas que optaram por ter filhos vivem dois anos a mais do que aquelas que optaram por não ter</a></p>"
   }

   function consequencias_segunda_parte(modo_p_2) {
      essencia = longevidade_media_do_brasileiro + modo_p_2

      longevidade_media_do_brasileiro += modo_p_2
   }
}

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

   retira_essencia_terceira_parte()
   document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://www.vittude.com/' target='_blank'>Espero que o Vittude possa te ajudar de alguma forma - 😉</a></p>"
   
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

function retira_essencia_terceira_parte() {
   if (document.querySelector('#alcool').checked) {
      consequencias_terceira_parte(5)

      document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://www.revistaencontro.com.br/canal/atualidades/2018/04/beber-alcool-mesmo-que-de-forma-moderada-pode-fazer-mal.html' target='_blank'>🥴 - Exagerar no álcool reduz a expectativa de vida em até 5 anos</a></p>"
   }

   if (document.querySelector('#cigarro').checked) {
      consequencias_terceira_parte(10)

      document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://www.revolucaoprateada.com.br/principais-fatores-que-influenciam-para-a-longevidade/' target='_blank'>😟 - A expectativa de vida de um fumante diminui de 20 a 25 anos</a></p>"
   }

   if (document.querySelector('#entorpecentes').checked) {
      consequencia_das_drogas(8)

      document.querySelector('#texto-do-resultado').innerHTML += "<p><a href='https://www.grupoaguiar.org/blog/drogas/quanto-tempo-vive-um-usuario-de-craque-e-como-posso-ajuda-lo/16' target='_blank'>😞 - Estima-se que um usuário de crack viva em média oito anos.</a></p>"
   }

   function consequencias_terceira_parte(modo_p_3) {
      essencia = longevidade_media_do_brasileiro - modo_p_3

      longevidade_media_do_brasileiro -= modo_p_3
   }

   function consequencia_das_drogas(drogas) {
      const
         data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
         pegarData = data.exec(document.querySelector('#nasce-user').value),
         ano_de_nascimento = pegarData[1]

      var momentoAtual = new Date().getFullYear()
      var idade = momentoAtual - ano_de_nascimento

      essencia = idade + drogas

      longevidade_media_do_brasileiro = idade + drogas
   }
}

function resultado_da_essencia() {
   const
      data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
      pegarData = data.exec(document.querySelector('#nasce-user').value),

      day = pegarData[3],
      mes = pegarData[2],
      ano_de_nascimento = pegarData[1]

   var fimDaEssencia = new Date(`Dec 31, ${Number(ano_de_nascimento) + Number(essencia)}`).getFullYear()

   var momentoAtual = new Date().getFullYear()
   var mesAtual = new Date().getMonth() 
   var idade = momentoAtual - ano_de_nascimento 

   var anosFinais = (fimDaEssencia - 2000) - idade
   var anosFinaisEmDias = anosFinais * 365

   var essenciaEm = {
      meses: anosFinais * 12,
      semanas: anosFinais * 52,
      horas: (anosFinais * 365) * 24
   }

   var mesesVividos = ((idade * 12) + (mesAtual - 1))

   

   if ((day == 30 || day == 31) && mes == 2) {
      document.querySelector('#passa-titulo-essencia').innerHTML = `Am I a joke to you?`

      space_cowboy()
   }

   else if (idade < 0) {
      document.querySelector('#passa-titulo-essencia').innerHTML = `Stephen Hawking estaria orgulhoso de você`

      space_cowboy()
   }

   else if (idade <= 15 && idade >= 0) {
      space_cowboy()

      document.querySelector('#passa-titulo-essencia').innerHTML = `Muito cedo pro teste 😅`
   }

   else if (idade >= 77 && idade <= 100) {
      space_cowboy()

      document.querySelector('#passa-titulo-essencia').innerHTML = `Aproveite sua essência 😋`
   }

   else if (idade >= 101) {
      space_cowboy()

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

   function space_cowboy() {
      document.querySelector('.essencia-anos').innerHTML = `See`
      document.querySelector('.essencia-meses').innerHTML = `You`

      document.querySelector('.essencia-semanas').innerHTML = `Space`
      document.querySelector('.essencia-horas').innerHTML = `Cowboy`

      document.querySelector('.container-essencia-blocos').style.display = 'none'
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
   document.querySelector('.container-dos-blocos.meses').style.filter = 'blur(5px)'
   document.querySelector('#loading-blocos-meses').style.display = 'block'

   var tempoParaMostrarBlocosAmpliados = 1 * 60
   var mostraBlocosAmpliados = setInterval(resultado, 1000)

   function resultado() {
      tempoParaMostrarBlocosAmpliados--

      if (tempoParaMostrarBlocosAmpliados <= 59) {
         document.querySelector('.container-dos-blocos.meses').style.filter = 'none'
         document.querySelector('#loading-blocos-meses').style.display = 'none'
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
         var essenciaEm = { meses: anosFinais * 12 }
         var mesesVividos = ((idade * 12) + (mesAtual - 1))

         document.querySelector("#indica-nome-bloco").innerHTML = 'Meses'
         document.querySelector('#container-dos-blocos-ampliados').innerHTML = ""

         for (var p = 0; p < ((mesesVividos * .4).toFixed(0)); p++) {
            document.querySelector("#container-dos-blocos-ampliados").innerHTML += "<div id='meses-que-passaram'></div>"
         }
         document.querySelector("#container-dos-blocos-ampliados").innerHTML += ` ... + ${(mesesVividos * .6).toFixed(0)} ... `

         document.querySelector("#container-dos-blocos-ampliados").innerHTML += "<div id='mes-atual'></div>"

         for (var count2 = 0; count2 < ((essenciaEm.meses * .2).toFixed(0)); count2++) {
            document.querySelector("#container-dos-blocos-ampliados").innerHTML += `<div id='meses-futuros'></div>`
         }
         document.querySelector("#container-dos-blocos-ampliados").innerHTML += ` ... + ${(essenciaEm.meses * .8).toFixed(0)}`

         clearInterval(mostraBlocosAmpliados)
      }
   }
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