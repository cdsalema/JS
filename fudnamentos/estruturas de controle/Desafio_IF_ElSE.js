const a = 10;
const b = 28;
const operacao = '+';//* - + / %

let resultado;
if (operacao === '*') {
    resultado = a * b;
    console.log(resultado);
} else if (operacao === '-') {
    resultado = a - b;
    console.log(resultado);
} else if (operacao === '+') {
    resultado = a + b;
    console.log(resultado);
} else if (operacao === '/') {
    resultado = a / b;
    console.log(resultado);
} else if (operacao === '%') {
    resultado = a % b;
    console.log(resultado);
} else {
    console.log("valor inválido! use *,/,-,+ ou %")
}
//console.log(resultado);
