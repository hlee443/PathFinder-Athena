import styled from "styled-components";
import { Flexbox, textData } from "../../styles/globals";

const LabelCont = styled(Flexbox)`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2rem;
  width: fit-content;
  letter-spacing: ${textData.letterSpacing};
`;

export default function Label({
  text = "label text",
  backgroundColor = "transparent",
}) {
  return (
    <LabelCont backgroundColor={backgroundColor}>
      {text}
    </LabelCont>
  );
};
