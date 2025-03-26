//1.Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.

function somaMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}

let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log(somaMatrizes(matriz1, matriz2));

let matrizSoma = somaMatrizes(matrizA, matrizB);
console.log(matrizSoma);

//2.Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).

function transporMatriz(matriz) {
    let transposta = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(matriz[j][i]);
        }
        transposta.push(linha);
    }
    return transposta;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(transporMatriz(matriz));

//3.Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.

function multiplicarMatrizes(matriz1, matriz2) {
    let resultado = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    return resultado;
}

let matriz1 = [
    [1, 2],
    [3, 4]
];

let matriz2 = [
    [5, 6],
    [7, 8]
];

console.log(multiplicarMatrizes(matriz1, matriz2));

//4.Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3. O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.



//5.Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

function buscarNumero(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === numero) {
                return { linha: i, coluna: j };
            }
        }
    }
    return null;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(buscarNumero(matriz, 5));  // Retorna { linha: 1, coluna: 1 }
console.log(buscarNumero(matriz, 10)); // Retorna null

//6.Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

function gerarMatrizIdentidade(n) {
    let matriz = [];
    for (let i = 0; i < n; i++) {
        let linha = [];
        for (let j = 0; j < n; j++) {
            linha.push(i === j ? 1 : 0);
        }
        matriz.push(linha);
    }
    return matriz;
}

console.log(gerarMatrizIdentidade(3));

//7.Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

function rotacionarMatriz(matriz) {
    let resultado = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            resultado[j][2 - i] = matriz[i][j];
        }
    }
    return resultado;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotacionarMatriz(matriz));
