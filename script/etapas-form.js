var formulario = document.querySelector('#formulario')

var botaoQue = {
   entregaPrimeiraEtapa: document.querySelector('#infos-primeira-etapa'),
   entregaSegundaEtapa: document.querySelector('#infos-segunda-etapa'),

   voltaPrimeiraEtapa: document.querySelector('#volta-primeira-etapa'),
   voltaSegundaEtapa: document.querySelector('#volta-segunda-etapa'),

   finalizaEtapas: document.querySelector('#entregar-formulario')
}

var mudaPara = {
   primeiraParteForm: document.querySelector('.primeira-parte'),

   segundaParteForm: document.querySelector('.segunda-parte'),
   terceiraParteForm: document.querySelector('.terceira-parte'),
   resultado: document.querySelector('#essencia')
}

botaoQue.entregaPrimeiraEtapa.addEventListener('click', () => {
   formulario.style.backgroundColor = '#f5d020'
   formulario.style.backgroundImage = 'linear-gradient(315deg, #f5d020 0%, #f53803 74%)'
   
   mudaPara.primeiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})

botaoQue.entregaSegundaEtapa.addEventListener('click', () => {
   formulario.style.backgroundColor = '#f5f5f1'
   formulario.style.backgroundImage = 'linear-gradient(315deg, #f5f5f1 0%, #e50914 74%)'

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.terceiraParteForm.classList.add('active')
})

botaoQue.finalizaEtapas.addEventListener('click', () => {
   formulario.style.backgroundColor = '#772f1a'
   formulario.style.backgroundImage = 'linear-gradient(315deg, #772f1a 0%, #f2a65a 74%)'

   mudaPara.terceiraParteForm.classList.toggle('active')
   mudaPara.resultado.classList.add('active')
})

botaoQue.voltaPrimeiraEtapa.addEventListener('click', () => {
   formulario.style.backgroundColor = '#f9484a'
   formulario.style.backgroundImage = 'linear-gradient(315deg, #f9484a 0%, #fbd72b 74%)'

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.primeiraParteForm.classList.add('active')
})

botaoQue.voltaSegundaEtapa.addEventListener('click', () => {
   formulario.style.backgroundColor = '#f5d020'
   formulario.style.backgroundImage = 'linear-gradient(315deg, #f5d020 0%, #f53803 74%)'

   mudaPara.terceiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})