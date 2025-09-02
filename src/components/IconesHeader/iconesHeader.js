//<> Imports

import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';
import styled from 'styled-components';

//<> Styled components

const icones = [perfil, sacola]

const HeaderIcones = styled.div
`
  display: flex;
  align-items: center;
`

const Icone = styled.li
`
  width: 120px;
  text-align: center;

  &:hover {
  cursor: pointer;
  }
`

//<> Default functions

function IconesHeader() {
    return (
        <HeaderIcones>
          {icones.map( (icone) => (
            <Icone>
              <img src={icone} alt={icone}/>
            </Icone>
          ))}
        </HeaderIcones>
    )
}

export default IconesHeader