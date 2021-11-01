var input = {
   nome: document.querySelector('#nome-user'),
   nascimento: document.querySelector('#nasce-user'),

   altura: document.querySelector('#altura-user'),
   peso: document.querySelector('#peso-user')
}

input.nome.onkeypress = function(insereNome) {
   var inputNome = document.querySelector('#nome-user')

   if (inputNome.value.length >= 11) {
      insereNome.preventDefault()
   }
}

input.nascimento.onkeypress = function(insereNascimento) {
   var inputNascimento = document.querySelector('#nasce-user')

   if ((insereNascimento.key != '0' && insereNascimento.key != '1' && insereNascimento.key != '2' && insereNascimento.key != '3' && insereNascimento.key != '4' && insereNascimento.key != '5' && insereNascimento.key != '6' && insereNascimento.key != '7' && insereNascimento.key != '8' && insereNascimento.key != '9' && insereNascimento.key !== 'Backspace') || inputNascimento.value.length >= 10) {
      insereNascimento.preventDefault()
   }

   if (inputNascimento.value.length == 2 || inputNascimento.value.length == 5) {
      inputNascimento.value += '/'
   }
}

input.nome.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }
input.nascimento.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }

input.altura.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }
input.peso.onpaste = function semColar(desabilitaColar) { desabilitaColar.preventDefault() }