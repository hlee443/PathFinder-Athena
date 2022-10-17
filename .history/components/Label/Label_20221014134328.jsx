import styled from "styled-components";

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  width = "20px",
}) {
  const Label = styled.p`
    background: ${backgroundColor};
    display: inline-block;
    text-align: center;
    padding: 5px;
    border-radius: 50px;
  `;

  return <Label backgroundColor="#FFFEF6">{text}</Label>;
}
