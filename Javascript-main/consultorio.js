// criar referência as elementos do html

const frm = document.querySelector("form") // .querySelector() -> seleciona o elemento a ser referenciado
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // declara o vetor global; colchetes declara vetor

frm.addEventListener("submit",(e) => { // executar função depois do evento acontecer
    e.preventDefault()// formulario não enviar dados
    const nome = frm.inPaciente.value // obtem o nome do paciente
    pacientes.push(nome) // adiciona o nome do paciente
    console.log(pacientes)
    let lista = "" // string para concatenar pacientes
    for (let i=0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]} \n` // o que está dentro das crases é string, o que não é tem o cifrão na frente
    }
    respLista.innerText = lista /* exibe a lista de pacientes;
                                .inerText -> retorna só o texto sem espaçamento e tags de elemento interno*/
    frm.inPaciente.value = "" //limpa o conteúdo do campo
    frm.inPaciente.focus() //posiciona o cursor piscante no campo 
})

frm.btnUrgencia.addEventListener("click", () => {
    //verifica validações
    if(!frm.checkValidity()){ //o sinal de exclamação é negação
        alert("Informe o paciente em urgência")
        frm.inPaciente.focus()
        return//retorna ao form
    }
    const nome = frm.inPaciente.value // obtem o nome do paciente
    pacientes.unshift(nome) //adiciona o nome do paciente no inicio
    console.log(pacientes)
    let lista = "" // string para concatenar pacientes
    pacientes.forEach((paciente, i)=>( lista += `${i + 1}. ${pacientes[i]} \n`))
    respLista.innerText = lista /* exibe a lista de pacientes;
                                .inerText -> retorna só o texto sem espaçamento e tags de elemento interno*/
    frm.inPaciente.value = "" //limpa o conteúdo do campo
    frm.inPaciente.focus() //posiciona o cursor piscante no campo
})

frm.btnAtender.addEventListener("click", () =>{
    const nome = frm.inPaciente.value // obtem o nome do paciente
    pacientes.shift(nome) //remove o nome do paciente no inicio
    console.log(pacientes)
    let lista = "" // string para concatenar pacientes
    pacientes.forEach((paciente, i)=>( lista += `${i + 1}. ${pacientes[i]} \n`))
    respLista.innerText = lista /* exibe a lista de pacientes;
                                .inerText -> retorna só o texto sem espaçamento e tags de elemento interno*/
    frm.inPaciente.value = "" //limpa o conteúdo do campo
    frm.inPaciente.focus() //posiciona o cursor piscante no campo
})

