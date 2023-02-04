const hora = 18;
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia!"
    console.log(saudacao);
} else {
    if (hora < 18) {
        saudacao = "Boa tarde!"
        console.log(saudacao);
    }
    else {
        saudacao = "Boa Noite!"
        console.log(saudacao);
    }

}

