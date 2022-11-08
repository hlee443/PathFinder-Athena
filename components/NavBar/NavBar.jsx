import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Button from "../Button/Button";
import { btnData } from "./data";
import Bubble from "../Bubble/Bubble";
import Label from "../Label/Label";
import { useRouter } from "next/router";
import { colors, Flexbox, logoData } from "../../styles/globals";

const NavBarCont = styled(Flexbox)`
  width: 100vw;
  max-height: 6.438rem;
  backdrop-filter: blur(0.125rem);
  z-index: 100;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled.img`
  width: 14.5rem;
`;

const TopBar = styled(Flexbox)`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 4.688rem;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
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
  flex-direction: row;
  position: relative;
`;

const ButtonContainer = styled(Flexbox)`
  min-width: 23.75rem;
  height: fit-content;
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

export default function NavBar() {
  const r = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBubble, setShowBubble] = useState("type");
  const [label, setLabel] = useState(false);

  const closeBubble = () => {
    setShowBubble(false);
  };

  return (
    <NavBarCont>
      <TopBar dir="row" backgroundColor="#96ADFC">
        <Logo src={logoData.logoHorizontal} />
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
            {label === "home" && <Label text="Home" top="2rem"></Label>}
            <Icon
              size="2x"
              color={colors.backgroundWhite}
              src="Library.svg"
              handleClick={() => r.push("/library")}
              handleMouseEnter={() => setLabel("library")}
              handleMouseLeave={() => setLabel(false)}
            ></Icon>
            {label === "library" && <Label text="Library" top="2rem"></Label>}
            <Icon
              size="2x"
              color={colors.backgroundWhite}
              src="Profile.svg"
              handleClick={{}}
              handleMouseEnter={() => setLabel("profile")}
              handleMouseLeave={() => setLabel(false)}
            ></Icon>
            {label === "profile" && <Label text="Profile" top="2rem"></Label>}
          </IconContainer>
        ) : (
          <ButtonContainer dir="row">
            <Button
              handleClick={() => setShowBubble("login")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={colors.backgroundCream}
              hoverColor={colors.buttonLightBlue}
              text="Log In"
            ></Button>
            <Button
              handleClick={() => setShowBubble("signup")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={colors.backgroundCream}
              hoverColor={colors.buttonLightBlue}
              text="Sign Up"
            ></Button>
          </ButtonContainer>
        )}
        {showBubble === "login" && (
          <Overlay>
            <Bubble
              type="login"
              onClose={closeBubble}
              onSignUp={() => setShowBubble("signup")}
              handleBubble={() => setShowBubble("success")}
            />
          </Overlay>
        )}
        {showBubble === "signup" && (
          <Overlay>
            <Bubble
              onSignIn={() => setShowBubble("login")}
              type="signup"
              onClose={closeBubble}
            />
          </Overlay>
        )}
        {showBubble === "success" && (
          <Overlay>
            <Bubble
              type="success"
              onClose={closeBubble}
              handleBubble={() => r.push("/library")}
            />
          </Overlay>
        )}
      </TopBar>
      <Bar backgroundColor="#A8BCFF" />
      <Bar backgroundColor="#C3D1FF" />
    </NavBarCont>
  );
}
