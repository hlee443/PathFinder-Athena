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
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SuccessBubble } from "../Bubble/Bubble";
import Label from "../Label/Label";

const DropdownCont = styled.div`
  border-radius: 3rem;
  background-color: ${colors.backgroundCream};
  width: fit-content;
  //   padding: 1rem;
  //   overflow: hidden;
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
    <DropdownCont left={left} top={top}>
      <DropdownDiv backgroundColor={colors.primaryBlue}>
        <Label backgroundColor="transparent" text="My Library"></Label>
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
      {showBubble && (
        <SuccessBubble
          header="You have saved your file to the Assignment folder!"
          active={showBubble}
          setActive={setShowBubble}
        ></SuccessBubble>
      )}
    </DropdownCont>
  );
}
