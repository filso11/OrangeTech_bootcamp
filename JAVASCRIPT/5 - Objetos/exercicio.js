/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos dá o valor
    gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    calculoViagem(distancia, preco) {
        return (distancia * this.consumoPorKm) * preco;
    }
}

const uno = new Carros('Fiat','Branco',1/12);
const palio = new Carros('Fiat','Vermelho', 1/10);

console.log(uno.marca);

console.log('R$ '+uno.calculoViagem(70, 5).toFixed(2));
console.log('R$ '+palio.calculoViagem(70, 5).toFixed(2));
