let ent = 4;
let operacao = ent;
let mem = 0;
ent --;

while (ent > 0) {
    operacao *= ent;
    ent--;
    if (ent != 0) {
        operacao /= ent;
        ent --;        
    }
    operacao += ent;
    ent --;
    mem += operacao;
    operacao = -ent;
    ent --;
}
console.log(Math.round(mem));