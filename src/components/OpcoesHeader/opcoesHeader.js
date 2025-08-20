import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const HeaderOpcoes = styled.ul
`
  display: flex;
`

const Opcao = styled.li
`
  font-size: 1rem;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

function OpcoesHeader() {
    return (
        <HeaderOpcoes>
          {textoOpcoes.map( (texto) => (
            <Opcao>{texto}</Opcao>
          ))}
        </HeaderOpcoes>
    )
}

export default OpcoesHeader