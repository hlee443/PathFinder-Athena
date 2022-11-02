import styled from "styled-components";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { libraryDataArr, typefaceDataArr, dataArr } from "./data";
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

const ButtonCont = styled(Flexbox)`
  align-self: flex-end;
`;

export default function ToolBarDropdown({
  left = "",
  top = "",
  onExpand = () => { },
  onClose = () => { },
  type ="",
  onChange = () => { },
  libraryFolderArray = [],
  typeValueArray = []
}) {

  const [sel, setSel] = useState(0);

  return (
    <DropdownCont type={type} left={left} top={top}>
      {type === "Library" && libraryDataArr.map((o, i) => (
        <Option
          key={i}
          bgColor={o.bgColor}
          faIconName={o.faIconName}
          text={libraryFolderArray[i].folder_name || o.text}
          faIconNameRight={o.faIconNameRight}
          handleOption={sel === i ? onClose : onExpand}
          onClick={onChange}
          id={libraryFolderArray[i].folder_id}
        ></Option>
      ))}
      {type === "Typeface" && typefaceDataArr.map((o, i) => (<Option
        key={i}
        id={o.id}
        bgColor={o.bgColor|| "transparent"}
        faIconName={o.faIconName}
        text={o.text}
        faIconNameRight={o.faIconNameRight}
        handleOption={sel === i ? onClose : onExpand}
        inputType={o.inputType}
        width={o.width}
        unit={o.unit}
        placeholder={o.placeholder || "#"}
        src={o.src}
        onChange={onChange} 
        value={typeValueArray[i]}
      ></Option>))
      }
      <ButtonCont>
        <Button
          text="New Folder"
          backgroundColor="transparent"
          type="IconButton"
          faIconName={faFolderPlus}
        ></Button>
      </ButtonCont>
    </DropdownCont >
  );
};
