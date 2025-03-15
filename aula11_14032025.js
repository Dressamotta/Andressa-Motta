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