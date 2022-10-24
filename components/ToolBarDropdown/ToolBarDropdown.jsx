import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import {
  faClose,
  faFolder,
  faChevronRight,
  faFolderPlus,
  faLineHeight,
  faTextWidth,
  faTextSize,
  faFont,
  faFillDrip,
  faBooks,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SuccessBubble } from "../Bubble/Bubble";
import Label from "../Label/Label";

const DropdownCont = styled.div`
  border-radius: 3rem;
  background-color: ${colors.backgroundCream};
  border: 0.15rem solid black;
  width: fit-content;
  //   padding: 1rem;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const DropdownDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
  width: 100%;
  justify-content: space-between;
`;

const IconLeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default function ToolBarDropdown({
  active = null,
  setActive = null,
  left = "",
  top = "",
}) {
  const [showBubble, setShowBubble] = useState(false);
  const closeBubble = () => {
    setActive(!active);
  };
  return (
    <>
      <DropdownCont left={left} top={top}>
        <DropdownDiv backgroundColor={colors.primaryBlue}>
          <IconLeftDiv>
            <Icon faIconName={faBook}></Icon>
            <Label backgroundColor="transparent" text="My Library"></Label>
          </IconLeftDiv>
          <Icon faIconName={faClose} handleClick={closeBubble}></Icon>
        </DropdownDiv>
        <DropdownDiv backgroundColor={colors.backgroundCream}>
          <IconLeftDiv>
            <Icon faIconName={faFolder}></Icon>
            <Label
              backgroundColor="transparent"
              text="Assignments"
              handleClick={setShowBubble}
            ></Label>
          </IconLeftDiv>
          <Icon faIconName={faChevronRight}></Icon>
        </DropdownDiv>
        <DropdownDiv backgroundColor={colors.backgroundCream}>
          <IconLeftDiv>
            <Icon faIconName={faFolder}></Icon>
            <Label backgroundColor="transparent" text="Quizzes"></Label>
          </IconLeftDiv>
          <Icon faIconName={faChevronRight}></Icon>
        </DropdownDiv>
        <DropdownDiv>
          <Button
            text="New Folder"
            backgroundColor="transparent"
            type="IconButton"
            ButtonFaIconName={faFolderPlus}
            handleClick={setShowBubble}
          ></Button>
        </DropdownDiv>
      </DropdownCont>
      {showBubble && (
        <SuccessBubble
          header="You have saved your file to the Assignment folder!"
          active={showBubble}
          setActive={setShowBubble}
        ></SuccessBubble>
      )}
    </>
  );
}

export function FontDropdown({
  active = null,
  setActive = null,
  left = "",
  top = "",
}) {
  const closeBubble = () => {
    setActive(!active);
  };
  return (
    <DropdownCont left={left} top={top}>
      <DropdownDiv backgroundColor={colors.primaryBlue}>
        <IconLeftDiv>
          <Icon faIconName={faFont}></Icon>
          <Label backgroundColor="transparent" text="Typeface"></Label>
        </IconLeftDiv>
        <Icon faIconName={faClose} handleClick={closeBubble}></Icon>
      </DropdownDiv>
      <DropdownDiv>
        <IconLeftDiv></IconLeftDiv>
        <Icon faIconName={faFillDrip}></Icon>
        <Label backgroundColor="transparent" text="Background Color"></Label>
        <Input type="dropdown" width="12rem"></Input>
      </DropdownDiv>
      <DropdownDiv>
        <IconLeftDiv>
          <Icon faIconName={faFont}></Icon>
          <Label backgroundColor="transparent" text="Typeface"></Label>
        </IconLeftDiv>
        <Input type="dropdown" width="12rem"></Input>
      </DropdownDiv>
      <DropdownDiv>
        <IconLeftDiv>
          <Icon faIconName={faTextSize}></Icon>
          <Label backgroundColor="transparent" text="Font Size"></Label>
        </IconLeftDiv>
        <Input type="text" width="6rem"></Input>
        <Label backgroundColor="transparent" text="pt"></Label>
      </DropdownDiv>
      <DropdownDiv>
        <IconLeftDiv>
          <Icon faIconName={faLineHeight}></Icon>
          <Label backgroundColor="transparent" text="Line Spacing"></Label>
        </IconLeftDiv>
        <Input type="text" width="6rem"></Input>
        <Label backgroundColor="transparent" text="pt"></Label>
      </DropdownDiv>
      <DropdownDiv>
        <IconLeftDiv>
          <Icon faIconName={faTextWidth}></Icon>
          <Label backgroundColor="transparent" text="Letter Spacing"></Label>
        </IconLeftDiv>
        <Input type="text" width="6rem"></Input>
        <Label backgroundColor="transparent" text="pt"></Label>
      </DropdownDiv>
      <Button text="Clear"></Button>
    </DropdownCont>
  );
}
