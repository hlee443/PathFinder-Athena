import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/globals";
import Label from "../Label/Label";

const IconCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => props.paddingTop};
  :hover {
    background-color: ${(props) => props.hoverColor};
    border-radius: 2rem;
  }
`;

const Img = styled.img``;

export default function Icon({
  faIconName = faLink,
  handleClick = () => {},
  size = "lg",
  color = "black",
  text = "",
  hoverColor = "transparent",
  paddingTop = "",
  src = null,
  handleMouseEnter = () => {},
  handleMouseLeave = () => {},
}) {
  return (
    <IconCont
      text={text}
      onClick={handleClick}
      hoverColor={hoverColor}
      paddingTop={paddingTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {src === null && (
        <FontAwesomeIcon
          size={size}
          color={color}
          icon={faIconName}
        ></FontAwesomeIcon>
      )}
      {src !== null && <Img src={src}></Img>}
      {text && <Label text={text} backgroundColor="transparent"></Label>}
    </IconCont>
  );
}
