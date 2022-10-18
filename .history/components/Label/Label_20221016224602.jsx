import styled from "styled-components";

const LabelCont = styled.p`
  background: ${backgroundColor};
  display: inline-block;
  text-align: center;
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  width = "2rem",
}) {
  return <LabelCont backgroundColor="#FFFEF6">{text}</LabelCont>;
}