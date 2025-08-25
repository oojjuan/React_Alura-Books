//<> Imports

import styled from 'styled-components';

//<> Header Options array

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

//<> Styled components

const HeaderOpcoes = styled.ul
`
  display: flex;
`

const Opcao = styled.li
`
  font-size: 1rem;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

//<> Default function

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