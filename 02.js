const readlineSync = require('readline-sync');

// Leitura do nome do interessado
let nome = readlineSync.question("Digite o nome do interessado: ");

let notaI = parseFloat(readlineSync.question("Digite a nota do exame I: "));
let notaII = parseFloat(readlineSync.question("Digite a nota do exame II: "));
let notaIII = parseFloat(readlineSync.question("Digite a nota do exame III: "));
let notaIV = parseFloat(readlineSync.question("Digite a nota do exame IV: "));
let notaV = parseFloat(readlineSync.question("Digite a nota do exame V: "));

let media = (notaI + notaII + notaIII + notaIV + notaV) / 5;

let classificacao;
if (media >= 7.0) {
    if (notaI >= 7.0 && notaII >= 7.0 && notaIII >= 7.0 && notaIV >= 7.0 && notaV >= 7.0) {
        classificacao = "A";
    } else if (notaI >= 7.0 && notaII >= 7.0 && notaIV >= 7.0 && (notaIII < 7.0 || notaV < 7.0)) {
        classificacao = "B";
    } else if (notaI >= 7.0 && notaII >= 7.0 && (notaIII >= 7.0 || notaIV >= 7.0) && notaV < 7.0) {
        classificacao = "C";
    } else {
        classificacao = "Reprovado";
    }
} else {
    classificacao = "Reprovado";
}

console.log(nome + " - " + classificacao);
