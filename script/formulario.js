var input = {
   nome: document.querySelector('#nome-user'),
   nascimento: document.querySelector('#nasce-user'),
   altura: document.querySelector('#altura-user'),
   peso: document.querySelector('#peso-user'),

   alcool: document.querySelector("#alcool"),
   ex_alcoolatra: document.querySelector("#ex-alcoolatra"),

   cigarro: document.querySelector("#cigarro"),
   ex_fumante: document.querySelector("#ex-fumante"),

   entorpecentes: document.querySelector("#entorpecentes"),
   ex_dependente: document.querySelector("#ex-dependente"),

   reabilitacao: document.querySelector("#reabilitacao"),
   limpo_de_substancias: document.querySelector("#limpo-substancias")
}

var modifica = {
   cobreTelaDoCalendario: document.querySelector('#tela-borrada-para-mostrar-calendario'),
   calendario: document.querySelector('.calendario'),

   mes: document.querySelector('.mes'),
   ano: document.querySelector('.ano'),
   setaDeVoltarCalendario: document.querySelector('.volta-calendar'),

   containerDosDias: document.querySelector('.dias'),
   containerDosMeses: document.querySelector('#meses'),
   containerDosAnos: document.querySelector('#anos'),

   botaoDoCalendario: document.querySelector('#resultado-calendario')
}

input.nascimento.onclick = () => {
   modifica.cobreTelaDoCalendario.style.display = 'block'
   modifica.calendario.style.display = 'block'

   modifica.cobreTelaDoCalendario.style.animation = 'mostra-calendario .1s linear forwards'
   modifica.calendario.style.animation = 'mostra-calendario .2s linear forwards'
   // input.nascimento.value = `1999-04-03`
   // input.nascimento.style.background = '#F2F2F2'
   // input.nascimento.style.color = 'black'

   // input.nascimento.style.animation = 'none'
   // input.nascimento.style.border = '.1rem solid transparent'

   // input.nascimento.style.backgroundClip = 'none'
   // input.nascimento.style.opacity = '.8'
   // input.nascimento.style.fontFamily = "'Baloo Thambi 2', cursive"
}

function retira_calendario() {
   modifica.cobreTelaDoCalendario.style.display = 'none'
   modifica.calendario.style.display = 'none'
}
modifica.cobreTelaDoCalendario.onclick = () => { retira_calendario() }

document.querySelector('#fecha-calendario').onclick = () => { retira_calendario() }
document.querySelector("#resultado-calendario").onclick = () => { retira_calendario() }

function desativa_container_dos_dias_e_button() {
   modifica.containerDosDias.style.display = 'none'
   modifica.botaoDoCalendario.style.display = 'none'
}

function ativa_seta_dos_dias() {
   modifica.setaDeVoltarCalendario.classList.remove('desativado')
   modifica.setaDeVoltarCalendario.classList.toggle('active')
}

modifica.mes.onclick = () => {
   desativa_container_dos_dias_e_button()
   ativa_seta_dos_dias()

   modifica.containerDosAnos.style.display = 'none'
   modifica.containerDosMeses.style.display = 'block'

   modifica.mes.classList.remove('active')
   modifica.mes.classList.add('desativado')
   if (modifica.ano.classList.contains('desativado')) {

      modifica.ano.classList.remove('desativado')
      modifica.ano.classList.add("active")
   }
}

modifica.ano.onclick = () => {
   desativa_container_dos_dias_e_button()
   ativa_seta_dos_dias()

   modifica.containerDosMeses.style.display = 'none'
   modifica.containerDosAnos.style.display = 'block'

   modifica.ano.classList.remove('active')
   modifica.ano.classList.add('desativado')
   if (modifica.mes.classList.contains('desativado')) {

      modifica.mes.classList.remove('desativado')
      modifica.mes.classList.add("active")
   }
}

modifica.setaDeVoltarCalendario.onclick = () => {
   modifica.containerDosAnos.style.display = 'none'
   modifica.containerDosMeses.style.display = 'none'

   modifica.containerDosDias.style.display = 'block'
   modifica.botaoDoCalendario.style.display = 'block'

   modifica.setaDeVoltarCalendario.classList.remove('active')
   modifica.setaDeVoltarCalendario.classList.add('desativado')

   if (modifica.ano.classList.contains('desativado')) {

      modifica.ano.classList.remove('desativado')
      modifica.ano.classList.add("active")
   }

   if (modifica.mes.classList.contains('desativado')) {

      modifica.mes.classList.remove('desativado')
      modifica.mes.classList.add("active")
   }
}

input.nome.onkeypress = function(insereNome) {
   var inputNome = document.querySelector('#nome-user')

   if (inputNome.value.length >= 9) {
      insereNome.preventDefault()
   }
}

input.altura.onkeypress = function(insereAltura) {
   var inputAltura = document.querySelector('#altura-user') 

   if ((insereAltura.key == '-' || insereAltura.key == '+' || insereAltura.key == '/' || insereAltura.key == '*' || insereAltura.key == '!' || insereAltura.key == '%' || insereAltura.key == '(' || insereAltura.key == ')' || insereAltura.key == ':' || insereAltura.key == ',') || inputAltura.value.length >= 4) {
      insereAltura.preventDefault()
   }
}

input.peso.onkeypress = function(inserePeso) {
   var inputPeso = document.querySelector('#peso-user')

   if ((inserePeso.key == '-' || inserePeso.key == '+' || inserePeso.key == '/' || inserePeso.key == '*' || inserePeso.key == '!' || inserePeso.key == '%' || inserePeso.key == '(' || inserePeso.key == ')' || inserePeso.key == ':' || inserePeso.key == ',') || inputPeso.value.length >= 3) {
      inserePeso.preventDefault()
   }
}
input.nome.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }
input.altura.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }
input.peso.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }

input.alcool.onclick = () => { desativa_inputs_de_reabilitacao_e_limpo() }
input.ex_alcoolatra.onclick = () => { desativa_inputs_de_reabilitacao_e_limpo() }
input.cigarro.onclick = () => { desativa_inputs_de_reabilitacao_e_limpo() }
input.ex_fumante.onclick = () => { desativa_inputs_de_reabilitacao_e_limpo() }
input.entorpecentes.onclick = () => { desativa_inputs_de_reabilitacao_e_limpo() }
input.ex_dependente.onclick = () => { desativa_inputs_de_reabilitacao_e_limpo() }

function desativa_inputs_de_reabilitacao_e_limpo() {
   input.reabilitacao.checked = false
   input.limpo_de_substancias.checked = false
}

input.reabilitacao.onclick = () => { desativaInputs() }
input.limpo_de_substancias.onclick = () => { desativaInputs() }

function desativaInputs() {
   input.alcool.checked = false
   input.ex_alcoolatra.checked = false

   input.cigarro.checked = false
   input.ex_fumante.checked = false

   input.entorpecentes.checked = false
   input.ex_dependente.checked = false
}