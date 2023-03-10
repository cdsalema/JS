function getPreco(imposto = 0.1, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4299,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.12, '$'))
console.log(getPreco.apply(carro, [0.16, '$']))