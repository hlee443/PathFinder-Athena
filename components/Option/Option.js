import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText, colors } from "../../styles/globals";
import Input from "../Input/Input";
import { useState } from "react";
import { motion } from "framer-motion";

const OptionCont = styled(Flexbox)`
  justify-content: flex-start;
  background-color: ${(props) => props.bgColor || "transparent"};
  width: 100%;
  cursor: pointer;
  gap: ${(props) => props.gap || "1.875rem"};
  padding: ${(props) => props.padding || "1rem 1.5rem"};

  :hover {
    font-weight: bold;
    background-color: ${(props) => props.hoverColor || colors.secondaryBlue};
  }
`;

const OptionText = styled.p`
  // width: 100%;
  font-size: ${(props) => props.fontSize};
`;

const UnitText = styled.p`
  font-size: ${(props) => props.fontSize};
`;

export default function Option({
  bgColor = "transparent",
  gap = "1.875rem",
  text = "text",
  unit = null,
  faIconName = null,
  inputType = null,
  placeholder = "placeholder",
  faIconNameRight = null,
  handleOption = () => {},
  onClose = () => {},
  onChange = () => {},
  value = "",
  src = null,
  inputWidth = "4rem",
  hoverColor = "",
  height = "",
  fontSize = "18pt",
  padding = null,
  // num = 1
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      style={{ width: "100%" }}
    >
      <OptionCont
        hoverColor={hoverColor}
        onClick={handleOption}
        dir="row"
        bgColor={bgColor}
        fontSize={fontSize}
        gap={gap}
        padding={padding}
      >
        {faIconName !== null && <Icon faIconName={faIconName} />}
        {src !== null && <img src={src} />}

        <OptionText>{text}</OptionText>
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
        {unit !== null && <UnitText>{unit}</UnitText>}
        {faIconNameRight !== null && (
          <Icon size="1x" faIconName={faIconNameRight} handleClick={onClose} />
        )}
      </OptionCont>
    </motion.div>
  );
}
