import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText } from "../../styles/globals";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";
import { useState } from "react";

const OptionCont = styled(Flexbox)`
  justify-content: space-between;
  background-color: ${props => props.bgColor || "transparent"};
  padding: 0.5rem 2rem 0.5rem 2rem;
  width: 100%;
  cursor: pointer;
`;

const OptionName = styled(Flexbox)``

export default function Option({
  bgColor = "transparent",
  type = null,
  text = "text",
  unit = null,
  faIconName = faIconName,
  inputType = "text",
  placeholder = "placeholder",
  faIconNameRight = null,
  handleClick =() => {}
}) {

  return <OptionCont onClick={handleClick} type={type} dir="row" bgColor={bgColor}>
    <OptionName dir="row">
      <Icon faIconName={faIconName}></Icon>
      <BodyText>{text}</BodyText>
      {
        type !== null && <Input type={inputType} placeholder={placeholder}></Input>
      }
      {
        unit !== null && <BodyText>{unit}</BodyText>
      }
    </OptionName>
    {
      faIconNameRight !== null && <Icon faIconName={faIconNameRight} />
    }
  </OptionCont>
}