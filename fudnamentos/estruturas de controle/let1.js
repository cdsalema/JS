/*
 *diferencas entre LET e VAR:
 *var = escopo global + escopo de funçao
 *let = escopo global + escopo de funçao + escopo de bloco
 *curiosidade: LET foi criado para melhorar a questao do escopo da variavel sem alterar o comportamento do tipo VAR,
 *  pois mudar o comportamento do tipo VAR geraria problema com todos os sistemas já criados anteriormente (quebraria a internet mundial);
 */

var numero=1 
{
    let numero=5
    console.log('dentro:'+ numero)
}
console.log('fora: ' + numero)

