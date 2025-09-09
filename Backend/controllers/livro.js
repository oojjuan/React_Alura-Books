//! CONTROLLERS >> Processam a requisição enviada pelo Router, chamam os serviços se necessário e preparam a resposta


const { getTodosLivros, getLivroPorId, inserirLivro, modificarLivro, deletarLivro } = require("../services/livro")

//EX: Requisição GET para '/livros'
function getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

//EX: Requisição GET para '/livros/:id'
function getLivro(req, res) {
    try {
        const livroId = req.params.id
        
        //* Verifica se o número não é false && verifica se ele é de fato um número
        if(livroId && Number(livroId)) {
            const livro = getLivroPorId(livroId)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

//EX: Requisição POST para '/livros'
function postLivro(req, res) {
    try {
        const livroNovo = req.body
        
        if(req.body.nome && req.body.id) {
            inserirLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("O livro precisa de um ID e um nome!")
        }

    } catch (error) {
        res.send(`Ops! Algo deu errado \n${error}`)
    }
}

//EX: Requisição PATCH para '/livros/:id'
function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            
            modificarLivro(body, id)
            res.send("Livro modificado com sucesso!")
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
    } catch (error) {
        res.send(`Ops! Algo deu errado \n${error}`)
    }
}

//EX: Requisição DELETE para '/livros/:id'
function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletarLivro(id)
            res.send("Livro deletado com sucesso!")
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
        
    } catch (error) {
        res.send(`Ops! Algo deu errado \n${error}`)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}