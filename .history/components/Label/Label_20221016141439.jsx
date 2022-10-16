import styled from "styled-components";

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  width = "2rem",
}) {
  const Label = styled.p`
    background: ${backgroundColor};
    display: inline-block;
    text-align: center;
    padding: 1rem;
    border-radius: 1rem;
  `;

  return <Label backgroundColor="#FFFEF6">{text}</Label>;
}
