//Funções Avançadas

//Declare uma função multiplica que aceite dois parâmetros e retorne o produto deles.
function multiplica(a, b){
    return a * b
}


//Chame a função multiplica com os valores 7 e 8, e exiba o resultado no console.
var resultado = multiplica(7, 8)
console.log(resultado)


//Declare uma função quadrado que retorne o quadrado de um número.
function quadrado(n){
    return n * n
}


var resultado2 = quadrado(8)
console.log(resultado2)


//Use a função map para aplicar a função quadrado em um array [1, 2, 3, 4, 5]
//e exiba o array resultante no console.
const numeros = [1, 2, 3, 4, 5]
const quadrados = numeros.map(quadrado)

console.log(quadrados)