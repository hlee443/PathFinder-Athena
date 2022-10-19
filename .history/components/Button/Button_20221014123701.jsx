import styled from "styled-components";

export default function Button() {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    // background-color: #96adfc;
  `;

  return (
    <Button type="button" onClick={handleClick} backgroundColor="">
      Placeholder
    </Button>
  );
}
