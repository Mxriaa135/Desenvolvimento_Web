//É apenas um teste com vetor, portanto esse exercicio não vale 

const vetorNomes = []
vetorNomes[0] = "Miguel"
vetorNomes[1] = "Carlos "
vetorNomes[2] = "Ana "
vetorNomes[3] = "José "
vetorNomes[4] = "Marcia "

const vetorIdades = []
vetorIdades[0] = "22"
vetorIdades[1] = "13"
vetorIdades[2] = "49"
vetorIdades[3] = "37"
vetorIdades[4] = "71"

for(var contador1 = 0; contador1 < 5; contador1++){
    for(var contador2 = contador1; contador2 == contador1; contador2++){
        console.log(vetorNomes[contador1] + " - " + vetorIdades[contador2] + " Anos")
    }
}
