function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade Grau I";        
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

rl.question("Digite o seu peso: ", (peso) => {
    rl.question("Digite a sua altura: ", (altura) => {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        let resultado = calcularIMC(peso, altura);
        console.log("Classificação do IMC: ", resultado);

        rl.close();
    });
});

// 1. Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado. Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

function calcularMedia(nota1,nota2,nota3,nota4){
    let media = (nota1+nota2+,nota3+,nota4+) / 4;

    if (media =>7) {
    return "Aprovado"
} else if (medianotas >= 5 && medianotas < 7) {

    return "Reprovado"
} else {
    return "Reprovado";
  }
}

rl.question("Digite a primeira nota:", (nota1) => {
rl.question("Digite a segunda nota:", (nota2) => {
rl.question("Digite a terceira nota:", (nota3) => {
rl.question("Digite a quarta nota:", (nota4) => {

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    nota4 = parseFloat(nota4);


    let resultado = notas(nota1, nota2, nota3, nota4);
    console.log("Classificação das notas: ", resultado);

    rl.close();
});
});
})
});



//2. Soma dos Números Pares em um Intervalo: Peça ao usuário dois números, representando o início e o fim de um intervalo. Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.

function somaParesNoIntervalo() {
    let inicio = parseInt(prompt("Digite o início do intervalo:"));
    let fim = parseInt(prompt("Digite o fim do intervalo:"));
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    console.log("Soma dos números pares:", soma);
}

//3. Verificação de Palíndromo: Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".


function verificarPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");
    let textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}


//4.Cálculo de Juros Simples: Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t). Calcule o montante final usando a fórmula de juros simples M=P×(1+r×t) e exiba o resultado.

verificarPalindromo();

// 4. Cálculo de Juros Simples:
// Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t).
// Calcule o montante final usando a fórmula de juros simples M = P × (1 + r × t) e exiba o resultado.

function calcularJurosSimples() {
    let P = parseFloat(prompt("Digite o valor principal (P):"));
    let r = parseFloat(prompt("Digite a taxa de juros anual (r):")) / 100;
    let t = parseFloat(prompt("Digite o tempo em anos (t):"));
    let M = P * (1 + r * t);
    console.log("Montante final:", M);
}

//5. Contagem de Dígitos: Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.


calcularJurosSimples();

// 5. Contagem de Dígitos:
// Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.

function contarDigitos() {
    let numero = prompt("Digite um número inteiro positivo:");
    if (/^\d+$/.test(numero)) {
        console.log("Número de dígitos:", numero.length);
    } else {
        console.log("Entrada inválida. Digite um número inteiro positivo.");
    }
}

// Chamada da função
contarDigitos();

// 