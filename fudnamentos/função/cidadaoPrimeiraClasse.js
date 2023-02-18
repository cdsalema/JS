//Funcao em Js é First-class Object (Citizens)
//Higher order function

//Cirar funçao de forma literal - sentanca em bloco é obrigatorio - fucnao pode ou nao retornar valor. para returnor valor deve-se usar RETURN
function fun1(){}

//armazenar em uma variavel
const fun2= function(){} // dessa forma a funcao fica armazenada em uma variavel.caso chame a variel FUN2 vc estara envocando a funcao nela armazenada.

//armazenar em um array
const array=[function (a,b){ return a+b}, fun1,fun2]
console.log(array[0](2,3))//nesse exemplo chamem a funcao array peguei o indice zero do array e passei os valores para ele calcular a soma.

//amazenar em umatributos de objetos.
const obj={}
obj.falar=function(){return 'OLA'}
console.log(obj.falar())

//passar funcao como parametro par aoutra funcao
function run(fun){
    fun()
}
run(function (){console.log('Executando..')})

//uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(7)
//ou
const soma2 = soma(2,3) //chamei e aramzenei fuction soma passando os valores em soma2 
soma2(7) //e depois  executei a chamada passando o valor da function retornada dentro funcao soma.