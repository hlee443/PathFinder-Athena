import styled from "styled-components";
import Icon from "../Icon/Icon";
import { colors, textData } from "../../styles/globals";
import { btnData } from "./data";

const StyledButton = styled.button`
  font-weight: ${(props) => props.fontWeight};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.backgroundColor || btnData.state.active};
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border-bottom: ${(props) => props.borderBottom};
  max-width: 15rem;
  max-height: 3.875rem;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: "fit-content";
  white-space: nowrap;
  min-height: "3.875rem";
  font-size: ${(props) => props.fontSize};
  border-color: ${(props) => props.borderColor};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  color: ${(props) => props.color || colors.textBlack};
  padding: 1rem;

  :hover {
    background-color: ${(props) => props.hoverColor || btnData.state.hover};
    font-weight: bolder;
  }
`;

export default function Button({
  color="",
  backgroundColor = "",
  text = "button text",
  height = "",
  // fontSize = "1rem",
  borderBottom = "none",
  borderRadius = "3.125rem",
  handleClick = () => { },
  width = "",
  faIconName = null,
  fontWeight = "normal",
  iconSize = "1x",
  iconColor = "",
  handleMouseEnter = () => { },
  handleMouseLeave = () => { },
}) {

  return (
    <StyledButton
      color={color}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      backgroundColor={backgroundColor}
      text="button text"
      height={height}
      // fontSize={fontSize}
      borderBottom={borderBottom}
      borderRadius={borderRadius}
      width={width}
      fontWeight={fontWeight}
    >
      {text}
      {faIconName !== null && <Icon color={iconColor} size={iconSize} faIconName={faIconName} />}
    </StyledButton>
  );
}
