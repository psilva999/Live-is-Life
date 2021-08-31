var botaoQue = {
   entregaPrimeiraEtapa: document.querySelector('#infos-primeira-etapa'),
   entregaSegundaEtapa: document.querySelector('#infos-segunda-etapa'),

   finalizaEtapas: document.querySelector('#entregar-formulario')
}

var mudaPara = {
   primeiraParteForm: document.querySelector('.primeira-parte'),
   segundaParteForm: document.querySelector('.segunda-parte'),

   terceiraParteForm: document.querySelector('.terceira-parte')
}

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
})