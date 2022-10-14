import styled from "styled-components";

export default function Button({ backgroundColor = "#96ADFC", label = "hi" }) {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    background-color: ${backgroundColor};
    border-radius: 50px;
  `;

  return (
    <Button
      type="button"
      onClick={handleClick}
      label="First"
      backgroundColor="#96ADFC"
    >
      {label}
    </Button>
  );
}
