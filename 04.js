//modulos
const readlineSync = require('readline-sync');

//variaveis
const tabelaPrecos = {
    produto: [
        {
            tipo: 'padrao',
            nome: ['File Duplo', 'Alcatra', 'Picanha'],
            preco: [24.90, 25.90, 36.90]
        },
        {
            tipo: 'especial',
            nome: ['File Duplo', 'Alcatra', 'Picanha'],
            preco: [25.80, 26.80, 37.80]
        }
    ]
}

let total = 0;
let desconto = 'Não foi aplicado nenhum desconto';

//processamento de dados
function valorProduto(tipo, carne, metodoPagamento) {
    let produto = tabelaPrecos.produto.find(p => p.tipo === tipo);

    total = produto.preco[produto.nome.indexOf(carne)];

    if (metodoPagamento === 'Tabajara') {
        total *= 0.05;
        desconto = '5%';
    }

    gerarNotaFiscal(produto.nome[produto.nome.indexOf(carne)], quantidade, metodoPagamento);
}

function gerarNotaFiscal(carne, quantidade, metodoPagamento) {
    console.log(`\n\n===NOTA FISCAL===\nTipo: ${carne}\nQuantidade: ${quantidade}\nTipo de pagamento: ${metodoPagamento}\nValor do desconto: ${desconto}\nPreço a pagar: R$${total}\n`);
}

//entrada de dados 
let tipoCarne = parseInt(readlineSync.question('Escolha a carne de sua preferencia:\n1. File Duplo\n2. Alcatra\n3. Picanha\nR: '));

let quantidade = parseInt(readlineSync.question('Quanta carne (kg)? '));

let metodoPagamento = readlineSync.question('Sera com o cartao Tabajara (Tabajara / outro)? ');

if (metodoPagamento !== 'Tabajara') {
    metodoPagamento = readlineSync.question('Insira o metodo de pagamento: ');
}

//condicionais
if (quantidade <= 5) {
    valorProduto('padrao', tabelaPrecos.produto[0].nome[tipoCarne - 1], metodoPagamento);
} else if (quantidade > 5) {
    valorProduto('especial', tabelaPrecos.produto[1].nome[tipoCarne - 1], metodoPagamento);
}
