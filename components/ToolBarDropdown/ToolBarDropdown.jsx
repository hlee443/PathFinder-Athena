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
import { dropdownArr } from "./data";
import { iconSvgs } from "../Icon/data";

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
  left = "",
  top = "",
  onExpand = () => { },
  onClose = () => { },
  type ="type"
}) {

  return (
    <DropdownCont left={left} top={top}>
      <Option
        bgColor={colors.primaryBlue}
        faIconName={faFolder}
        text={type}
        faIconNameRight={faClose}
        handleOption={onClose}
      ></Option>
      {dropdownArr.map((o, i) => (
        <Option
          key={i}
          bgColor={o.backgroundColor}
          faIconName={o.faIconName}
          text={o.labelText}
          faIconNameRight={o.faIconNameRight}
          handleOption={onExpand}
          inputType={o.inputType}
          width={o.width}
          unit={o.unit}
          placeholder={o.placeholder}
          src={o.src}
        ></Option>
      ))}
      <CreateNew>
        <Button
          text="New Folder"
          backgroundColor="transparent"
          type="IconButton"
          faIconName={faFolderPlus}
        ></Button>
      </CreateNew>
    </DropdownCont>
  );
}

// export function FontDropdown({
//   active = null,
//   setActive = null,
//   left = "",
//   top = "",
// }) {
//   const closeBubble = () => {
//     setActive(!active);
//   };
//   const arr = dropdownData.typeface;
//   return (
//     <DropdownCont left={left} top={top}>
//       {arr.map((o, i) => (
//         <Option
//           bgColor={o.backgroundColor}
//           faIconName={o.faIconName}
//           text={o.labelText}
//           inputType={o.inputType}
//           width={o.width}
//           unit={o.unit}
//           placeholder={o.placeholder}
//         ></Option>
//       ))}
//       <Button text="Clear"></Button>
//     </DropdownCont>
//   );
// }
