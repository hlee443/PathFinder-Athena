import styled from "styled-components";
import Icon from "../Icon/Icon";
import { iconSvgs } from "../Icon/data";
import { colors, Flexbox } from "../../styles/globals";
import { btnData } from "./data";

const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border-bottom: ${(props) => props.borderBottom};
  width: ${(props) => props.width || "15rem"};
  height: ${(props) => props.height || "3.875rem"};
  font-size: ${(props) => props.fontSize};
  border-color: ${(props) => props.borderColor};
`;

export default function Button({
  backgroundColor = "#96ADFC",
  text = "button text",
  height = "3.875rem",
  fontSize = "1rem",
  textColor = "black",
  borderBottom = "none",
  borderRadius = "3.125rem",
  type = "btn type",
  iconName = "link",
  handleClick = () => {},
  width = "",
}) {
  // const handleClick = () => {
  //   console.log("hi!");
  // };

  return (
    <StyledButton
      onClick={handleClick}
      backgroundColor={backgroundColor}
      text="button text"
      height={height}
      fontSize={fontSize}
      textColor={textColor}
      borderBottom={borderBottom}
      borderRadius={borderRadius}
      type="btn type"
      iconName={iconName}
      width={width}
    >
      {text}
      {type === "IconButton" && (
        <Icon size="2.563rem" changeIcon={iconSvgs[iconName]} />
      )}
    </StyledButton>
  );
}
