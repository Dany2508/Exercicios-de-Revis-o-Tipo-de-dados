//
//é um número gigantesco


//Declare duas variaveis grandeNumero1 e grandeNumero2, atribuido a elas valores grandes usando NigInt.
var grandeNumero1 = BigInt("123456789123456789123456789")
var grandeNumero2 = BigInt("987654321098765432109876543210")

//Calcule a soma, subtração, multiplicação e divisão desses valores  e exiba os resultados no console.
var soma = grandeNumero1 + grandeNumero2
var subtracao = grandeNumero1 - grandeNumero2
var multiplicacao = grandeNumero1 * grandeNumero2
var divisao = grandeNumero1 / grandeNumero2

console.log(soma, "\n", subtracao, "\n", multiplicacao, "\n", divisao)

//Verifique se grandeNumero1 é maior q grandeNumero2 e exia o resultado no console.
var maior = grandeNumero1 > grandeNumero2
console.log(maior)