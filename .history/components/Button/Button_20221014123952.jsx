import styled from "styled-components";

export default function Button({ backgroundColor = "#96ADFC" }) {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    background-color: ${backgroundColor};
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
