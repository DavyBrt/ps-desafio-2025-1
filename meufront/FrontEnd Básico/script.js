let nome = "Vincenzo"
var sobrenome = "Tognere Polonini"
const pi = 3.14

// função padrão
function imprimir1(valor) {
    console.log(valor)
}

// função anonima
const imprimir2 = function(valor) {
    console.log(valor)
}

// função arrow
const imprimir3 = (valor) => {
    console.log(valor)
}

imprimir1(nome)
imprimir2(sobrenome)
imprimir3(pi)

let idade = 20

function envelhecer(valor) {
    return valor + 1
}

const envelhecer2 = (valor) => {
    return valor + 2
}

const envelhecer3 = valor => {
    return valor + 3
}

const envelhecer4 = valor => valor + 4

console.log(envelhecer(idade))
console.log(envelhecer2(idade))
console.log(envelhecer3(idade))
console.log(envelhecer4(idade))

const adicionarCard = () => {
    let cardExemplo = document.querySelector("#card-exemplo")
    // console.log(cardExemplo)

    let novoCard = cardExemplo.cloneNode(true)
    novoCard.removeAttribute("id")
    console.log(novoCard)

    let container = document.querySelector("#container")
    container.appendChild(novoCard)

    // container.style.backgroundColor = "blue"
}
