var vetorNomes = []
vetorNomes[0] = "Larissa"
vetorNomes[1] = "Maria"
vetorNomes[2] = "Jonas"
vetorNomes[3] = "Francisco"

var vetorSalarioAtual = []
vetorSalarioAtual[0] = 2000
vetorSalarioAtual[1] = 5000
vetorSalarioAtual[2] = 1000
vetorSalarioAtual[3] = 3000

var reajuste = 10

for(var contador1 = 0; contador1 < 4; contador1++){
    var valorReajuste = (vetorSalarioAtual[contador1] * 10) /100
    var salarioReajustado = valorReajuste + vetorSalarioAtual[contador1]
    
    console.log(vetorNomes[contador1], "ganha R$", vetorSalarioAtual[contador1], ", com reajuste de 10% passa a ganhar R$", salarioReajustado)
}