// Sistema de pedidos online
// Modele classes para Produto (nome, preço, estoque),
//Cliente (nome, endereço, carrinho) e Pedido (itens, total, status).
//Implemente métodos para adicionar ao carrinho, finalizar compra e calcular frete.


class produto {
    constructor(nome, preço, estoque) {
        this.nome = nome;              
        this.preço = preço;          
        this.estoque = estoque;      

    }

}
        class cliente {
    constructor(nome,endereço,carrinho) {
        this.nome = nome;
        this.preço = nome;
        this.carrinho= [];
        

    }

}
        
        class Pedido {
        constructor(itens,total,status) {
            this.itens = itens;
            this.total = total;
            this.status = status;
        }

    }        

