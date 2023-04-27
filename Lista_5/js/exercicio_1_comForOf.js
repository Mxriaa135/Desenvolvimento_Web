var listaPessoas = [
    pessoa1 = {
        nome: "Helena",
        idade: 16,
        ehAdmin: false,
        email: "helena123@gmail.com"
    },
    pessoa2 = {
        nome: "Tiago",
        idade: 18,
        ehAdmin: false,
        email: "tiago567@gmail.com"
    },
    pessoa3 = {
        nome: "Alonso",
        idade: 45,
        ehAdmin: true,
        email: "alonso678@gmail.com"
    },
    pessoa4 = {
        nome: "Roberto",
        idade: 34,
        ehAdmin: false,
        email: "robert012@gmail.com"
    },
    pessoa5 = {
        nome: "Ana",
        idade: 21,
        ehAdmin: false,
        email: "ana543@gmail.com"
    }
]
for(var value of listaPessoas){
    if(listaPessoas[value].ehAdmin){
        console.log("Olá " + listaPessoas[value].nome + "! Bem vindo(a) você é admin do sistema, enviamos um email para " + listaPessoas[value].email + " para você criar uma senha")
    }
    else{
        console.log("Olá " + listaPessoas[value].nome + "! Bem vindo(a) você não é admin do sistema, enviamos um email para " + listaPessoas[value].email + " para você criar uma senha")
    }
}