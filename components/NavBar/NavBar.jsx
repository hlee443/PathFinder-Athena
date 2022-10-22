import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Button from "../Button/Button";
import { btnData } from "./data";
import Bubble from "../Bubble/Bubble";

const NavBarCont = styled.div`
  width: 100%;
  max-height: 6.438rem;
  display: flex;
  backdrop-filter: blur(0.125rem);
  align-items: center;
  flex-direction: column;
  z-index: 100;
`;

const Logo = styled.img``;

const TopBar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 4.688rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
`;

const Bar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 0.875rem;
`;

const IconContainer = styled.div`
  min-width: 12rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContainer = styled.div`
  min-width: 23.75rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  return (
    <NavBarCont>
      <TopBar backgroundColor="#96ADFC">
        <Logo src="" />
        {isLoggedIn && (
          <IconContainer>
            <Icon src=""></Icon>
            <Icon src=""></Icon>
            <Icon src=""></Icon>
          </IconContainer>
        )}
        <ButtonContainer>
          <Button
            handleClick={setShowBubble}
            width={btnData.width}
            height={btnData.height}
            backgroundColor={btnData.state.default.backgroundColor}
            text="Log In"
          ></Button>
          <Button
            handleClick={setShowBubble}
            width={btnData.width}
            height={btnData.height}
            backgroundColor={btnData.state.default.backgroundColor}
            text="Sign Up"
          ></Button>
        </ButtonContainer>
        {showBubble && (
          <Bubble
            type="login"
            active={showBubble}
            setActive={setShowBubble}
          ></Bubble>
        )}
      </TopBar>
      <Bar backgroundColor="#A8BCFF"></Bar>
      <Bar backgroundColor="#C3D1FF"></Bar>
    </NavBarCont>
  );
}
