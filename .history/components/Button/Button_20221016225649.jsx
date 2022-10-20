import styled from "styled-components";

export default function Button({
  backgroundColor = "#96ADFC",
  text = "hi",
  icon = "https://placekitten.com/25/25",
}) {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    background-color: ${backgroundColor};
    border-radius: 2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 62px;
    font-size: 18px;
  `;
  const Src = styled.img``;

  return (
    <Button type="button" onClick={handleClick}>
      {text}
      <Src src={icon}></Src>
    </Button>
  );
}
