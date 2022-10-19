import styled from "styled-components";

export default function Button() {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button``;

  return (
    <Button type="button" onClick={handleClick}>
      Placeholder
    </Button>
  );
}
