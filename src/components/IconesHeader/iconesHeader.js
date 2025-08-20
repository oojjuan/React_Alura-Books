import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola]

const HeaderIcones = styled.div
`
  display: flex;
  align-items: center;
`

const Icone = styled.li
`
  margin-right: 40px;
  width: 25px;

  &:hover {
  cursor: pointer;
  }
`

function IconesHeader() {
    return (
        <HeaderIcones>
          {icones.map( (icone) => (
            <Icone>
              <img src={icone}/>
            </Icone>
          ))}
        </HeaderIcones>
    )
}

export default IconesHeader