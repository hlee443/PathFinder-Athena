import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Label from "../Label/Label";

const IconCont = styled(Flexbox)`
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: ${(props) => props.width};
  :hover {
  background-color: ${(props) => props.hoverColor};
  border-radius: 1.25rem;
}
`;



const IconImg = styled.img`
  aspect-ratio: 1;
`;

export default function Icon({
  faIconName = faLink,
  handleClick = () => {},
  size = "lg",
  color = colors.textBlack,
  hoverColor = "transparent",
  src = null,
  text = "",
  width= "",
  handleMouseEnter = () => {},
  handleMouseLeave = () => {},
}) {
  // onMouseEnter={handleMouseEnter}
  // onMouseLeave={handleMouseLeave}
  return (
    <IconCont
      onClick={handleClick}
      hoverColor={hoverColor}
      width={width}
    >
      {src === null && (
        <FontAwesomeIcon
          size={size}
          color={color}
          icon={faIconName}
        ></FontAwesomeIcon>
      )}
      {src !== null && <IconImg src={src} />}
      {text && <div>{text}</div>}
    </IconCont>
  );
};
