//Uso de SYMBOL
//crie um símbolo chave 1 usando symbol
var chave1 = Symbol('descricao')

var chave2 = Symbol('descricao')

var saoIguais = chave1 == chave2
console.log(saoIguais)
//false
//pq qnd criaos um Symbol, o valor gerado é unico e imutavel, msm q a descricao seja a mesma, 
//os simbolos sao completamente deferentes entre si.

var usuario = {
    [chave1]: "123456"
}

console.log(usuario[chave1])