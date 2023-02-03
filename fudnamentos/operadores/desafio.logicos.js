//Duas expressões resultarem em TRUE(aritimeticos,relacionais,Logicos)
let a=true;
let b=true;

let verdadeira1= a==b && 5+5>=10;
let verdadeira2= a==b || 4-3>=1;

console.log(verdadeira1);
console.log(verdadeira2);

//Duas expressões resultarem em False(aritimeticos,relacionais,Logicos)
let c=true;
let d=false;

let Falsa1=11+11==23 && c!=d && verdadeira1==false;
let Falsa2=5+6!=11 && c==d || !verdadeira2;

console.log(Falsa1);
console.log(Falsa2);