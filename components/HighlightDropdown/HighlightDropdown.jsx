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
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
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

const SelectedCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50rem;
  border: 0.25rem solid ${colors.darkGrey};
`;

const ClearCircle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  background-color: transparent;
  border-radius: 50rem;
  border: 0.1rem solid ${colors.darkGrey};
  :hover {
    border: 0.25rem solid ${colors.darkGrey};
  }
`

const Line = styled.div`
  position: absolute;
  rotate: 30deg;
  /* top: 50%; left: 50%;
  transform: translate(-50%, -50%); */
  width: .1rem;
  height: 100%;
  background-color: red;
`

export default function HighlightDropdown({
  currentHighlightColor = {},
  handleChangeHighlightColor = () => { },
  onClose = () => { },
}) {
  const [sel, setSel] = useState(0);
  const [label, setLabel] = useState(false);
  return (
    <Cont dir="row">
      <Flexbox>
        <ClearCircle
          onClick={(e) => {
            e.preventDefault();
            handleChangeHighlightColor({colorText: "clear", colorHex: null});
          }}
          onMouseEnter={() => {
            {
              setLabel(true), setSel('clear')
            }
          }}
          onMouseLeave={() => {
            setLabel(false), setSel('')
          }}
        >
          <Line></Line>
        </ClearCircle>
        {sel === 'clear' && label && (
          <Label position="absolute" text={"clear"} top="4rem" />
        )}
      </Flexbox>
      {ColorArr.map((color, i) => (
        <Flexbox key={i}>
          {currentHighlightColor.colorText !== color.colorText ? (
            <Circle
              backgroundColor={color.colorHex}
              onClick={(e) => {
                e.preventDefault();
                handleChangeHighlightColor(color);
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
          ) : (
            <SelectedCircle
              backgroundColor={color.colorHex}
              onClick={(e) => {
                e.preventDefault();
                handleChangeHighlightColor(color);
              }}
              onMouseEnter={() => {
                {
                  setLabel(true), setSel(i);
                }
              }}
              onMouseLeave={() => {
                setLabel(false), setSel(i);
              }}
            ></SelectedCircle>
          )}
          {sel === i && label && (
            <Label position="absolute" text={color.colorText} top="4rem" />
          )}
        </Flexbox>
      ))}
      <Icon handleClick={onClose} faIconName={faClose} />
    </Cont>
  );
}
