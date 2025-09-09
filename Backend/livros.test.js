const fs = require("fs")

//* .PARSE : transforma um string JSON em objeto
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))

const novoDado = { id: '4', nome: 'Livro mega legal'}

//* .STRINGIFY : transforma um valor JavaScript em string JSON
//* ...dadosAtuais : passa TODOS os elementos dentro de 'dadosAtuais' e cria uma nova array, contendo no final o novo dado. Se não utilizarmos o spread (...), os dadosAtuais fica dentro de OUTRA array, e após essa array vem o novo dado.

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))
