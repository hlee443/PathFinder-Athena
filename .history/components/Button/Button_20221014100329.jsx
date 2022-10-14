import styled from "styled-components";

export default function Button() {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 50px;
    background-color: #96adfc;
    cursor: pointer;
    color: black;
    &:hover {
      background: teal;
    }
  `;

  return (
    <Button type="button" onClick={handleClick}>
      Click Me
    </Button>
  );
}
