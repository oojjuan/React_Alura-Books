import Logo from '../Logo/logo.js'
import OpcoesHeader from '../OpcoesHeader/opcoesHeader.js';
import IconesHeader from '../IconesHeader/iconesHeader.js';
import styled from 'styled-components';

const HeaderContainer = styled.header
`
    background-color: #FFF;
    display: flex;
    justify-content: space-around;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header