const nota = 10;
let conceito;
let msg;

if (nota >= 9 && nota <= 10) {
    msg = "Parabéns! Aprovado! Boas Férias!"
    conceito = "A"
    console.log(conceito + " " + msg);
} else if (nota >= 7 && nota < 9) {
    msg = "Muito bom! Aprovado! Boas Férias!"
    conceito = "B"
    console.log(conceito + " " + msg);
} else if (nota >= 6 && nota < 7) {
    msg = "bom! Aprovado! Boas Férias!"
    conceito = "C"
    console.log(conceito + " " + msg);
} else if (nota >= 4.5 && nota < 5) {
    conceito = "D"
    msg = "Fraco! Reprovado! Estude mais nas Férias!"
    console.log(conceito + " " + msg);
} else if (nota <= 4.5 && nota >= 0) {
    msg = "Fraco! Reprovado! Estude mais nas Férias! Te vejo novamente!"
    conceito = "F"
    console.log(conceito + "! " + msg);
} else {
    console.log("Valor da Nota esta errado!");
}
