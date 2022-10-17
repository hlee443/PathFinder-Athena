import styled from "styled-components";

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
const Src = styled.img``;

export default function Button({
  backgroundColor = "#96ADFC",
  text = "hi",
  icon = "https://placekitten.com/25/25",
}) {
  const handleClick = () => {
    console.log("hi!");
  };

  return (
    <ButtonCont type="button" onClick={handleClick}>
      {text}
      <Src src={icon}></Src>
    </ButtonCont>
  );
}
