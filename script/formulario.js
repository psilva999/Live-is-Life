var input = {
   nome: document.querySelector('#nome-user'),
   nascimento: document.querySelector('#nasce-user'),

   altura: document.querySelector('#altura-user'),
   peso: document.querySelector('#peso-user')
}

input.nome.value.addEventListener('keypress', () => {
   if (!/^[a-zA-Z]*$/g.test(input.nome.value)) {
      alert("poio")
   }
})