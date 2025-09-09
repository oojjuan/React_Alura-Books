//! SERVICES >> Realizam tarefas específicas e retornam o resultado para o controller

const fs = require('fs')

//EX: Puxa todos os livros do arquivo JSON
function getTodosLivros() {
        return JSON.parse(fs.readFileSync('livros.json'))
}

//EX: Puxa um livro específico pelo seu ID
function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    //* Como o .filter() retorna uma array com todos os elementos que cumpram a regra da comparação. Como existe só um livro com tal ID, é colocado um [0] para retornar apenas o último elemento
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]

    return livroFiltrado
}

//EX: Insere um novo livro a partir do Body, com POST
function inserirLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    if(!livros.nome === livroNovo.nome || !livros.id === livroNovo.id) {
        const novaListaDeLivros = [...livros, livroNovo]
    
        fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
    } else {
        throw new Error("Livro já existe!")
    }

}

//EX: Compara o livro atual e as modificações, e atualiza o livro atual
function modificarLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    //! O livro que foi requisitado para ser modificado será copiado a um objeto novo, e após ser copiado, as modificações também serão copiadas. Entretanto, se uma propriedade de modificações TAMBÉM EXISTE no objeto 'conteudoModificado', ele substitui o valor dessa propriedade pelo valor do objeto 'modificacoes'
    const conteudoModificado = {...livrosAtuais[indiceModificado], ...modificacoes}

    //* Puxa o livro pelo seu indice na lista e substitui seu valor pelo conteúdo modificado
    livrosAtuais[indiceModificado] = conteudoModificado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

//EX: Apaga um livro específico pelo seu ID
function deletarLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceExcluido = livrosAtuais.findIndex(livro => livro.id === id)

    livrosAtuais.splice(indiceExcluido, 1)

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    inserirLivro,
    modificarLivro,
    deletarLivro
}