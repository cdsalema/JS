// variavel do tipo var- fica vizivel de forma (global(usada no node.js))ou(window(nome usado em aplicacao usando navegador web))
// -  sendo acessada de qualquer local da aplicação. só será restrita caso esteja dentro de uma função.

{
    {
        {
            {
                {
                    var sera = 'legal!'
                    console.log(sera)
                }
            }
        }
    }
}
console.log(sera)

//var local=321 // apesar dessa variavel ter nome igual da var dentro da function as duas não pertecem ao mesmo escopo. esta é global.
//nesse caso a VAR so fica visivel dentro da função
function teste(){
var local =123 // essa Var local é exclusiva para a funtion nao competindo com a var local global podendo assim co-existir.
console.log(local)
}
teste()
console.log(local)//ERROR - pois a função não pode ser acessada por fora da function
