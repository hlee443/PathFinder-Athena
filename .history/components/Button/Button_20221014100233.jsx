import styled from "styled-components";

export default function Button() {
  const handleClick = () => {
    console.log("hi!");
  };

  const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5rem;
    background-color: green;
    cursor: pointer;
    color: white;
    &:hover {
      background: teal;
    }
    &:active {
      background: blue;
    }
  `;

  return (
    <Button type="button" onClick={handleClick}>
      Click Me
    </Button>
  );
}
