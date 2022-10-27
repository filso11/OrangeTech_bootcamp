//Desafio

// Faça um programa para calcular o valor gasto de combustível em uma viagem.

// Você terá 3 variáveis. Sendo elas?
// 1 Preço do combustível 2 Valor médio de gasto do carro 3 Distância em KM da viagem

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaKM = 100;

const litrosConsumidos = distanciaKM / kmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log('Valor gasto é R$ '+valorGasto.toFixed(2));