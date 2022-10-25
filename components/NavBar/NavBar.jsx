import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Button from "../Button/Button";
import { btnData } from "./data";
import Bubble from "../Bubble/Bubble";
import {
  faBookBookmark,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
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

export default function NavBar({ type = "loggedIn" }) {
  const r = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showBubble, setShowBubble] = useState("type");

  return (
    <NavBarCont type={type}>
      <TopBar backgroundColor="#96ADFC">
        <Logo src="" />
        <IconContainer>
            <Icon size="2x" color={colors.backgroundWhite} faIconName={faHome} handleClick={() => r.push("/")}></Icon>
            <Icon size="2x" color={colors.backgroundWhite} faIconName={faBookBookmark} handleClick={() => r.push("/library")}></Icon>
            <Icon size="2x" color={colors.backgroundWhite} faIconName={faUser}></Icon>
          </IconContainer>
        {/* {
          isLoggedIn ? <IconContainer>
            <Icon size="2x" color={colors.backgroundWhite} faIconName={faHome} handleClick={() => r.push("/")}></Icon>
            <Icon size="2x" color={colors.backgroundWhite} faIconName={faBookBookmark} handleClick={() => r.push("/library")}></Icon>
            <Icon size="2x" color={colors.backgroundWhite} faIconName={faUser} handleClick={{}}></Icon>
          </IconContainer> : <ButtonContainer>
            <Button
              handleClick={() => setShowBubble("login")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={btnData.state.default.backgroundColor}
              text="Log In"
            ></Button>
            <Button
              handleClick={() => setShowBubble("signup")}
              width={btnData.width}
              height={btnData.height}
              backgroundColor={btnData.state.default.backgroundColor}
              text="Sign Up"
            ></Button>
          </ButtonContainer>
        }
        {showBubble === "login" && (
          <Bubble
            type="login"
            onClose={() => setShowBubble(false)}
            header="Log in"
            subHeader1="If you don’t have an account with us, please Sign Up!"
            handleBubble={() => setShowBubble("success")}
            btnTextLeft="Cancel"
            btnTextRight="Log In"
          ></Bubble>
        )}
        {showBubble === "signup" && (
          <Bubble
            type="signup"
            onClose={() => setShowBubble(false)}
            header="Sign up"
            subHeader1="I read and agree to Terms & Conditions"
            subHeader2="Already a member? Sign In!"
            btnTextLeft="Cancel"
            btnTextRight="Sign Up"
          ></Bubble>
        )}
        {
          showBubble === "success" && (
            <Bubble
              type="success"
              onClose={() => setShowBubble(false)}
              header="Your have successfully signed in!"
              subHeader1="Happy studying!"
              btnTextLeft="Back to Main"
              btnTextRight="Go to the Library"
              handleBubble={() => r.push("/library")}
            ></Bubble>
          )
        } */}
      </TopBar>
      <Bar backgroundColor="#A8BCFF"></Bar>
      <Bar backgroundColor="#C3D1FF"></Bar>
    </NavBarCont>
  );
};
