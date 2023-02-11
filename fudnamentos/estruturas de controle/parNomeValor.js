//par nome/valor
const saudacao='ola!' //contexto léxico - local onde sua variavel foi definida

function exec(){
    const saudacao = "Coé vagabundo!" // contexto léxico (segundo exemplo: dentro de um escopo menor a funcao)
    return saudacao
}

const cliente={
    nome: 'Conrado',
    idade: 38,
    peso: 90,
    endereço:{
        logradouro: 'rua tupinamba',
        numero: 234
    }
}
console.log(saudacao)
console.log(exec ())
console.log(cliente)