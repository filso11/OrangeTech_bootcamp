//Desafio

// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM de viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.

// Variaveis

const precoEtanol = 3.19; //Preço etanol
const precoGasolina = 5.19; //Preço gasolina
const tipoCombustivel = 'etanol' //Tipo de combustível
const kmPorLitrosEtanol = 7;
const kmPorLitrosGasolina = 12;
const distanciaKM = 300;


if (tipoCombustivel === 'etanol') {
    const tipoEtanol = distanciaKM / kmPorLitrosEtanol;
    const gastoMedioE = tipoEtanol * precoEtanol;
    console.log('O gasto médio de etanol por KM é R$ '+gastoMedioE.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    const tipoGasolina = distanciaKM / kmPorLitrosGasolina;
    const gastoMedioG = tipoGasolina * precoGasolina;
    console.log('O gasto médio de gasolina por KM é R$ '+gastoMedioG.toFixed(2));
} else {
    console.log('Tipo de Combustível incorreto!');
}