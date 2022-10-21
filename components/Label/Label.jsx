import styled from "styled-components";

const LabelCont = styled.p`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 2rem;
  width: fit-content;
  cursor: pointer;
`;

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  handleClick = () => {},
}) {
  return (
    <LabelCont backgroundColor={backgroundColor} onClick={handleClick}>
      {text}
    </LabelCont>
  );
}
