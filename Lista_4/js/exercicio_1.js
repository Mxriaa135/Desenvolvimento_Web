var contaCorrente = {
    saldo: 0.20,
    faturaAtual: 350,
    creditoDisponivel: 400,
    extrato: {
        entradas:
        [
            {
                data: "24/04",
                valor: 10
            }
        ],
        saidas:
        [
            {
                data:"24/04",
                valor: 360,
                descricao: "Compra online"
            }
        ]
    },
    exibirExtrato:true
}
if(contaCorrente.saldo >= contaCorrente.faturaAtual){
    console.log("Você possui saldo para pagar a fatura atual")
    if(contaCorrente.exibirExtrato == true){
        console.log(contaCorrente.extrato)
    }
}
else{
    console.log("você não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar.")
    console.log("Atualmente você possui R$:" + contaCorrente.creditoDisponivel + " de crédito disponível.")
}
