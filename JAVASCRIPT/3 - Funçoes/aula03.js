function escrevaMeuNome(nome){
    //console.log('Meu nome é '+nome);
    return nome;
}

escrevaMeuNome('Filipe')

function maiorIdade(idade){
    if(idade >= 18){
        return ('Maior de idade');
        //console.log('Maior de idade');
    } else {
        return ('Menor de idade');
        //console.log('Menor de idade.')
    }
}

console.log(escrevaMeuNome('Filipe')+' e sou '+ maiorIdade(19));