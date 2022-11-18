import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText, colors } from "../../styles/globals";
import Input from "../Input/Input";
import { useState } from "react";

const OptionCont = styled(Flexbox)`
  justify-content: flex-start;
  background-color: ${(props) => props.bgColor || "transparent"};
  width: 100%;
  cursor: pointer;
  gap: 1.875rem;
  padding: 1rem 1.5rem;

  :hover {
    font-weight: bold;
    background-color: ${(props) => props.hoverColor || colors.secondaryBlue};
  }
`;

const OptionText = styled.p`
  width: 100%;
`

export default function Option({
  bgColor = "transparent",
  text = "text",
  unit = null,
  faIconName = null,
  inputType = null,
  placeholder = "placeholder",
  faIconNameRight = null,
  handleOption = () => { },
  onClose = () => { },
  onChange = () => { },
  value = "",
  src = null,
  inputWidth = "4rem",
  hoverColor = "",
  height= ""
  // num = 1
}) {

  return <OptionCont
    hoverColor={hoverColor}
    onClick={handleOption}
    dir="row"
    bgColor={bgColor}
  >
    {faIconName !== null && <Icon faIconName={faIconName} />}
    {src !== null && <img src={src} />}

    <OptionText>{text}</OptionText>
    {
      inputType !== null && <Input
        type={inputType}
        placeholder={placeholder} onChange={onChange}
        value={value}
        height={height}
        width={inputWidth}
      />
    }
    {
      unit !== null && <BodyText>{unit}</BodyText>
    }
    {
      faIconNameRight !== null && <Icon
        size="1x"
        faIconName={faIconNameRight}
        handleClick={onClose} />
    }
  </OptionCont>
}
