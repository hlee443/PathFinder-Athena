import styled from "styled-components";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Flexbox } from "../../styles/globals";
import { ColorArr } from "./data";
import { colors } from "../../styles/globals";
import Icon from "../Icon/Icon";
import Label from "../Label/Label";
import { useState } from "react";

const Cont = styled(Flexbox)`
  background-color: ${colors.backgroundYellow};
  padding: 1rem 0;
  width: auto;
  column-gap: .5rem;
  padding: .5rem 1rem;
  border-radius: 0.6rem;
  position: absolute;
  margin-top: 8.5rem;
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

export default function HighlightDropdown({
  handleChangeHighlightColor = () => {},
  onClose = () => {}
}) {
  const [sel, setSel] = useState(0);
  const [label, setLabel] = useState(false);
  return (
    <Cont dir="row">
      {ColorArr.map((color, i) => (
        <Flexbox key={i}>
          <Circle
            backgroundColor={color.colorHex}
            onClick={(e) => {
              e.preventDefault()
              handleChangeHighlightColor(color)
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
            <Label position="absolute" text={color.colorText} top="4rem" />
          )}
        </Flexbox>
      ))}
      <Icon handleClick={onClose} faIconName={faClose} />
    </Cont>
  );
}
