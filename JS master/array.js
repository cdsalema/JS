

//array é dinamico pode ser incrementado ou diminuido de acordo com a necessidade e também por ser heterogenio recebe tipos difrentes de dados(nao é recomendável). string, boolean, null
const valores=[7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores)
console.log(valores[5])//caso o indice seja invalido ele nao da erro mas mostra como valor indefinido
valores[4]=10
console.log(valores[4])
console.log(valores)
valores.push({id:3}, false, null, 'teste') //push inclui os novos valor no array
console.log(valores)

console.log(valores.pop()) //pop apaga o ultimo indice do array
delete valores[0] //delet apaga o indice que for determinado dentro do [] 
console.log(valores)

console.log(typeof valores)
