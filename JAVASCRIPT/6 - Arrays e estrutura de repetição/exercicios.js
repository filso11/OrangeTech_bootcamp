// 1) crie um programa que dado um número imprima sua tabuada.

const taboada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroSelecionado = 7;

for (let index = 0; index < taboada.length; index++) {
    let multiplicar = numeroSelecionado * taboada[index];
    console.log(`${numeroSelecionado} X ${taboada[index]} = ${multiplicar}`);  
}
