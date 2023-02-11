let valor//variavel declarada mas não inicializada (undefined)
console.log(valor)

valor = null // variavel declada vazia sem valor definido.
//undefined - deixar para a liguagem definr
//null - utilizar para casos queria zerar o valor de uma variavel que aponta para determinado endereço de memoria, mas use com concienca que pode gerar erros TypeError caso acesse variavel setada como NULL. 


const a={name:'legal'}
console.log(a)
let b=a // variavel com valor atribuido por referencia | duas variaves apontam para o mesmo endereco de memoria assim qualquer altercao feita no endereço de memoria compartilhada as duas variaveis serão afetadas.
console.log(b)

b.name='chato' // alterei o valor name da variavel b - com isso a variavel a tmb foi modificada.

console.log(b)
console.log(a)// alterei o valor name da variavel b - com isso a variavel a tmb foi modificada.
b=null
console.log(b)
console.log(a)
b=10
console.log(b)

//atribuiçao por valor - sendo valores primitivos e não objetos as variaveis  ficam idependentes mesmo que b1 receba a1.Nesse caso o valor é copiado para b1 e nao compartilhado como no caso anterior.
let a1=3
let b1=a1

b1++
console.log('b1: '+b1)
console.log('a1: '+a1)