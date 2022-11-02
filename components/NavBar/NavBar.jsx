import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Button from "../Button/Button";
import { btnData } from "./data";
import Bubble from "../Bubble/Bubble";
import { useRouter } from "next/router";
import { colors, Flexbox } from "../../styles/globals";

const NavBarCont = styled(Flexbox)`
  width: 100vw;
  max-height: 6.438rem;
  backdrop-filter: blur(0.125rem);
  z-index: 100;
`;

const Logo = styled.img``;

const TopBar = styled(Flexbox)`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 4.688rem;
  justify-content: flex-end;
  align-items: end;
  padding: 2rem;
`;

const Bar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 0.875rem;
`;

const IconContainer = styled(Flexbox)`
  min-width: 12rem;
  height: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled(Flexbox)`
  min-width: 23.75rem;
  height: 100%;
  justify-content: space-around;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(111, 111, 111, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function NavBar({ type = "loggedIn" }) {
  const r = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showBubble, setShowBubble] = useState("type");
  const [label, setLabel] = useState(false);
  const [hover, setHover] = useState(false);

  const closeBubble = () => {
    setShowBubble(false);
  };

  return (
    <NavBarCont type={type}>
      <TopBar backgroundColor="#96ADFC">
        <Logo src="" />
        {!isLoggedIn ? (
          <IconContainer>
            <Icon
              size="2x"
              color={colors.backgroundWhite}
              src="Home.svg"
              handleClick={() => r.push("/")}
              handleMouseEnter={() => setLabel("home")}
              handleMouseLeave={() => setLabel(false)}
            ></Icon>
            {label === "home" && <Label text="Home"></Label>}
            <Icon
              size="2x"
              color={colors.backgroundWhite}
              src="Library.svg"
              handleClick={() => r.push("/library")}
              handleMouseEnter={() => setLabel("library")}
              handleMouseLeave={() => setLabel(false)}
            ></Icon>
            {label === "library" && <Label text="Library"></Label>}
            <Icon
              size="2x"
              color={colors.backgroundWhite}
              src="Profile.svg"
              handleClick={{}}
              handleMouseEnter={() => setLabel("profile")}
              handleMouseLeave={() => setLabel(false)}
            ></Icon>
            {label === "profile" && <Label text="Profile"></Label>}
          </IconContainer>
        ) : (
          <ButtonContainer dir="row">
            <Button
              handleClick={() => setShowBubble("login")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={
                (hover === "login" && colors.buttonPrimaryBlue) ||
                colors.backgroundCream
              }
              text="Log In"
              handleMouseEnter={() => setHover("login")}
              handleMouseLeave={() => setHover(false)}
            ></Button>
            <Button
              handleClick={() => setShowBubble("signup")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={
                (hover === "signup" && colors.buttonPrimaryBlue) ||
                colors.backgroundCream
              }
              text="Sign Up"
              handleMouseEnter={() => setHover("signup")}
              handleMouseLeave={() => setHover(false)}
            ></Button>
          </ButtonContainer>
        )}
        {showBubble === "login" && (
          <Overlay>
            <Bubble
              type="login"
              onClose={closeBubble}
              handleBubble={() => setShowBubble("success")}
            ></Bubble>
          </Overlay>
        )}
        {showBubble === "signup" && (
          <Overlay>
            <Bubble type="signup" onClose={closeBubble}></Bubble>
          </Overlay>
        )}
        {showBubble === "success" && (
          <Overlay>
            <Bubble
              type="success"
              onClose={closeBubble}
              handleBubble={() => r.push("/library")}
            ></Bubble>
          </Overlay>
        )}
      </TopBar>
      <Bar backgroundColor="#A8BCFF"></Bar>
      <Bar backgroundColor="#C3D1FF"></Bar>
    </NavBarCont>
  );
}
