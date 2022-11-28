import styled from "styled-components";
import { Flexbox, textData } from "../../styles/globals";

const LabelCont = styled(Flexbox)`
  border-radius: 2rem;
  width: fit-content;
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  left: ${(props) => props.left};
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom || "0"};
`;

// background-color: ${(props) => props.backgroundColor};
// position: absolute;

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  handleClick = () => { },
  position = "",
  bottom = "0",
  left = ""
  // top = null,
  // right = null,
}) {
  return (
    <LabelCont
      backgroundColor={backgroundColor}
      onClick={handleClick}
      position={position}
      bottom={bottom}
      left={left}
    // top={top}
    // right={right}
    >
      {text}
    </LabelCont>
  );
}
