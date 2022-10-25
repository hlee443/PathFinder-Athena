import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";
import { dropdownData } from "./data";
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

const DropdownCont = styled(Flexbox)`
  border-radius: 3rem;
  background-color: ${colors.backgroundCream};
  border: 0.15rem solid black;
  width: 25rem;
  max-width: 25rem;
  //   padding: 1rem;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const CreateNew = styled(Flexbox)`
  align-self: flex-end;
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
  const arr = dropdownData.library;
  return (
    <>
      <DropdownCont left={left} top={top}>
        {arr.map((o, i) => (
          <Option
            bgColor={o.backgroundColor}
            faIconName={o.faIconName}
            // not sure how to make these icons show up yet ! just a string rn
            // also missing close icon
            text={o.labelText}
            faIconNameRight={o.faIconNameRight}
            handleClick={setShowBubble}
            // right now, if you click any of them, the popup will show up
          ></Option>
        ))}
        <CreateNew>
          <Button
            text="New Folder"
            backgroundColor="transparent"
            type="IconButton"
            ButtonFaIconName={faFolderPlus}
            // handleClick={setShowBubble}
          ></Button>
        </CreateNew>
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
  const arr = dropdownData.typeface;
  return (
    <DropdownCont left={left} top={top}>
      {arr.map((o, i) => (
        <Option
          bgColor={o.backgroundColor}
          faIconName={o.faIconName}
          text={o.labelText}
          inputType={o.inputType}
          width={o.width}
          unit={o.unit}
          placeholder={o.placeholder}
        ></Option>
      ))}
      <Button text="Clear"></Button>
    </DropdownCont>
  );
}
