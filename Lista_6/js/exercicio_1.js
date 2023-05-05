function maiorIdade(listaPessoas){
    for(let i = 0; i < listaPessoas.length; i++){
        if(listaPessoas[i].idade >= 18){
           console.log("Seja bem vindo(a)! Você se chama " + listaPessoas[i].nome + " " + listaPessoas[i].sobrenome + " e tem " + listaPessoas[i].idade + " anos e é maior de idade.")
        }
        else{
            console.log("Seja bem vindo(a)! Você se chama " + listaPessoas[i].nome + " " + listaPessoas[i].sobrenome + " e tem " + listaPessoas[i].idade + " anos e não é maior de idade.")
        }
    }
    return
}
function verificaNome(listaPessoas){
    for(let i = 0; i < listaPessoas.length; i++){
        if((listaPessoas[i].nome.length + listaPessoas[i].sobrenome.length) < 3){
            console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres.")
        }
        else if((listaPessoas[i].nome.length + listaPessoas[i].sobrenome.length) > 50){
            console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres.")
        }
    }
    return
}
function quantidadePessoas(listaPessoas){
    console.log(listaPessoas.length)
    return
}
let listaPessoas = [
    {
        nome: "Robson",
        sobrenome: "da Silva",
        idade: 10,
    },
    {
        nome: "Ricardo",
        sobrenome: "de Souza",
        idade: 18,
    },
    {
        nome: "Nicolas",
        sobrenome: "Santos",
        idade: 16,
    },
    {
        nome: "Lorranny",
        sobrenome: "Vieira",
        idade: 78,
    },
    {
        nome: "Maria",
        sobrenome: "Moraes",
        idade: 17,
    }
]
maiorIdade(listaPessoas)
verificaNome(listaPessoas)
quantidadePessoas(listaPessoas)