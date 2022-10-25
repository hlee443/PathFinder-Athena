import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { colors, Flexbox, BodyText } from "../../styles/globals";
import { faClose, faSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const BubbleCont = styled(Flexbox)`
  max-width: 60rem;
  max-height: 42rem;
  border-radius: 2rem;
  background-color: #fffef6;
  padding: 2.5rem;
  z-index: 1;
  position: absolute;
  top: 100%;
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

const SubHeaderCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`;

const InputCont = styled(Flexbox)`
  width: 100%;
`

export default function Bubble({
  type = "login",
  onClose = () => { },
  handleBubble = () => { },
  header = "header text",
  subHeader1 = "subheader text",
  subHeader2 = "subheader text",
  btnTextLeft = "btn left",
  btnTextRight = "btn right"
}) {

  return (
    <BubbleCont>
      <CloseButton>
        <Icon handleClick={onClose} faIconName={faClose} />
      </CloseButton>
      <Header text={header} />
      {
        (type == "login" || type === "signup") && <InputCont>
        <Input width="100%" />
        <Input width="100%" />
      </InputCont>
      }
      <SubHeaderCont dir="row">
        {type === "signup" && <Icon faIconName={faSquare} />}
        <SubHeader text={subHeader1} />
      </SubHeaderCont>
      <BtnCont dir="row">
        <Button
          text={btnTextLeft}
          handleClick={onClose}
          backgroundColor={colors.buttonPrimaryBlue}
        />
        <Button
          text={btnTextRight}
          handleClick={handleBubble}
        />
      </BtnCont>
      {type === "signup" && <SubHeader text={subHeader2} />}
    </BubbleCont>
  );
};
