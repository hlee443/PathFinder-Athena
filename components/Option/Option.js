import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText, colors } from "../../styles/globals";
import Input from "../Input/Input";
import { useState } from "react";
import { mediaQuery } from "../../MediaQuery/data";

const OptionCont = styled(Flexbox)`
  justify-content: flex-start;
  background-color: ${(props) => props.bgColor || "transparent"};
  width: 100%;
  cursor: pointer;
  font-size: 1.125rem;
  gap: 1rem;
  min-width: 100%;

  :hover {
    font-weight: bold;
    background-color: ${(props) => props.hoverColor};
  }

  @media ${mediaQuery.maxWidth.mobile} {
    align-items: start;
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1;
  background-color: ${(props) => props.imgColor};
  border-radius: 50rem;
`

const OptionText = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;

  @media ${mediaQuery.minWidth.mobile} {
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
`

const InputCont = styled(Flexbox)`
  justify-content: space-between;
  gap: 1rem;

  @media ${mediaQuery.maxWidth.mobile} {
    gap: 0.5rem;
  }
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
  inputWidth = "100%",
  hoverColor = "",
  height = "",
  imgColor = "transparent"
}) {
  return (
    <OptionCont
      hoverColor={hoverColor}
      onClick={handleOption}
      dir="row"
      bgColor={bgColor}
    >
      {faIconName !== null && <Icon faIconName={faIconName} />}
      {src !== null && <Img
        imgColor={imgColor}
        src={src} />}
      <OptionText dir="row">
        <p>{text}</p>
        <InputCont dir="row">
          {inputType !== null && (
            <Input
              type={inputType}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              height={height}
              width={inputWidth}
            />
          )}
          {unit !== null && <p>{unit}</p>}
        </InputCont>
        {faIconNameRight !== null && (
          <Icon size="1x" faIconName={faIconNameRight} handleClick={onClose} />
        )}
      </OptionText>
    </OptionCont>
  );
}
