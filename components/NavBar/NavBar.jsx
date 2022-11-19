import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Button from "../Button/Button";
import { btnData } from "./data";
import Bubble from "../Bubble/Bubble";
import { useRouter } from "next/router";
import { colors, Flexbox, logoData } from "../../styles/globals";
import Label from "../Label/Label";
import { motion } from "framer-motion";

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
  cursor: pointer;
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
  min-width: 20rem;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 2rem;
`;

const MiniIconContainer = styled(Flexbox)`
  cursor: pointer;

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
  const [text, setText] = useState(false);
  const [label, setLabel] = useState(false);

  const closeBubble = () => {
    setShowBubble(false);
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >

    <NavBarCont>
      <TopBar dir="row" backgroundColor="#96ADFC">
        <Logo src={logoData.logoHorizontal} onClick={() => r.push("/")} />
        {!isLoggedIn ? (
          <IconContainer>
            <MiniIconContainer
              onMouseEnter={() => setLabel("home")}
              onMouseLeave={() => setLabel(false)}
              onClick={() => r.push("/")}
            >
              <Icon
                size="2x"
                color={colors.backgroundWhite}
                src="Home.svg"
              />
              {label === "home" && <Label text="Home"></Label>}
            </MiniIconContainer>
            <MiniIconContainer
              hoverColor={colors.backgroundCream}
              onMouseEnter={() => setLabel("library")}
              onMouseLeave={() => setLabel(false)}
              onClick={() => r.push("/library")}
            >
              <Icon
                size="2x"
                color={colors.backgroundWhite}
                src="Library.svg"
              />
              {label === "library" && <Label text="Library"></Label>}
            </MiniIconContainer>
            <MiniIconContainer
              hoverColor={colors.backgroundCream}
              onMouseEnter={() => setLabel("profile")}
              onMouseLeave={() => setLabel(false)}
              onClick={() => r.push("/library")}
            >
              <Icon
                size="2x"
                color={colors.backgroundWhite}
                src="Profile.svg"
              />
              {label === "profile" && <Label text="Profile"></Label>}
            </MiniIconContainer>
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
            />
            <Button
              handleClick={() => setShowBubble("signup")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={colors.backgroundCream}
              hoverColor={colors.buttonLightBlue}
              text="Sign Up"
            />
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

    </motion.div>
  );
}
