import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { btnData } from "./data";
import Bubble from "../Bubble/Bubble";
import { useRouter } from "next/router";
import { colors, Flexbox, logoData } from "../../styles/globals";
import Label from "../Label/Label";
import MiniDropDown from "../MiniDropdown/MiniDropdown";
import { ProfileDataArr } from "../MiniDropdown/data";
import useMediaQuery from "../../MediaQuery/MediaQuery";
import { mediaQuery } from "../../MediaQuery/data";
import { menus, btns } from "./data";
import { motion } from "framer-motion";

const NavBarCont = styled(Flexbox)`
  width: 100vw;
  max-height: 6.438rem;
  backdrop-filter: blur(0.125rem);
  z-index: 100;
  justify-content: space-between;
  position: relative;
  display: ${(props) => props.display} ;

  @media ${mediaQuery.maxWidth.mobile} {
   position: fixed;
   bottom: 0;
  };
`;

const Logo = styled.img`
  width: 14.5rem;
  cursor: pointer;

  @media ${mediaQuery.maxWidth.mobile} {
    display: none;
  };
`;

const TopBar = styled(Flexbox)`
  background-color: ${(props) => props.backgroundColor};
  width: 100vw;
  max-height: 4.688rem;
  height: 100%;
  padding: 2rem;
  justify-content: space-between;
`;

const Bar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  min-height: 0.875rem;
`;

const IconContainer = styled(Flexbox)`
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  width: 14rem;
  align-items: center;

  @media ${mediaQuery.maxWidth.mobile} {
    width: 100vw;
  }

  @media ${mediaQuery.minWidth.tablet} {
    width: 16rem;
  }
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showBubble, setShowBubble] = useState("type");
  const [label, setLabel] = useState(false);
  const [showMiniDropDown, setShowMiniDropDown] = useState(false);
  const isMobile = useMediaQuery(mediaQuery.maxWidth.mobile);
  const [sel, setSel] = useState(0);

  const closeBubble = () => {
    setShowBubble(false);
  };

  if (isMobile && !isLoggedIn) {
    return <NavBarCont display="none" />
  }

  return (
    <NavBarCont>
      {
        isMobile && <>
          <Bar backgroundColor="#C3D1FF" />
          <Bar backgroundColor="#A8BCFF" />
        </>
      }
      <TopBar dir="row" backgroundColor="#96ADFC">
        <Logo src={logoData.logoHorizontal} onClick={() => r.push("/")} />
        {
          isLoggedIn ? (
            <IconContainer>
              {
                menus.map((o, i) => (
                  <Flexbox key={i}>
                    <Icon
                      src={o.src}
                      handleMouseEnter={() => { setLabel(true), setSel(i) }}
                      handleMouseLeave={() => { setLabel(false), setSel(i) }}
                      handleClick={() => {
                        o.text === "Profile" ? setShowMiniDropDown(true) : r.push(o.page)
                      }}
                    />
                    {sel === i && label && <Label position="absolute" text={o.text} />}
                    {isMobile && <Label backgroundColor="transparent" text={o.text} />}
                    {
                      showMiniDropDown && <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      > 
                        <MiniDropDown
                          handleMouseLeave={() => setShowMiniDropDown(false)}
                          arr={ProfileDataArr} /> 
                      </motion.div>
                    }
                  </Flexbox>
                ))
              }
            </IconContainer>
          ) : ( <ButtonContainer dir="row">
              {
                btns.map((o, i) => (
                  <Button
                    key={i}
                    handleClick={() => setShowBubble(o.type)}
                    width={btnData.width}
                    height={btnData.height}
                    backgroundColor={colors.backgroundCream}
                    hoverColor={colors.buttonLightBlue}
                    text={o.text}
                  />
                ))
              }
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
      {!isMobile && <>
        <Bar backgroundColor="#A8BCFF" />
        <Bar backgroundColor="#C3D1FF" />
      </>}
    </NavBarCont>
  );
}

