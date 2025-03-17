// Contagem Regressiva com FOR:

// Peça o usuário um número e faça uma contagem 

let numero1 = parseInt(prompt("Digite um número para contagem regressiva"));
for (let i = numero1; i >= 0; i--) {
    console.log(i);
}

let numero2 = parseint(prompt("Digite um número para somar os numeros"));
let soma = 0;
let indice = 1;
while (indice <= numero2) {
    soma += indice;
    indice++;
}
console.log("Soma:", soma))

// 3. Tabuada com FOR:
// Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

let num = parseInt(prompt("Digite um número: "))
for (let i = 1; i <= 10; i++) {
    //console.log(num * i);
    console.log(`${num} x ${i} = ${num * i}`)
}

// 4. Números Pares com FOR:
// Peça ao usuário um número e mostre todos os números pares de 1 até ele.

let numero4 = parseInt(prompt("Digite um número para ver os pares até ele:"));
for (let i = 2; i <= numero4; i += 2) {
    console.log(i);

5.// Fatorial com While:
// Peça ao usuário um número e calcule o fatorial o dele.

let numero5 = parseInte(pronpt("Digite um número para calcular o fatorial:"));
let fatorial=1;
let i = 1;
while (i <= numero5) {
    fatorial *= i;
    i++;
}
console.log(`fatorial de ${numero}: ${fatorial}`);

//6. Validação de Entrada com DO WHILE:
//Peça ao usuário um número maior que 10. Se ele digitar um número inválido,peça novamente 

let numero6;
do {
    numero6 = parseint(prompt("Digite um número maior que 10:"));
} while (numero6 <= 10);
console.log("Número válido:", numero6);

//7. Desenho com Lopops aninhados
// Peça ao usuário o tamanho de um quadrado e desenhe- o com asteriscos (*).

let tamanho = parseInt(prompt("Digite o tamanho do quadrado: "));
for (let i = 0; i < tamanho; i++) {
    let linha = "";
    for (let j = 0; j < tamanho; j++) {
        linha += "* ";
    }
    console.log(linha);
}
