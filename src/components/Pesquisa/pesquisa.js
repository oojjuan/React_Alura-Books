//<> Imports

import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";
import livroSRC from "../../imgs/livro.png";
import { postFavorito } from "../../services/favoritos";

//<> Styled components

const PesquisaContainer = styled.div
`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: auto;
    min-height: 500px;
    width: 100%;
`

const Titulo = styled.h2
`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3
`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div
`
    width: 30%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    box-sizing: border-box;
    cursor: pointer;
    border: 5px solid transparent;
    transition: 0.3s;
    
    p {
        width: 200px;
        font-size: 1.5rem;
    }

    img {
        width: 100px;
    }

    &:hover {  
        background-color: rgba(94, 188, 255, 0.5);
        border: 5px solid white;
        border-radius: 50px;
    }
`

//<> Default function

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    //@param [] >> Sempre quando este parâmetro for alterado, a função será executada
    useEffect( () => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id)
    }
    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura..."
                onBlur={evento => {
                    //* Puxa o valor do elemento que foi acionado
                    const textoDigitado = evento.target.value
                    
                    //* Verifica se o campo de texto está vazio
                    if (textoDigitado !== "") {
                        //* Verifica, para cada livro, se a pesquisa do usuário é semelhante ao nome do livro
                        const resultadoPesquisa = livros.filter( (livro) => livro.nome.includes(textoDigitado))
                        
                        setLivrosPesquisados(resultadoPesquisa)
                    } else {
                        setLivrosPesquisados([])
                    }

                }}
            />
            { livrosPesquisados.map( (livro) => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                    <img src={livroSRC} alt={livro.nome}/>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa;