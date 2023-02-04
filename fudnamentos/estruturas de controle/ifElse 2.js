const hora = 5;
let saudacao;

if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia!"
    console.log(saudacao);
} else {
    if (hora < 18) {
        saudacao = "Boa tarde!"
        console.log(saudacao);
    }
    else (hora >= 18 && hora < 6)
    saudacao = "Boa Noite!"
    console.log(saudacao);


}

