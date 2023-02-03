let nome="caneta";
let quantidade =10;
let preco = 6.4;
const imposto = 1.5;
let precoFinal= preco+imposto;
let desconto = 0.4;
let precoComDesconto= precoFinal*(1- desconto);

console.log("produto: "+ nome);
console.log("estoque: "+quantidade);
console.log("valor unit.: "+ preco);
console.log("IOF: " + imposto);
console.log("Preço final: " +precoFinal);
console.log("Promoção: " +precoComDesconto);
