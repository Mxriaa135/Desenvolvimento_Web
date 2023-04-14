var artista1 =
{
    nome: "Shawn Mendes",
    anoPrimeiroCd: 2015,
    melhoresMusicas: ["Stitches",  "There's nothing holdin' me back", "mercy", "If i can't have you" ],
    informaçãoIntegrante: ["Shawn Peter Raul Mendes", "Canada", 24],
    estilomusical: "Pop"
}
var artista2 =
{
    nome: "Sidoka",
    anoLancamentoPrimeiroCd: 2018,
    melhoresMusicas: ["Quadro", "Louis V, Menina Linda", "Mi'adama"],
    informaçãoIntegrante: ["Nicolas Paolinelli", "Brasil", 24],
    estilomusical: "Rap, Trap"
}
var artista3 =
{
    nome: "Ariana Grande",
    anoLancamentoPrimeiroCd: 2013,
    melhoresMusicas: ["7 rings", "Into You", "Stuck With U"],
    informacaoIntegrante: ["Ariana Grande-Butera", "EUA", 29],
    estilomusical: "Pop"
}
var database = []
database.push(artista1)
database.push(artista2)
database.push(artista3)
console.log(database)
database.sort()
console.log(database)
database.pop()
console.log(database)