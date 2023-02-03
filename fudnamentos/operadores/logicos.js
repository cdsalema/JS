const t1=false;
const t2= true;

let comprarTv50=t1&&t2;
console.log("Vou comprar tv de 50pol?",comprarTv50);
let comprarTv32=t1!==t2;
console.log("Vou comprar tv de 32pol?",comprarTv32);
let tomarSorvete=t1||t2;
console.log("Vou tomar sorvete?",tomarSorvete);
let ficaEmCasa= !tomarSorvete;
console.log("Vou ficar em casa?",ficaEmCasa);