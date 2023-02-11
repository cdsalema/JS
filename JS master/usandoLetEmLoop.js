//neste exemplo mostra a diferença de LET para o VAR dentro de loops. Let só visivel dentro do seu bloco / loop
for (let i=0; i<=10; i++){
    console.log(i) //somente esse comando console.log pode exergar a variavel i pois ela esta dentro do mesmo escopo/for
}
console.log('i: '+ i)//variavel i não será impressa pois ela nao é global nessa situação.