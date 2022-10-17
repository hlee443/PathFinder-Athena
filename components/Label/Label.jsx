import styled from "styled-components";

const LabelCont = styled.p`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 2rem;
  width: fit-content;
`;

export default function Label({
    text = "placeholder",
    backgroundColor = "#FFFEF6",
}) {
    return <LabelCont backgroundColor={backgroundColor}>{text}</LabelCont>;
}
