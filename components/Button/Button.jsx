import styled from "styled-components";
import Icon from "../Icon/Icon";
import { colors, textData } from "../../styles/globals";
import { btnData } from "./data";
import { mediaQuery } from "../../MediaQuery/data";

const StyledButton = styled.button`
  font-weight: ${(props) => props.fontWeight};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border-bottom: ${(props) => props.borderBottom};
  width: 15rem;
  max-width: 15rem;
  max-height: 3.875rem;
  height: ${(props) => props.height || "3.875rem"};
  width: ${(props) => props.width};
  min-width: fit-content;
  white-space: nowrap;
  // min-height: 3.875rem;
  font-size: ${(props) => props.fontSize};
  border-color: ${(props) => props.borderColor};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  color: ${(props) => props.color || colors.textBlack};
  padding: ${(props) => props.padding || "1rem"};

  @media ${mediaQuery.maxWidth.mobile} {
    width: 12rem;
    min-width: fit-content;
    height: fit-content;
  }

  :hover {
    background-color: ${(props) => props.hoverColor || btnData.state.hover};
    font-weight: bolder;
  }
`;

export default function Button({
  color = "",
  backgroundColor = "",
  text = "button text",
  height = "",
  padding = "",
  // fontSize = "1rem",
  borderBottom = "none",
  borderRadius = "3.125rem",
  handleClick = () => {},
  width = "",
  faIconName = null,
  fontWeight = "normal",
  iconSize = "1x",
  iconColor = "",
  handleMouseEnter = () => {},
  handleMouseLeave = () => {},
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
      padding={padding}
    >
      {text}
      {faIconName !== null && (
        <Icon color={iconColor} size={iconSize} faIconName={faIconName} />
      )}
    </StyledButton>
  );
}
