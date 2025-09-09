//! SERVICES >> Realizam tarefas específicas e retornam o resultado para o controller

const fs = require('fs')

//EX: Puxa todos os favoritos do arquivo JSON
function getTodosFavoritos() {
        return JSON.parse(fs.readFileSync('favoritos.json'))
}

//EX: Apaga um livro favorito com base no ID
function deletarFavorito(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("favoritos.json"))

    const indiceExcluido = livrosAtuais.findIndex(livro => livro.id === id)
    
    livrosAtuais.splice(indiceExcluido, 1)
    
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosAtuais))
}

//EX: Insere um livro aos favoritos com base no ID
function inserirFavorito(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    
    const novoFavorito = livrosAtuais.find(livro => livro.id === id)

    if (novoFavorito == undefined) {
        throw new Error("ID não encontrado!")
    }

    const novosFavoritos = [...livrosFavoritos, novoFavorito]

    fs.writeFileSync("favoritos.json", JSON.stringify(novosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletarFavorito,
    inserirFavorito
}