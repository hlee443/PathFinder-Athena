import styled from "styled-components";

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
}) {
  const Label = styled.p`
    background: ${backgroundColor};
    display: inline-block;
    padding: 3px;
    border-radius: 50px;
  `;

  return <Label backgroundColor="#FFFEF6">{text}</Label>;
}
