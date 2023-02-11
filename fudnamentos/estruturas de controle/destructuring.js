const pessoa={
    nome: "juliana",
    idade:36,
    endereco:{
        logrdouro: 'rua dep soares filho',
        numero:'240'
    }
    
}
//console.log(pessoa)//-> nesse caso acessei as infos da const pessoa. (ok padrao!)
//console.log(nome,idade) // -> nesse caso não consigo somente acessar atributos espeficos da const pessoa. para isso se usa o detructuring logo abaixo.

// destructuring - retira do escopo {pessoa} atributos desejados. Agora todos atributos estão deisponiveis fora desse escopo.
//destructuring : usando {} desistruturo um objeto / usando [] desistruturo um array -  o nome do objeto/array será atribuido após sinal de = da sintaxe.
const {nome, idade}=pessoa // dentro de {} estão os nomes dos atributos que desejo e após = onome do objeto que os atributos pertencem.
console.log(nome,idade)

const{nome: N, idade: I}=pessoa // desta forma estou atribuindo os valores dos atributos do objeto destruturado a 2 variaveis, N e I ;
console.log('nome:'+N,'idade: '+I)

const{sobrenome='Gomes', estCivil= true}=pessoa
console.log(sobrenome, estCivil)
