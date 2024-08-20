var carro = {
    marca: "Volkswagen",
    modelo: "polo",
    ano: 2019,

    detalhes: function(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
}

carro.detalhes()

//adicionar COR e exibir no console
carro.cor = "cinza"

console.log(carro)