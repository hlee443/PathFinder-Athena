import styled from "styled-components";

export default function Button({ color = "#96ADFC" }) {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    background-color: ${({ color }) => color};
  `;

  return (
    <Button type="button" onClick={handleClick}>
      Placeholder
    </Button>
  );
}
