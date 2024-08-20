//Operações com Strings

//VAR colocar qnd ela n ta dentro de nunhuma função!
var frase = "JavaScript é incrível!"
console.log(frase)


//LENGTH
var comprimento = frase.length
console.log(comprimento)


//SPLIT
//Invés de aparecer a frase inteira Aparecer só a palavra INCRIVEL.
//Usando SPLIT para retornar a palavra incrivel
//dividir a frase em um array de palavras, separados pelo espaço.
var palavra = frase.split(' ')
console.log(palavra[2])


//MATCH
//usando o MATCH para encontrar a palavara INCRIVEL
//no MATCH a palavra q tu quer encontrar sempre vai ficar ente barras//
var resultado = frase.match(/incrível/)
console.log(resultado[0])


//substituir a palavra INCRIVEL pela palavra FANTASTICO
var novaFrase = frase.replace('incrível', 'fantástico')
console.log(novaFrase)