import styled from "styled-components";

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  display:flex;,
}) {
  const Label = styled.p`
    background: ${backgroundColor};
  `;

  return <Label backgroundColor="#FFFEF6">{text}</Label>;
}
