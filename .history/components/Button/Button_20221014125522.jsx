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
    border-radius: 50px;
    border: none;
    display: flex;
    align-items: center;
    width: 380px;
  `;
  const Src = styled.img``;

  return (
    <Button
      type="button"
      onClick={handleClick}
      text="First"
      backgroundColor="#96ADFC"
    >
      {text}
      <Src src={icon}></Src>
    </Button>
  );
}
