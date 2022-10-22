import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const BubbleCont = styled(Flexbox)`
  max-width: 60rem;
  max-height: 42rem;
  border-radius: 2rem;
  background-color: #fffef6;
  padding: 2.5rem;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 20%;
  right: 20%;
  align-items: flex-start;
  justify-content: space-around;
`;

const BtnCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`;

const CloseButton = styled.div`
  display: flex;
  align-self: end;
`;

export default function Bubble({
  active = null,
  setActive = null,
  type = "login",
}) {
  const [header, setHeader] = useState("Header Text");
  const [subHeader, setSubHeader] = useState("Subheader text");

  const closeBubble = () => {
    setActive(!active);
  };

  return (
    <BubbleCont>
      <CloseButton>
        <Icon handleClick={closeBubble} faIconName={faClose} />
      </CloseButton>
      <Header text={header}></Header>
      <Input width="100%"></Input>
      <Input width="100%"></Input>
      {type === "signup" && <Input width="100%"></Input>}
      <SubHeader text={subHeader}></SubHeader>
      <BtnCont dir="row">
        <Button
          text="Cancel"
          handleClick={closeBubble}
          backgroundColor={colors.buttonPrimaryBlue}
        ></Button>
        <Button text="Log In"></Button>
      </BtnCont>
    </BubbleCont>
  );
}

export function SuccessBubble({
  active = null,
  setActive = null,
  header = "",
}) {
  const closeBubble = () => {
    setActive(!active);
  };
  return (
    <BubbleCont>
      <CloseButton>
        <Icon handleClick={closeBubble} faIconName={faClose} />
      </CloseButton>
      <Header text={header}></Header>
      <BtnCont dir="row">
        <Button
          text="Go back to Doc"
          handleClick={closeBubble}
          backgroundColor={colors.buttonPrimaryBlue}
        ></Button>
        <Button text="Go to your Library"></Button>
      </BtnCont>
    </BubbleCont>
  );
}
