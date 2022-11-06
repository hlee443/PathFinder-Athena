import styled from "styled-components";

const LabelCont = styled.p`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 2rem;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  handleClick = () => {},
  top = null,
  right = null,
}) {
  return (
    <LabelCont
      backgroundColor={backgroundColor}
      onClick={handleClick}
      top={top}
      right={right}
    >
      {text}
    </LabelCont>
  );
}
