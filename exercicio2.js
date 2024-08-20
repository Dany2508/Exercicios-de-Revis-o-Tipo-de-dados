//Conversão de Number


//numStr
//Declare uma variavel NUMSTR com valor "123.45" (string) e converta-a para um número
var numStr = '123.45'
console.log(numStr)

var numero  = parseFloat(numStr)
console.log(numero)


//MATH
//Arredondar o número para o inteiro mais próximo e exiba no console.
//função MATH  para arredondar o número
var numeroInt = Math.round(numero)
console.log(numeroInt)

var numeroInt2 = parseInt(numero)
console.log(numeroInt2)


//converta o numero arredondado para uma string com 3 casas decimais e exiba no console
var stringDecimal = numeroInt.toFixed(3)
console.log(stringDecimal)

//Verifique se numStr é NaM(não é um número)
var verifica = isNaN(numStr)
console.log(verifica)

