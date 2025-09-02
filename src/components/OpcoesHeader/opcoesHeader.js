//<> Imports

import { Link } from 'react-router-dom';
import styled from 'styled-components';

//<> Header Options List

const textoOpcoes = ['categorias', 'favoritos', 'estante'];

//<> Styled components

const HeaderOpcoes = styled.ul
`
  padding: 0;
  width: auto;
  min-width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

const Opcao = styled.li
`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: auto;
    
    &:hover {
      cursor: pointer;
    }
`

//<> Default function

function OpcoesHeader() {
    return (
        <HeaderOpcoes>
          {textoOpcoes.map( (texto) => (
            <Link to={`/${texto}`} className='text-link'>
              <Opcao><p>{texto}</p></Opcao>
            </Link>
          ))}
        </HeaderOpcoes>
    )
}

export default OpcoesHeader