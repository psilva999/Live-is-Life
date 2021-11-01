var input = {
   nome: document.querySelector('#nome-user'),
   nascimento: document.querySelector('#nasce-user'),

   altura: document.querySelector('#altura-user'),
   peso: document.querySelector('#peso-user')
}

input.nome.addEventListener("keypress", () => {
   var inputNome = document.querySelector('#nome-user')

   if (inputNome.value.length >= 15) {
      insereTecla.preventDefault()
   }

   if (!/^[a-zA-Z]*$/g.test(inputNome)) {
      alert("poio")
   }
})