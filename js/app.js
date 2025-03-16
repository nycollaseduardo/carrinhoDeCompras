let valorTotal = document.getElementById('valor-total');
let quantidade = document.getElementById('quantidade');
let listaProdutos = document.getElementById('lista-produtos');
let somatorio = 0;

function adicionar() {
    let produto = document.getElementById('produto');
    let total = 0;
    let molde = '';
    if (produto.value == 'Fone de ouvido - R$100') {
        total = 100 * quantidade.value;
        molde = `${quantidade.value}x ${produto.value}<br>`;
    }
    else if (produto.value == 'Celular - R$1400') {
        total = 1400 * quantidade.value;
        molde = `${quantidade.value}x ${produto.value}<br>`;
    }
    else if (produto.value == 'Oculus VR - R$5000') {
        total = 5000 * quantidade.value;
        molde = `${quantidade.value}x ${produto.value}<br>`;
    }
    listaProdutos.innerHTML += molde;
    somatorio += total
    valorTotal.innerHTML = `R$${somatorio}`;
}

function limpar() {
    valorTotal.innerHTML = 'R$0'
    quantidade.value = 0;
    listaProdutos.innerHTML = '';
    somatorio = 0;
}
