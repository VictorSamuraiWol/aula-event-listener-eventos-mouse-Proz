let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
}

function atualizarSubtotal () {
  if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";valorSubtotal.innerText = subtotalInfo.valor;
  }
  else if (subtotalInfo.quantidade == 1) {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item";valorSubtotal.innerText = subtotalInfo.valor;
  }
  else {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";valorSubtotal.innerText = subtotalInfo.valor;
  }
}

atualizarSubtotal ();


let btnAdicionarProduto01 = document.querySelector ('#btn-adicionar-produto-01');
console.log(btnAdicionarProduto01);

let btnSubtrairProduto01 = document.querySelector ('#btn-subtrair-produto-01');

let quantidadeProduto01 =  document.querySelector ('#quantidade-produto-01')

function adicionarUm() {
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  subtotalInfo.quantidade += 1;
  subtotalValor();
  atualizarSubtotal();
  
}

function subtrairUm() {
  if(quantidadeProduto01.value>0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
    subtotalInfo.quantidade -=1}
    subtotalValor();
    atualizarSubtotal();

    
}

function subtotalValor() {
   subtotalInfo.valor = (subtotalInfo.quantidade * 11.66).toFixed(2);
  
}

console.log(subtotalValor);

btnAdicionarProduto01.addEventListener('click', adicionarUm);

btnSubtrairProduto01.addEventListener('click', subtrairUm);

/*const btnAdicionar = document.getElementById('btn-adicionar-produto-01');

const qtdProdutos = document.getElementById('quantidade-produto-01');

 

btnAdicionar.addEventListener('click', ()=> {

  qtdProdutos.value = Number(qtdProdutos.value) + 1;

});

 

const btnSubtrair = document.getElementById('btn-subtrair-produto-01');

 

btnSubtrair.addEventListener('click', ()=> {

  const quantidade = Number(qtdProdutos.value);

  if(quantidade > 0){

    qtdProdutos.value = Number(qtdProdutos.value) - 1;

  }

});*/