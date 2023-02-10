//nesse caso as duas variaves VALOR estão no escopo global mesmo uma estando dentro de um bloco. Sendo assim as duas declaracoes são conflitantes sendo uma sobre-escrita pela proxima.
//VAR só pode ser exclusiva dentro de uma função/escopo diferente.

var valor=1
{
    var valor=3
    console.log('dentro=' + valor)
}
console.log('fora=' + valor)