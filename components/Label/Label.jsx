import styled from "styled-components";
import { Flexbox, textData } from "../../styles/globals";

const LabelCont = styled(Flexbox)`
  border-radius: 2rem;
  width: fit-content;
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

// background-color: ${(props) => props.backgroundColor};
// position: absolute;

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
