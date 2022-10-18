import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react"


const NavBarCont = styled.div`
background-color: ${props => props.backgroundColor};
width: 100%;
max-height: 6.438rem;
display: flex;
backdrop-filter: blur(0.125rem);
align-items: center;
flex-direction: column;
`

const Logo = styled.img`
`

const TopBar = styled.div`
background-color: ${props => props.backgroundColor};
width: 100%;
height: 4.688rem;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 2rem;
`

const Bar = styled.div`
background-color: ${props => props.backgroundColor};
width: 100%;
height: 0.875rem;
`

const IconContainer = styled.div`
min-width: 12rem;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const ButtonContainer = styled.div`
min-width: 12rem;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export default function NavBar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <NavBarCont>
        <TopBar backgroundColor="#96ADFC">
            <Logo src="" />
            {
                isLoggedIn &&
                <IconContainer>
                    <Icon src=""></Icon>
                    <Icon src=""></Icon>
                    <Icon src=""></Icon>
                </IconContainer>
            }

            <ButtonContainer>
                <button></button>
                <button></button>
            </ButtonContainer>
        </TopBar>
        <Bar backgroundColor="#A8BCFF"></Bar>
        <Bar backgroundColor="#C3D1FF"></Bar>
    </NavBarCont>
}