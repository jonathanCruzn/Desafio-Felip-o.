console.log("Digite o nome do seu Herói");
let nickname = "Jack";
console.log("Bem-vindo " + nickname);

function calcularRank(vitorias, derrotas) {
   const saldoVitorias = vitorias - derrotas;
   let rank;

    if (vitorias <= 10) {
        rank = "ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "lendário";
    } else if (vitorias >= 101) {
        rank = "imortal";
    }

    const mensagem = `O Jack tem um saldo de ${saldoVitorias} Vitorias e está no nível de ${rank}`;
    return mensagem;
}

const vitorias = 19;
const derrotas = 2;
const resultado = calcularRank(vitorias, derrotas);

console.log(resultado);
console.log(nickname + " você está no nível " + resultado.split("de ")[2]);
