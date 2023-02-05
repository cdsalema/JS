const hora = 18;
let saudacao;

if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia!"
} else
    if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!"
    }
    else //(hora >= 18 && hora < 6)//
        saudacao = "Boa Noite!"

console.log(saudacao);
