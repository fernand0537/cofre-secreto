let senhaCofre = "537";
let tentativas = 0;

function executarAcao(acao) {

    if (acao === "jogar") {

        let num0 = document.getElementById("num0").value;
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        let senhaDigitada = num0 + num1 + num2;

        if (senhaDigitada === senhaCofre) {
            document.getElementById("mensagem").innerText =
                "Cofre aberto! Parabéns!";
        } else {
            document.getElementById("mensagem").innerText =
                "Senha incorreta! Tente novamente.";

            tentativas++;
        }
    }

    else if (acao === "dica") {
        document.getElementById("mensagem").innerText =
            "Dica: a senha começa com 5.";
    }

    else if (acao === "limpar") {
        document.getElementById("num0").value = "";
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";

        document.getElementById("mensagem").innerText =
            "Aguardando tentativa...";
    }
}
