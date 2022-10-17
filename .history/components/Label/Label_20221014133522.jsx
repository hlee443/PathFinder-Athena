import styled from "styled-components";

export default function Icon({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
}) {
  const Label = styled.p`
  background: {backgroundColor}`;

  return <Label>{text}</Label>;
}
