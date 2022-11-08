import styled from "styled-components";
import Icon from "../Icon/Icon";
import { colors, Flexbox, textData } from "../../styles/globals";
import { faLink } from "@fortawesome/free-solid-svg-icons";
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
  width: ${(props) => props.width || "15rem"};
  min-height: ${(props) => props.height || "3.875rem"};
  font-size: ${(props) => props.fontSize};
  border-color: ${(props) => props.borderColor};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  color: ${colors.textBlack}
  :hover {
    background-color: ${(props) => props.hoverColor || btnData.state.hover};
    font-weight: bolder;
  }
`;

export default function Button({
  backgroundColor = "#96ADFC",
  text = "button text",
  height = "3.875rem",
  fontSize = "1rem",
  borderBottom = "none",
  borderRadius = "3.125rem",
  type = "btn type",
  handleClick = () => {},
  width = "15rem",
  faIconName = faLink,
  fontWeight = "normal",
  iconSize = "2x",
  hoverColor = btnData.state.hover,
}) {
  return (
    <StyledButton
      onClick={handleClick}
      backgroundColor={backgroundColor}
      text="button text"
      height={height}
      fontSize={fontSize}
      borderBottom={borderBottom}
      borderRadius={borderRadius}
      type="btn type"
      width={width}
      fontWeight={fontWeight}
      iconSize={iconSize}
      hoverColor={hoverColor}
    >
      {text}
      {type === "IconButton" && <Icon faIconName={faIconName} />}
    </StyledButton>
  );
}
