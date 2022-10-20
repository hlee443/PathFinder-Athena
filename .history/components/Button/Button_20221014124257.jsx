import styled from "styled-components";

export default function Button({ backgroundColor = "#96ADFC", label = "hi", borderRadius - "1px solid black"}) {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    background-color: ${backgroundColor};
    border-radius: 50px;
    border: ;
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
