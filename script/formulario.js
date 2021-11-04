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

input.nome.onkeypress = function(insereNome) {
   var inputNome = document.querySelector('#nome-user')

   if (inputNome.value.length >= 11) {
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