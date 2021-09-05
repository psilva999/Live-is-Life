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
   formulario.style.backgroundColor = '#861657'
   formulario.style.backgroundImage = 'linear-gradient(326deg, #861657 0%, #ffa69e 74%)'

   mudaPara.primeiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})

botaoQue.entregaSegundaEtapa.addEventListener('click', () => {
   formulario.style.backgroundColor = '#a40606'
   formulario.style.backgroundImage = 'linear-gradient(315deg, #a40606 0%, #d98324 74%)'

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
   formulario.style.backgroundColor = '#bd4f6c'
   formulario.style.backgroundImage = 'linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%)'

   mudaPara.segundaParteForm.classList.toggle('active')
   mudaPara.primeiraParteForm.classList.add('active')
})

botaoQue.voltaSegundaEtapa.addEventListener('click', () => {
   formulario.style.backgroundColor = '#861657'
   formulario.style.backgroundImage = 'linear-gradient(326deg, #861657 0%, #ffa69e 74%)'

   mudaPara.terceiraParteForm.classList.toggle('active')
   mudaPara.segundaParteForm.classList.add('active')
})