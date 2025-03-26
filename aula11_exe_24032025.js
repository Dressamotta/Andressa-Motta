// Sistema de pedidos online
// Modele classes para Produto (nome, preço, estoque),
//Cliente (nome, endereço, carrinho) e Pedido (itens, total, status).
//Implemente métodos para adicionar ao carrinho, finalizar compra e calcular frete.

// Classe Produto
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;              
        this.preco = preco;          
        this.estoque = estoque;      
    }
}

// Classe Cliente
class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.carrinho = [];
    }

    adicionarAoCarrinho(produto, quantidade) {
        if (produto.estoque >= quantidade) {
            this.carrinho.push({ produto, quantidade });
            produto.estoque -= quantidade;
            console.log(`${quantidade}x ${produto.nome} adicionado ao carrinho.`);
        } else {
            console.log(`Estoque insuficiente para ${produto.nome}.`);
        }
    }

    finalizarCompra() {
        if (this.carrinho.length === 0) {
            console.log("Carrinho vazio! Adicione itens antes de comprar.");
            return null;
        }

        let total = 0;
        this.carrinho.forEach(item => {
            total += item.produto.preco * item.quantidade;
        });

        let pedido = new Pedido(this.carrinho, total);
        this.carrinho = []; // Esvazia o carrinho
        console.log(`Compra finalizada! Total: R$${total.toFixed(2)}`);
        return pedido;
    }
}

// Classe Pedido
class Pedido {
    constructor(itens, total) {
        this.itens = itens;
        this.total = total;
        this.status = "Pendente";
    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;
        console.log(`Status atualizado para: ${this.status}`);
    }
}

// Exemplo de uso:
let produto1 = new Produto("Camisa", 50, 10);
let produto2 = new Produto("Tênis", 120, 5);

let cliente1 = new Cliente("Maria", "Rua A, 123");

cliente1.adicionarAoCarrinho(produto1, 2);
cliente1.adicionarAoCarrinho(produto2, 1);

let pedido1 = cliente1.finalizarCompra();

if (pedido1) {
    pedido1.atualizarStatus("Enviado");
}
