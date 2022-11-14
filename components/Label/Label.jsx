import styled from "styled-components";
import { Flexbox, textData } from "../../styles/globals";

const LabelCont = styled(Flexbox)`
  border-radius: 2rem;
  width: fit-content;
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
`;

// background-color: ${(props) => props.backgroundColor};
// position: absolute;

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  handleClick = () => {},
}) {
  return (
    <LabelCont
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      {text}
    </LabelCont>
  );
}
