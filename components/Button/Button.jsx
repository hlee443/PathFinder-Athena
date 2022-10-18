import styled from "styled-components";
import Icon from "../Icon/Icon";

const ButtonCont = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 4rem;
  font-size: 1.125rem;
`;

export default function Button({
  backgroundColor = "#96ADFC",
  text = "button text",
}) {

  const handleClick = () => {
    console.log("hi!");
  };

  return (
    <ButtonCont
      type="button"
      onClick={handleClick}
      backgroundColor={backgroundColor}
    >
      {text}
      <Icon src="" />
    </ButtonCont>
  );
}
