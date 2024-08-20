//Manipulação de Datas

//Crie uma data representando o primeiro dia do ano corrente.
const diaPrimeiro = new Date(new Date().getFullYear(), 0, 1)
console.log("Primeiro dia do ano: ", diaPrimeiro)


//Crie uma data representando o dia de hoje.
const hoje = new Date()
console.log(hoje)



//Calcule a diferença em dias entre o primeiro dia do ano e o dia de hoje e exiba o resultado no console.
var diferencaMilisegundos = hoje - diaPrimeiro

const convertendo = Math.floor(diferencaMilisegundos/(1000 * 60 * 60 * 24))

console.log(convertendo)



//Formate a data de hoje no formato "DD/MM/YYYY" e exiba no console.
const formatar = hoje.toLocaleDateString('pt-br')
console.log(formatar)