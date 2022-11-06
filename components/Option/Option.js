import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText } from "../../styles/globals";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";
import { useState } from "react";

const OptionCont = styled(Flexbox)`
  justify-content: space-between;
  background-color: ${(props) => props.bgColor || "transparent"};
  padding: 0.5rem 2rem 0.5rem 2rem;
  width: 100%;
  cursor: pointer;
  align-items: center;
`;

const OptionName = styled(Flexbox)``;

export default function Option({
  bgColor = "transparent",
  text = "text",
  unit = null,
  faIconName = null,
  inputType = null,
  placeholder = "placeholder",
  faIconNameRight = null,
  handleOption = () => {},
  width = "100%",
  onClose = () => {},
  onChange = () => {},
  value = "",
}) {
  return (
    <OptionCont onClick={handleOption} dir="row" bgColor={bgColor}>
      <OptionName dir="row">
        {faIconName !== null && <Icon faIconName={faIconName}></Icon>}
        <BodyText>{text}</BodyText>
        {inputType !== null && (
          <Input
            width={width}
            type={inputType}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          ></Input>
        )}
        {unit !== null && <BodyText>{unit}</BodyText>}
      </OptionName>
      {faIconNameRight !== null && (
        <Icon faIconName={faIconNameRight} handleClick={onClose} />
      )}
    </OptionCont>
  );
}
