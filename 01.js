const readlineSync = require('readline-sync');

// entrada de dados
let rendaMensal = parseFloat(readlineSync.question("Digite sua renda mensal: "));
let valorEmprestimo = parseFloat(readlineSync.question("Digite o valor total do empréstimo solicitado: "));
let numPrestacoes = parseInt(readlineSync.question("Digite o número de prestações desejado: "));
let valorPrestacao = valorEmprestimo / numPrestacoes;

// condicionamento e saída
if (valorEmprestimo <= (10 * rendaMensal) && valorPrestacao <= (0.3 * rendaMensal)) {
    console.log("Empréstimo concedido!");
} else {
    console.log("Empréstimo negado.");
}
