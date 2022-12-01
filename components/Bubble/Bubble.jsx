import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { colors, Flexbox, BodyText, textData } from "../../styles/globals";
import { faClose, faSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { bubbleData } from "./data";

const BubbleCont = styled(Flexbox)`
  position: absolute;
  border-radius: 2rem;
  background-color: ${colors.backgroundCream};
  padding: 2.5rem;
  gap: 2rem;
  z-index: 1;
  align-items: flex-start;
`;

const BtnCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`;

const CloseButton = styled.div`
  display: flex;
  align-self: end;
  position: absolute;
  top: 1.25rem;
  cursor: pointer;
`;

const TextCont = styled(Flexbox)`
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
`;

const InputCont = styled(Flexbox)`
  width: 100%;
  gap: 1.5rem;
`;

const TextLink = styled.button`
  border: none;
  font-size: 18pt;
  background-color: transparent;
  letter-spacing: ${textData.letterSpacing};
  color: ${colors.buttonSecondaryBlue};
  font-weight: bold;
  text-decoration: underline;
`;

export default function Bubble({
  type = "success",
  onClose = () => {},
  handleBubble = () => {},
  onSignUp = () => {},
  onSignIn = () => {},
}) {
  return (
    <BubbleCont type={type}>
      <CloseButton>
        <Icon handleClick={onClose} size="xl" faIconName={faClose} />
      </CloseButton>
      <Header text={bubbleData[type].header} />
      <BtnCont dir="row">
        <Button
          text={bubbleData[type].btnTextLeft}
          handleClick={onClose}
          backgroundColor={colors.buttonPrimaryBlue}
        />
        <Button
          text={bubbleData[type].btnTextRight}
          handleClick={handleBubble}
        />
      </BtnCont>
      {/* {(type == "login" || type === "signup") && (
        <InputCont>
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter your password" />
        </InputCont>
      )}

      {type === "signup" && (
        <TextCont dir="row">
          <Icon faIconName={faSquare} />
          <div>
            <SubHeader text={bubbleData[type].subHeader1} />
            <TextLink>Terms & Conditions</TextLink>
          </div>
        </TextCont>
      )}

      {type === "login" && (
        <TextCont>
          <SubHeader text={bubbleData[type].subHeader1} />
          <Flexbox dir="row">
            <SubHeader text={bubbleData[type].subHeader2} />
            <TextLink onClick={onSignUp}> Sign Up!</TextLink>
          </Flexbox>
        </TextCont>
      )}

      <BtnCont dir="row">
        <Button
          text={bubbleData[type].btnTextLeft}
          handleClick={onClose}
          backgroundColor={colors.buttonPrimaryBlue}
        />
        <Button
          text={bubbleData[type].btnTextRight}
          handleClick={handleBubble}
        />
      </BtnCont>
      {type === "signup" && (
        <TextCont dir="row">
          <SubHeader text={bubbleData[type].subHeader2} />
          <TextLink onClick={onSignIn}>Sign In!</TextLink>
        </TextCont>
      )} */}
    </BubbleCont>
  );
}
