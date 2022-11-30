import styled from "styled-components";
import { Flexbox } from "../../styles/globals";
import { ColorArr } from "./data";
import { colors } from "../../styles/globals";
import Label from "../Label/Label";
import { useState } from "react";

const Cont = styled(Flexbox)`
  background-color: ${colors.backgroundCream};
  padding: 1rem;
  width: 10rem;
  justify-content: space-between;
  border: 0.15rem solid ${colors.darkGrey};
  border-radius: 1rem;
  position: relative;
`;
const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50rem;
  border: 0.1rem solid ${colors.darkGrey};
  :hover {
    border: 0.25rem solid ${colors.darkGrey};
  }
`;

export default function HighlightDropdown() {
  const [sel, setSel] = useState(0);
  const [label, setLabel] = useState(false);
  return (
    <Cont dir="row">
      {ColorArr.map((o, i) => (
        <Flexbox key={i}>
          <Circle
            backgroundColor={o.cl}
            onClick={() => {
              console.log("highlight color clicked");
            }}
            onMouseEnter={() => {
              {
                setLabel(true), setSel(i);
              }
            }}
            onMouseLeave={() => {
              setLabel(false), setSel(i);
            }}
          ></Circle>

          {sel === i && label && (
            <Label position="absolute" text={o.text} top="4rem" />
          )}
        </Flexbox>
      ))}
    </Cont>
  );
}
