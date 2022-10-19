import styled from "styled-components";
import Icon from "../Icon/Icon";

const ButtonCont = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.textColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  `

export default function Button({
  backgroundColor = "#96ADFC",
  text = "button text",
  width = "100%",
  height = "100%",
  fontSize = "1rem",
  textColor = "black"
}) {

  const handleClick = () => {
    console.log("hi!");
  };

  return (
    <ButtonCont
      type="button"
      onClick={handleClick}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      fontSize={fontSize}
      textColor={textColor}
    >
      {text}
      <Icon src="" />
    </ButtonCont>
  );
}
