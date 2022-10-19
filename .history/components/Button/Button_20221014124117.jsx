import styled from "styled-components";

export default function Button({ backgroundColor = "#96ADFC" }) {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    background-color: ${backgroundColor};
    border-radius: 50px;
    border: 1px solid black;
  `;

  return (
    <Button
      type="button"
      onClick={handleClick}
      label="First"
      backgroundColor="#96ADFC"
    >
      Placeholder
    </Button>
  );
}
