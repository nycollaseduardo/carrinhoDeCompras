let valorTotal = document.getElementById('valor-total');
let listaProdutos = document.getElementById('lista-produtos');
let somatorio = 0;

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let total = quantidade * valorProduto;
    let carrinho = `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${total}</span></section>`
    listaProdutos.innerHTML += carrinho;
    somatorio += total
    valorTotal.innerHTML = `R$${somatorio}`;
}

function limpar() {
    valorTotal.innerHTML = 'R$0'
    document.getElementById('quantidade').value = '';
    listaProdutos.innerHTML = '';
    somatorio = 0;
}
