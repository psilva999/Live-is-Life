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

   containerAjustavel: document.querySelector('.container'),
   botaoDoCalendario: document.querySelector('#resultado-calendario')
}

let mesDe = {
   janeiro: document.querySelector('.janeiro'),
   fevereiro: document.querySelector('.fevereiro'),
   marco: document.querySelector('.marco'),

   abril: document.querySelector('.abril'),
   maio: document.querySelector('.maio'),
   junho: document.querySelector('.junho'),

   julho: document.querySelector('.julho'),
   agosto: document.querySelector('.agosto'),
   setembro: document.querySelector('.setembro'),

   outubro: document.querySelector('.outubro'),
   novembro: document.querySelector('.novembro'),
   dezembro: document.querySelector('.dezembro')
}

input.nome.onkeypress = function (insereNome) {
   var inputNome = document.querySelector('#nome-user')

   if (inputNome.value.length >= 9) {
      insereNome.preventDefault()
   }
}

input.altura.onkeypress = function (insereAltura) {
   var inputAltura = document.querySelector('#altura-user')

   if ((insereAltura.key == '-' || insereAltura.key == '+' || insereAltura.key == '/' || insereAltura.key == '*' || insereAltura.key == '!' || insereAltura.key == '%' || insereAltura.key == '(' || insereAltura.key == ')' || insereAltura.key == ':' || insereAltura.key == ',') || inputAltura.value.length >= 4) {
      insereAltura.preventDefault()
   }
}

input.peso.onkeypress = function (inserePeso) {
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

input.nascimento.onclick = () => {
   modifica.cobreTelaDoCalendario.style.display = 'block'
   modifica.calendario.style.display = 'block'

   modifica.cobreTelaDoCalendario.style.animation = 'mostra-calendario .1s linear forwards'
   modifica.calendario.style.animation = 'mostra-calendario .2s linear forwards'
}

function insere_nascimento() {
   var dataNascimentoUser = document.querySelector('#nasce-user')

   var ano = 0
   var mes = 0
   var dia = 0

   if (document.querySelector('.a-2016').classList.contains('escolhido')) {
      ano = 2016
   }

   else if (document.querySelector('.a-2015').classList.contains('escolhido')) {
      ano = 2015
   }
   
   else if (document.querySelector('.a-2014').classList.contains('escolhido')) {
      ano = 2014
   }

   else if (document.querySelector('.a-2013').classList.contains('escolhido')) {
      ano = 2013
   }

   else if (document.querySelector('.a-2012').classList.contains('escolhido')) {
      ano = 2012
   }

   else if (document.querySelector('.a-2011').classList.contains('escolhido')) {
      ano = 2011
   }

   else if (document.querySelector('.a-2010').classList.contains('escolhido')) {
      ano = 2010
   }

   else if (document.querySelector('.a-2009').classList.contains('escolhido')) {
      ano = 2009
   }

   else if (document.querySelector('.a-2008').classList.contains('escolhido')) {
      ano = 2008
   }

   else if (document.querySelector('.a-2007').classList.contains('escolhido')) {
      ano = 2007
   }

   else if (document.querySelector('.a-2006').classList.contains('escolhido')) {
      ano = 2006
   }

   else if (document.querySelector('.a-2005').classList.contains('escolhido')) {
      ano = 2005
   }

   else if (document.querySelector('.a-2004').classList.contains('escolhido')) {
      ano = 2004
   }

   else if (document.querySelector('.a-2003').classList.contains('escolhido')) {
      ano = 2003
   }

   else if (document.querySelector('.a-2002').classList.contains('escolhido')) {
      ano = 2002
   }

   else if (document.querySelector('.a-2001').classList.contains('escolhido')) {
      ano = 2001
   }

   else if (document.querySelector('.a-2000').classList.contains('escolhido')) {
      ano = 2000
   }

   else if (document.querySelector('.a-1999').classList.contains('escolhido')) {
      ano = 1999
   }

   else if (document.querySelector('.a-1998').classList.contains('escolhido')) {
      ano = 1998
   }

   else if (document.querySelector('.a-1997').classList.contains('escolhido')) {
      ano = 1997
   }

   else if (document.querySelector('.a-1996').classList.contains('escolhido')) {
      ano = 1996
   }

   else if (document.querySelector('.a-1995').classList.contains('escolhido')) {
      ano = 1995
   }

   else if (document.querySelector('.a-1994').classList.contains('escolhido')) {
      ano = 1994
   }

   else if (document.querySelector('.a-1993').classList.contains('escolhido')) {
      ano = 1993
   }

   else if (document.querySelector('.a-1992').classList.contains('escolhido')) {
      ano = 1992
   }

   else if (document.querySelector('.a-1991').classList.contains('escolhido')) {
      ano = 1991
   }

   else if (document.querySelector('.a-1990').classList.contains('escolhido')) {
      ano = 1990
   }

   else if (document.querySelector('.a-1989').classList.contains('escolhido')) {
      ano = 1989
   }

   else if (document.querySelector('.a-1988').classList.contains('escolhido')) {
      ano = 1988
   }

   else if (document.querySelector('.a-1987').classList.contains('escolhido')) {
      ano = 1987
   }

   else if (document.querySelector('.a-1986').classList.contains('escolhido')) {
      ano = 1986
   }

   else if (document.querySelector('.a-1985').classList.contains('escolhido')) {
      ano = 1985
   }

   else if (document.querySelector('.a-1984').classList.contains('escolhido')) {
      ano = 1984
   }

   else if (document.querySelector('.a-1983').classList.contains('escolhido')) {
      ano = 1983
   }

   else if (document.querySelector('.a-1982').classList.contains('escolhido')) {
      ano = 1982
   }

   else if (document.querySelector('.a-1981').classList.contains('escolhido')) {
      ano = 1981
   }

   else if (document.querySelector('.a-1980').classList.contains('escolhido')) {
      ano = 1980
   }

   else if (document.querySelector('.a-1979').classList.contains('escolhido')) {
      ano = 1979
   }

   else if (document.querySelector('.a-1978').classList.contains('escolhido')) {
      ano = 1978
   }

   else if (document.querySelector('.a-1977').classList.contains('escolhido')) {
      ano = 1977
   }

   else if (document.querySelector('.a-1976').classList.contains('escolhido')) {
      ano = 1976
   }

   else if (document.querySelector('.a-1975').classList.contains('escolhido')) {
      ano = 1975
   }

   else if (document.querySelector('.a-1974').classList.contains('escolhido')) {
      ano = 1974
   }

   else if (document.querySelector('.a-1973').classList.contains('escolhido')) {
      ano = 1973
   }

   else if (document.querySelector('.a-1972').classList.contains('escolhido')) {
      ano = 1972
   }

   else if (document.querySelector('.a-1971').classList.contains('escolhido')) {
      ano = 1971
   }

   else if (document.querySelector('.a-1970').classList.contains('escolhido')) {
      ano = 1970
   }

   else if (document.querySelector('.a-1969').classList.contains('escolhido')) {
      ano = 1969
   }

   else if (document.querySelector('.a-1968').classList.contains('escolhido')) {
      ano = 1968
   }

   else if (document.querySelector('.a-1967').classList.contains('escolhido')) {
      ano = 1967
   }

   else if (document.querySelector('.a-1966').classList.contains('escolhido')) {
      ano = 1966
   }

   else if (document.querySelector('.a-1965').classList.contains('escolhido')) {
      ano = 1965
   }

   else if (document.querySelector('.a-1964').classList.contains('escolhido')) {
      ano = 1964
   }

   else if (document.querySelector('.a-1963').classList.contains('escolhido')) {
      ano = 1963
   }

   else if (document.querySelector('.a-1962').classList.contains('escolhido')) {
      ano = 1962
   }

   else if (document.querySelector('.a-1961').classList.contains('escolhido')) {
      ano = 1961
   }

   else if (document.querySelector('.a-1960').classList.contains('escolhido')) {
      ano = 1960
   }

   else if (document.querySelector('.a-1959').classList.contains('escolhido')) {
      ano = 1959
   }

   else if (document.querySelector('.a-1958').classList.contains('escolhido')) {
      ano = 1958
   }

   else if (document.querySelector('.a-1957').classList.contains('escolhido')) {
      ano = 1957
   }

   else if (document.querySelector('.a-1956').classList.contains('escolhido')) {
      ano = 1956
   }

   else if (document.querySelector('.a-1955').classList.contains('escolhido')) {
      ano = 1955
   }

   else if (document.querySelector('.a-1954').classList.contains('escolhido')) {
      ano = 1954
   }

   else if (document.querySelector('.a-1953').classList.contains('escolhido')) {
      ano = 1953
   }

   else if (document.querySelector('.a-1952').classList.contains('escolhido')) {
      ano = 1952
   }

   else if (document.querySelector('.a-1951').classList.contains('escolhido')) {
      ano = 1951
   }

   else if (document.querySelector('.a-1950').classList.contains('escolhido')) {
      ano = 1950
   }

   else if (document.querySelector('.a-1949').classList.contains('escolhido')) {
      ano = 1949
   }

   else if (document.querySelector('.a-1948').classList.contains('escolhido')) {
      ano = 1948
   }

   else if (document.querySelector('.a-1947').classList.contains('escolhido')) {
      ano = 1947
   }

   else if (document.querySelector('.a-1946').classList.contains('escolhido')) {
      ano = 1946
   }

   else if (document.querySelector('.a-1945').classList.contains('escolhido')) {
      ano = 1945
   }

   else if (document.querySelector('.a-1944').classList.contains('escolhido')) {
      ano = 1944
   }

   else if (document.querySelector('.a-1943').classList.contains('escolhido')) {
      ano = 1943
   }

   else if (document.querySelector('.a-1942').classList.contains('escolhido')) {
      ano = 1942
   }

   else if (document.querySelector('.a-1941').classList.contains('escolhido')) {
      ano = 1941
   }

   else if (document.querySelector('.a-1940').classList.contains('escolhido')) {
      ano = 1940
   }

   else if (document.querySelector('.a-1939').classList.contains('escolhido')) {
      ano = 1939
   }

   else if (document.querySelector('.a-1938').classList.contains('escolhido')) {
      ano = 1938
   }

   else if (document.querySelector('.a-1937').classList.contains('escolhido')) {
      ano = 1937
   }

   else if (document.querySelector('.a-1936').classList.contains('escolhido')) {
      ano = 1936
   }

   else if (document.querySelector('.a-1935').classList.contains('escolhido')) {
      ano = 1935
   }

   else if (document.querySelector('.a-1934').classList.contains('escolhido')) {
      ano = 1934
   }

   else if (document.querySelector('.a-1933').classList.contains('escolhido')) {
      ano = 1933
   }

   else if (document.querySelector('.a-1932').classList.contains('escolhido')) {
      ano = 1932
   }

   if (mesDe.janeiro.classList.contains('escolhido')) {
      mes = 1
   }

   else if (mesDe.fevereiro.classList.contains('escolhido')) {
      mes = 2
   }
   
   else if (mesDe.marco.classList.contains('escolhido')) {
      mes = 3
   }

   else if (mesDe.abril.classList.contains('escolhido')) {
      mes = 4
   }

   else if (mesDe.maio.classList.contains('escolhido')) {
      mes = 5
   }
   
   else if (mesDe.junho.classList.contains('escolhido')) {
      mes = 6
   }

   else if (mesDe.julho.classList.contains('escolhido')) {
      mes = 7
   }

   else if (mesDe.agosto.classList.contains('escolhido')) {
      mes = 8
   }

   else if (mesDe.setembro.classList.contains('escolhido')) {
      mes = 9
   }

   else if (mesDe.outubro.classList.contains('escolhido')) {
      mes = 10
   }

   else if (mesDe.novembro.classList.contains('escolhido')) {
      mes = 11
   }

   else if (mesDe.dezembro.classList.contains('escolhido')) {
      mes = 12
   }

   if (document.querySelector('.d-1').classList.contains('escolhido')) {
      dia = 1
   }

   else if (document.querySelector('.d-2').classList.contains('escolhido')) {
      dia = 2
   }

   else if (document.querySelector('.d-3').classList.contains('escolhido')) {
      dia = 3
   }

   else if (document.querySelector('.d-4').classList.contains('escolhido')) {
      dia = 4
   }

   else if (document.querySelector('.d-5').classList.contains('escolhido')) {
      dia = 5
   }

   else if (document.querySelector('.d-6').classList.contains('escolhido')) {
      dia = 6
   }

   else if (document.querySelector('.d-7').classList.contains('escolhido')) {
      dia = 7
   }

   else if (document.querySelector('.d-8').classList.contains('escolhido')) {
      dia = 8
   }

   else if (document.querySelector('.d-9').classList.contains('escolhido')) {
      dia = 9
   }

   else if (document.querySelector('.d-10').classList.contains('escolhido')) {
      dia = 10
   }

   else if (document.querySelector('.d-11').classList.contains('escolhido')) {
      dia = 11
   }

   else if (document.querySelector('.d-12').classList.contains('escolhido')) {
      dia = 12
   }

   else if (document.querySelector('.d-13').classList.contains('escolhido')) {
      dia = 13
   }

   else if (document.querySelector('.d-14').classList.contains('escolhido')) {
      dia = 14
   }

   else if (document.querySelector('.d-15').classList.contains('escolhido')) {
      dia = 15
   }

   else if (document.querySelector('.d-16').classList.contains('escolhido')) {
      dia = 16
   }

   else if (document.querySelector('.d-17').classList.contains('escolhido')) {
      dia = 17
   }

   else if (document.querySelector('.d-18').classList.contains('escolhido')) {
      dia = 18
   }

   else if (document.querySelector('.d-19').classList.contains('escolhido')) {
      dia = 19
   }

   else if (document.querySelector('.d-20').classList.contains('escolhido')) {
      dia = 20
   }

   else if (document.querySelector('.d-21').classList.contains('escolhido')) {
      dia = 21
   }

   else if (document.querySelector('.d-22').classList.contains('escolhido')) {
      dia = 22
   }

   else if (document.querySelector('.d-23').classList.contains('escolhido')) {
      dia = 23
   }

   else if (document.querySelector('.d-24').classList.contains('escolhido')) {
      dia = 24
   }

   else if (document.querySelector('.d-25').classList.contains('escolhido')) {
      dia = 25
   }

   else if (document.querySelector('.d-26').classList.contains('escolhido')) {
      dia = 26
   }

   else if (document.querySelector('.d-27').classList.contains('escolhido')) {
      dia = 27
   }

   else if (document.querySelector('.d-28').classList.contains('escolhido')) {
      dia = 28
   }

   else if (document.querySelector('.d-29').classList.contains('escolhido')) {
      dia = 29
   }

   else if (document.querySelector('.d-30').classList.contains('escolhido')) {
      dia = 30
   }

   else if (document.querySelector('.d-31').classList.contains('escolhido')) {
      dia = 31
   }
   
   dataNascimentoUser.style.background = '#F2F2F2'
   dataNascimentoUser.style.color = 'black'

   dataNascimentoUser.style.animation = 'none'
   dataNascimentoUser.style.border = '.1rem solid transparent'

   dataNascimentoUser.style.backgroundClip = 'none'
   dataNascimentoUser.style.opacity = '.8'
   dataNascimentoUser.style.fontFamily = "'Baloo Thambi 2', cursive"

   if (mes >= 10 && dia >= 10) {
      dataNascimentoUser.value = `${ano}-${mes}-${dia}`
   }

   else if (mes <= 9 && dia <= 9) {
      dataNascimentoUser.value = `${ano}-0${mes}-0${dia}`
   }

   else if (dia <= 9 && mes >= 10) {
      dataNascimentoUser.value = `${ano}-${mes}-0${dia}`
   }

   else if (mes <= 9 && dia >= 10) {
      dataNascimentoUser.value = `${ano}-0${mes}-${dia}`
   }
}

function retira_calendario() {
   modifica.cobreTelaDoCalendario.style.display = 'none'
   modifica.calendario.style.display = 'none'
}

modifica.cobreTelaDoCalendario.onclick = () => { 
   retira_calendario()
   insere_nascimento() 
}

document.querySelector('#fecha-calendario').onclick = () => {    
   retira_calendario()
   insere_nascimento() 
}

document.querySelector("#resultado-calendario").onclick = () =>  { 
   retira_calendario() 
   insere_nascimento()
}

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

function retorna_parte_principal_calendario() {
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

modifica.setaDeVoltarCalendario.onclick = () => {
   retorna_parte_principal_calendario()
}

document.querySelectorAll('.seleciona').forEach((tags) =>
   tags.addEventListener('click', () => {
      retorna_parte_principal_calendario()
   })
)

function remove_background_dos_meses() {
   mesDe.janeiro.classList.remove('escolhido')
   mesDe.fevereiro.classList.remove('escolhido')
   mesDe.marco.classList.remove('escolhido')

   mesDe.abril.classList.remove('escolhido')
   mesDe.maio.classList.remove('escolhido')
   mesDe.junho.classList.remove('escolhido')

   mesDe.julho.classList.remove('escolhido')
   mesDe.agosto.classList.remove('escolhido')
   mesDe.setembro.classList.remove('escolhido')

   mesDe.outubro.classList.remove('escolhido')
   mesDe.novembro.classList.remove('escolhido')
   mesDe.dezembro.classList.remove('escolhido')
}

function ativa_dias_finais_do_mes() {
   document.querySelector('.d-29').style.display = 'block'
   document.querySelector('.d-30').style.display = 'block'
   document.querySelector('.d-31').style.display = 'block'
}

function container_dias_finais_completo() {
   modifica.containerAjustavel.classList.remove('ajustavel')
}

function container_dias_finais_flexivel() {
   modifica.containerAjustavel.classList.add('ajustavel')
}

mesDe.janeiro.onclick = () => {
   container_dias_finais_completo()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   mesDe.janeiro.classList.add('escolhido')
   modifica.mes.innerHTML = 'Janeiro'
}

mesDe.fevereiro.onclick = () => {
   container_dias_finais_completo()
   remove_background_dos_meses()

   mesDe.fevereiro.classList.add('escolhido')
   modifica.mes.innerHTML = 'Fevereiro'
   
   document.querySelector('.d-30').style.display = 'none'
   document.querySelector('.d-31').style.display = 'none'

   if (ano == 1924 || ano == 1928 || ano == 1932 || ano == 1936 || ano == 1940 || ano == 1944 || ano == 1948 || ano == 1952 || ano == 1956 || ano == 1960 || ano == 1964 || ano == 1968 || ano == 1972 || ano == 1976 || ano == 1980 || ano == 1984 || ano == 1988 || ano == 1992 || ano == 1996 || ano == 2000 || ano == 2004 || ano == 2008 || ano == 2012 || ano == 2016) {
      document.querySelector('.d-29').style.display = 'block'
   }

   else {
      document.querySelector('.d-29').style.display = 'none'
   }
}

mesDe.marco.onclick = () => {
   container_dias_finais_completo()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   mesDe.marco.classList.add('escolhido')
   modifica.mes.innerHTML = 'Março'
}

mesDe.abril.onclick = () => {
   container_dias_finais_flexivel()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   document.querySelector('.d-31').style.display = 'none'
   mesDe.abril.classList.add('escolhido')
   modifica.mes.innerHTML = 'Abril'
}

mesDe.maio.onclick = () => {
   container_dias_finais_flexivel()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   document.querySelector('.d-31').style.display = 'none'
   mesDe.maio.classList.add('escolhido')
   modifica.mes.innerHTML = 'Maio'
}

mesDe.junho.onclick = () => {
   container_dias_finais_flexivel()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   document.querySelector('.d-31').style.display = 'none'
   mesDe.junho.classList.add('escolhido')
   modifica.mes.innerHTML = 'Junho'
}

mesDe.julho.onclick = () => {
   container_dias_finais_completo()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   mesDe.julho.classList.add('escolhido')
   modifica.mes.innerHTML = 'Julho'
}

mesDe.agosto.onclick = () => {
   container_dias_finais_completo()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   mesDe.agosto.classList.add('escolhido')
   modifica.mes.innerHTML = 'Agosto'
}

mesDe.setembro.onclick = () => {
   container_dias_finais_flexivel()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   document.querySelector('.d-31').style.display = 'none'
   mesDe.setembro.classList.add('escolhido')
   modifica.mes.innerHTML = 'Setembro'
}

mesDe.outubro.onclick = () => {
   container_dias_finais_flexivel()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   document.querySelector('.d-31').style.display = 'none'
   mesDe.outubro.classList.add('escolhido')
   modifica.mes.innerHTML = 'Outubro'
}

mesDe.novembro.onclick = () => {
   container_dias_finais_flexivel()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   document.querySelector('.d-31').style.display = 'none'
   mesDe.novembro.classList.add('escolhido')
   modifica.mes.innerHTML = 'Novembro'
}

mesDe.dezembro.onclick = () => {
   container_dias_finais_completo()
   remove_background_dos_meses()
   ativa_dias_finais_do_mes()

   mesDe.dezembro.classList.add('escolhido')
   modifica.mes.innerHTML = 'Dezembro'
}

function remove_background_dos_dias() {
   document.querySelector('.d-1').classList.remove('escolhido')
   document.querySelector('.d-2').classList.remove('escolhido')
   document.querySelector('.d-3').classList.remove('escolhido')

   document.querySelector('.d-4').classList.remove('escolhido')
   document.querySelector('.d-5').classList.remove('escolhido')
   document.querySelector('.d-6').classList.remove('escolhido')

   document.querySelector('.d-7').classList.remove('escolhido')
   document.querySelector('.d-8').classList.remove('escolhido')
   document.querySelector('.d-9').classList.remove('escolhido')

   document.querySelector('.d-10').classList.remove('escolhido')
   document.querySelector('.d-11').classList.remove('escolhido')
   document.querySelector('.d-12').classList.remove('escolhido')

   document.querySelector('.d-13').classList.remove('escolhido')
   document.querySelector('.d-14').classList.remove('escolhido')
   document.querySelector('.d-15').classList.remove('escolhido')

   document.querySelector('.d-16').classList.remove('escolhido')
   document.querySelector('.d-17').classList.remove('escolhido')
   document.querySelector('.d-18').classList.remove('escolhido')

   document.querySelector('.d-19').classList.remove('escolhido')
   document.querySelector('.d-20').classList.remove('escolhido')
   document.querySelector('.d-21').classList.remove('escolhido')

   document.querySelector('.d-22').classList.remove('escolhido')
   document.querySelector('.d-23').classList.remove('escolhido')
   document.querySelector('.d-24').classList.remove('escolhido')

   document.querySelector('.d-25').classList.remove('escolhido')
   document.querySelector('.d-26').classList.remove('escolhido')
   document.querySelector('.d-27').classList.remove('escolhido')

   document.querySelector('.d-28').classList.remove('escolhido')
   document.querySelector('.d-29').classList.remove('escolhido')
   document.querySelector('.d-30').classList.remove('escolhido')
   document.querySelector('.d-31').classList.remove('escolhido')
}

document.querySelector('.d-1').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-1').classList.add('escolhido')
}

document.querySelector('.d-2').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-2').classList.add('escolhido')
}

document.querySelector('.d-3').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-3').classList.add('escolhido')
}

document.querySelector('.d-4').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-4').classList.add('escolhido')
}

document.querySelector('.d-5').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-5').classList.add('escolhido')
}

document.querySelector('.d-6').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-6').classList.add('escolhido')
}

document.querySelector('.d-7').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-7').classList.add('escolhido')
}

document.querySelector('.d-8').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-8').classList.add('escolhido')
}

document.querySelector('.d-9').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-9').classList.add('escolhido')
}

document.querySelector('.d-10').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-10').classList.add('escolhido')
}

document.querySelector('.d-11').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-11').classList.add('escolhido')
}

document.querySelector('.d-12').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-12').classList.add('escolhido')
}

document.querySelector('.d-13').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-13').classList.add('escolhido')
}

document.querySelector('.d-14').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-14').classList.add('escolhido')
}

document.querySelector('.d-15').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-15').classList.add('escolhido')
}

document.querySelector('.d-16').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-16').classList.add('escolhido')
}

document.querySelector('.d-17').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-17').classList.add('escolhido')
}

document.querySelector('.d-18').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-18').classList.add('escolhido')
}

document.querySelector('.d-19').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-19').classList.add('escolhido')
}

document.querySelector('.d-20').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-20').classList.add('escolhido')
}

document.querySelector('.d-21').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-21').classList.add('escolhido')
}

document.querySelector('.d-22').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-22').classList.add('escolhido')
}

document.querySelector('.d-23').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-23').classList.add('escolhido')
}

document.querySelector('.d-24').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-24').classList.add('escolhido')
}

document.querySelector('.d-25').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-25').classList.add('escolhido')
}

document.querySelector('.d-26').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-26').classList.add('escolhido')
}

document.querySelector('.d-27').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-27').classList.add('escolhido')
}

document.querySelector('.d-28').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-28').classList.add('escolhido')
}

document.querySelector('.d-29').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-29').classList.add('escolhido')
}

document.querySelector('.d-30').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-30').classList.add('escolhido')
}

document.querySelector('.d-31').onclick = () => {
   remove_background_dos_dias()
   document.querySelector('.d-31').classList.add('escolhido')
}

function remove_background_anos() {
   document.querySelector('.a-2016').classList.remove("escolhido")
   document.querySelector('.a-2015').classList.remove("escolhido")
   document.querySelector('.a-2014').classList.remove("escolhido")

   document.querySelector('.a-2013').classList.remove("escolhido")
   document.querySelector('.a-2012').classList.remove("escolhido")
   document.querySelector('.a-2011').classList.remove("escolhido")

   document.querySelector('.a-2010').classList.remove("escolhido")
   document.querySelector('.a-2009').classList.remove("escolhido")
   document.querySelector('.a-2008').classList.remove("escolhido")

   document.querySelector('.a-2007').classList.remove("escolhido")
   document.querySelector('.a-2006').classList.remove("escolhido")
   document.querySelector('.a-2005').classList.remove("escolhido")

   document.querySelector('.a-2004').classList.remove("escolhido")
   document.querySelector('.a-2003').classList.remove("escolhido")
   document.querySelector('.a-2002').classList.remove("escolhido")

   document.querySelector('.a-2001').classList.remove("escolhido")
   document.querySelector('.a-2000').classList.remove("escolhido")
   document.querySelector('.a-1999').classList.remove("escolhido")

   document.querySelector('.a-1998').classList.remove("escolhido")
   document.querySelector('.a-1997').classList.remove("escolhido")
   document.querySelector('.a-1996').classList.remove("escolhido")

   document.querySelector('.a-1995').classList.remove("escolhido")
   document.querySelector('.a-1994').classList.remove("escolhido")
   document.querySelector('.a-1993').classList.remove("escolhido")

   document.querySelector('.a-1992').classList.remove("escolhido")
   document.querySelector('.a-1991').classList.remove("escolhido")
   document.querySelector('.a-1990').classList.remove("escolhido")

   document.querySelector('.a-1989').classList.remove("escolhido")
   document.querySelector('.a-1988').classList.remove("escolhido")
   document.querySelector('.a-1987').classList.remove("escolhido")

   document.querySelector('.a-1986').classList.remove("escolhido")
   document.querySelector('.a-1985').classList.remove("escolhido")
   document.querySelector('.a-1984').classList.remove("escolhido")

   document.querySelector('.a-1983').classList.remove("escolhido")
   document.querySelector('.a-1982').classList.remove("escolhido")
   document.querySelector('.a-1981').classList.remove("escolhido")

   document.querySelector('.a-1980').classList.remove("escolhido")
   document.querySelector('.a-1979').classList.remove("escolhido")
   document.querySelector('.a-1978').classList.remove("escolhido")

   document.querySelector('.a-1977').classList.remove("escolhido")
   document.querySelector('.a-1976').classList.remove("escolhido")
   document.querySelector('.a-1975').classList.remove("escolhido")

   document.querySelector('.a-1974').classList.remove("escolhido")
   document.querySelector('.a-1973').classList.remove("escolhido")
   document.querySelector('.a-1972').classList.remove("escolhido")

   document.querySelector('.a-1971').classList.remove("escolhido")
   document.querySelector('.a-1970').classList.remove("escolhido")
   document.querySelector('.a-1969').classList.remove("escolhido")

   document.querySelector('.a-1968').classList.remove("escolhido")
   document.querySelector('.a-1967').classList.remove("escolhido")
   document.querySelector('.a-1966').classList.remove("escolhido")

   document.querySelector('.a-1965').classList.remove("escolhido")
   document.querySelector('.a-1964').classList.remove("escolhido")
   document.querySelector('.a-1963').classList.remove("escolhido")

   document.querySelector('.a-1962').classList.remove("escolhido")
   document.querySelector('.a-1961').classList.remove("escolhido")
   document.querySelector('.a-1960').classList.remove("escolhido")

   document.querySelector('.a-1959').classList.remove("escolhido")
   document.querySelector('.a-1958').classList.remove("escolhido")
   document.querySelector('.a-1957').classList.remove("escolhido")

   document.querySelector('.a-1956').classList.remove("escolhido")
   document.querySelector('.a-1955').classList.remove("escolhido")
   document.querySelector('.a-1954').classList.remove("escolhido")

   document.querySelector('.a-1953').classList.remove("escolhido")
   document.querySelector('.a-1952').classList.remove("escolhido")
   document.querySelector('.a-1951').classList.remove("escolhido")

   document.querySelector('.a-1950').classList.remove("escolhido")
   document.querySelector('.a-1949').classList.remove("escolhido")
   document.querySelector('.a-1948').classList.remove("escolhido")

   document.querySelector('.a-1947').classList.remove("escolhido")
   document.querySelector('.a-1946').classList.remove("escolhido")
   document.querySelector('.a-1945').classList.remove("escolhido")

   document.querySelector('.a-1944').classList.remove("escolhido")
   document.querySelector('.a-1943').classList.remove("escolhido")
   document.querySelector('.a-1942').classList.remove("escolhido")

   document.querySelector('.a-1941').classList.remove("escolhido")
   document.querySelector('.a-1940').classList.remove("escolhido")
   document.querySelector('.a-1939').classList.remove("escolhido")

   document.querySelector('.a-1938').classList.remove("escolhido")
   document.querySelector('.a-1937').classList.remove("escolhido")
   document.querySelector('.a-1936').classList.remove("escolhido")

   document.querySelector('.a-1935').classList.remove("escolhido")
   document.querySelector('.a-1934').classList.remove("escolhido")
   document.querySelector('.a-1933').classList.remove("escolhido")
   document.querySelector('.a-1932').classList.remove("escolhido")
}  

document.querySelector('.a-2016').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2016').classList.add('escolhido')
   modifica.ano.innerHTML = '2016'
}

document.querySelector('.a-2015').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2015').classList.add('escolhido')
   modifica.ano.innerHTML = '2015'
}

document.querySelector('.a-2014').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2014').classList.add('escolhido')
   modifica.ano.innerHTML = '2014'
}

document.querySelector('.a-2013').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2013').classList.add('escolhido')
   modifica.ano.innerHTML = '2013'
}

document.querySelector('.a-2012').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2012').classList.add('escolhido')
   modifica.ano.innerHTML = '2012'
}

document.querySelector('.a-2011').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2011').classList.add('escolhido')
   modifica.ano.innerHTML = '2011'
}

document.querySelector('.a-2010').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2010').classList.add('escolhido')
   modifica.ano.innerHTML = '2010'
}

document.querySelector('.a-2009').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2009').classList.add('escolhido')
   modifica.ano.innerHTML = '2009'
}

document.querySelector('.a-2008').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2008').classList.add('escolhido')
   modifica.ano.innerHTML = '2008'
}

document.querySelector('.a-2007').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2007').classList.add('escolhido')
   modifica.ano.innerHTML = '2007'
}

document.querySelector('.a-2006').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2006').classList.add('escolhido')
   modifica.ano.innerHTML = '2006'
}

document.querySelector('.a-2005').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2005').classList.add('escolhido')
   modifica.ano.innerHTML = '2005'
}

document.querySelector('.a-2004').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2004').classList.add('escolhido')
   modifica.ano.innerHTML = '2004'
}

document.querySelector('.a-2003').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2003').classList.add('escolhido')
   modifica.ano.innerHTML = '2003'
}

document.querySelector('.a-2002').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2002').classList.add('escolhido')
   modifica.ano.innerHTML = '2002'
}

document.querySelector('.a-2001').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2001').classList.add('escolhido')
   modifica.ano.innerHTML = '2001'
}

document.querySelector('.a-2000').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-2000').classList.add('escolhido')
   modifica.ano.innerHTML = '2000'
}

document.querySelector('.a-1999').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1999').classList.add('escolhido')
   modifica.ano.innerHTML = '1999'
}

document.querySelector('.a-1998').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1998').classList.add('escolhido')
   modifica.ano.innerHTML = '1998'
}

document.querySelector('.a-1997').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1997').classList.add('escolhido')
   modifica.ano.innerHTML = '1997'
}

document.querySelector('.a-1996').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1996').classList.add('escolhido')
   modifica.ano.innerHTML = '1996'
}

document.querySelector('.a-1995').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1995').classList.add('escolhido')
   modifica.ano.innerHTML = '1995'
}

document.querySelector('.a-1994').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1994').classList.add('escolhido')
   modifica.ano.innerHTML = '1994'
}

document.querySelector('.a-1993').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1993').classList.add('escolhido')
   modifica.ano.innerHTML = '1993'
}

document.querySelector('.a-1992').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1992').classList.add('escolhido')
   modifica.ano.innerHTML = '1992'
}

document.querySelector('.a-1991').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1991').classList.add('escolhido')
   modifica.ano.innerHTML = '1991'
}

document.querySelector('.a-1990').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1990').classList.add('escolhido')
   modifica.ano.innerHTML = '1990'
}

document.querySelector('.a-1989').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1989').classList.add('escolhido')
   modifica.ano.innerHTML = '1989'
}

document.querySelector('.a-1988').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1988').classList.add('escolhido')
   modifica.ano.innerHTML = '1988'
}

document.querySelector('.a-1987').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1987').classList.add('escolhido')
   modifica.ano.innerHTML = '1987'
}

document.querySelector('.a-1986').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1986').classList.add('escolhido')
   modifica.ano.innerHTML = '1986'
}

document.querySelector('.a-1985').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1985').classList.add('escolhido')
   modifica.ano.innerHTML = '1985'
}

document.querySelector('.a-1984').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1984').classList.add('escolhido')
   modifica.ano.innerHTML = '1984'
}

document.querySelector('.a-1983').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1983').classList.add('escolhido')
   modifica.ano.innerHTML = '1983'
}

document.querySelector('.a-1982').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1982').classList.add('escolhido')
   modifica.ano.innerHTML = '1982'
}

document.querySelector('.a-1981').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1981').classList.add('escolhido')
   modifica.ano.innerHTML = '1981'
}

document.querySelector('.a-1980').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1980').classList.add('escolhido')
   modifica.ano.innerHTML = '1980'
}

document.querySelector('.a-1979').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1979').classList.add('escolhido')
   modifica.ano.innerHTML = '1979'
}

document.querySelector('.a-1978').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1978').classList.add('escolhido')
   modifica.ano.innerHTML = '1978'
}

document.querySelector('.a-1977').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1977').classList.add('escolhido')
   modifica.ano.innerHTML = '1977'
}

document.querySelector('.a-1976').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1976').classList.add('escolhido')
   modifica.ano.innerHTML = '1976'
}

document.querySelector('.a-1975').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1975').classList.add('escolhido')
   modifica.ano.innerHTML = '1975'
}

document.querySelector('.a-1974').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1974').classList.add('escolhido')
   modifica.ano.innerHTML = '1974'
}

document.querySelector('.a-1973').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1973').classList.add('escolhido')
   modifica.ano.innerHTML = '1973'
}

document.querySelector('.a-1972').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1972').classList.add('escolhido')
   modifica.ano.innerHTML = '1972'
}

document.querySelector('.a-1971').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1971').classList.add('escolhido')
   modifica.ano.innerHTML = '1971'
}

document.querySelector('.a-1970').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1970').classList.add('escolhido')
   modifica.ano.innerHTML = '1970'
}

document.querySelector('.a-1969').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1969').classList.add('escolhido')
   modifica.ano.innerHTML = '1969'
}

document.querySelector('.a-1968').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1968').classList.add('escolhido')
   modifica.ano.innerHTML = '1968'
}

document.querySelector('.a-1967').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1967').classList.add('escolhido')
   modifica.ano.innerHTML = '1967'
}

document.querySelector('.a-1966').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1966').classList.add('escolhido')
   modifica.ano.innerHTML = '1966'
}

document.querySelector('.a-1965').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1965').classList.add('escolhido')
   modifica.ano.innerHTML = '1965'
}

document.querySelector('.a-1964').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1964').classList.add('escolhido')
   modifica.ano.innerHTML = '1964'
}

document.querySelector('.a-1963').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1963').classList.add('escolhido')
   modifica.ano.innerHTML = '1963'
}

document.querySelector('.a-1962').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1962').classList.add('escolhido')
   modifica.ano.innerHTML = '1962'
}

document.querySelector('.a-1961').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1961').classList.add('escolhido')
   modifica.ano.innerHTML = '1961'
}

document.querySelector('.a-1960').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1960').classList.add('escolhido')
   modifica.ano.innerHTML = '1960'
}

document.querySelector('.a-1959').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1959').classList.add('escolhido')
   modifica.ano.innerHTML = '1959'
}

document.querySelector('.a-1958').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1958').classList.add('escolhido')
   modifica.ano.innerHTML = '1958'
}

document.querySelector('.a-1957').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1957').classList.add('escolhido')
   modifica.ano.innerHTML = '1957'
}

document.querySelector('.a-1956').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1956').classList.add('escolhido')
   modifica.ano.innerHTML = '1956'
}

document.querySelector('.a-1955').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1955').classList.add('escolhido')
   modifica.ano.innerHTML = '1955'
}

document.querySelector('.a-1954').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1954').classList.add('escolhido')
   modifica.ano.innerHTML = '1954'
}

document.querySelector('.a-1953').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1953').classList.add('escolhido')
   modifica.ano.innerHTML = '1953'
}

document.querySelector('.a-1952').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1952').classList.add('escolhido')
   modifica.ano.innerHTML = '1952'
}

document.querySelector('.a-1951').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1951').classList.add('escolhido')
   modifica.ano.innerHTML = '1951'
}

document.querySelector('.a-1950').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1950').classList.add('escolhido')
   modifica.ano.innerHTML = '1950'
}

document.querySelector('.a-1949').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1949').classList.add('escolhido')
   modifica.ano.innerHTML = '1949'
}

document.querySelector('.a-1948').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1948').classList.add('escolhido')
   modifica.ano.innerHTML = '1948'
}

document.querySelector('.a-1947').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1947').classList.add('escolhido')
   modifica.ano.innerHTML = '1947'
}

document.querySelector('.a-1946').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1946').classList.add('escolhido')
   modifica.ano.innerHTML = '1946'
}

document.querySelector('.a-1945').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1945').classList.add('escolhido')
   modifica.ano.innerHTML = '1945'
}

document.querySelector('.a-1944').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1944').classList.add('escolhido')
   modifica.ano.innerHTML = '1944'
}

document.querySelector('.a-1943').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1943').classList.add('escolhido')
   modifica.ano.innerHTML = '1943'
}

document.querySelector('.a-1942').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1942').classList.add('escolhido')
   modifica.ano.innerHTML = '1942'
}

document.querySelector('.a-1941').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1941').classList.add('escolhido')
   modifica.ano.innerHTML = '1941'
}

document.querySelector('.a-1940').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1940').classList.add('escolhido')
   modifica.ano.innerHTML = '1940'
}

document.querySelector('.a-1939').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1939').classList.add('escolhido')
   modifica.ano.innerHTML = '1939'
}

document.querySelector('.a-1938').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1938').classList.add('escolhido')
   modifica.ano.innerHTML = '1938'
}

document.querySelector('.a-1937').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1937').classList.add('escolhido')
   modifica.ano.innerHTML = '1937'
}

document.querySelector('.a-1936').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1936').classList.add('escolhido')
   modifica.ano.innerHTML = '1936'
}

document.querySelector('.a-1935').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1935').classList.add('escolhido')
   modifica.ano.innerHTML = '1935'
}

document.querySelector('.a-1934').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1934').classList.add('escolhido')
   modifica.ano.innerHTML = '1934'
}

document.querySelector('.a-1933').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1933').classList.add('escolhido')
   modifica.ano.innerHTML = '1933'
}

document.querySelector('.a-1932').onclick = () => {
   remove_background_anos()

   document.querySelector('.a-1932').classList.add('escolhido')
   modifica.ano.innerHTML = '1932'
}