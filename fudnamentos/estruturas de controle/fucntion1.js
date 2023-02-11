//armazenar funcao dentro de variavel
const imprimirSoma=function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//armazenando um funcao (arrow ( => )) - em uma variavel

const soma=(a,b)=>{ // substitui a declaracao da palavra function pela =>
    return a+b
}
console.log(soma(2,4))

const subtracao=(a,b)=> a-b //return implicito = abrevia mais a declaracao da function retirando a palavra function e o return apenas usando => Obs: so utilizado pra funcoes com somente 1 sentenca de codigo.
console.log(subtracao(10,6))

//caso seja uma funcao de 1 unico parametro pode abreviar mais 
const valor2 = a => console.log(a)
valor2('Muito curto!!')

