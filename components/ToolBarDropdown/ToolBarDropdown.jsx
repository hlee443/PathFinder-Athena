import styled from "styled-components";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";
import { faFolderPlus, faBook, faFolder, faClose, faChevronRight, faFont } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { libraryDataArr, typefaceDataArr, dataArr } from "./data";
import { iconSvgs } from "../Icon/data";
import { motion } from "framer-motion";

const DropdownCont = styled(Flexbox)`
  border-radius: 3rem;
  background-color: ${colors.backgroundCream};
  border: 0.15rem solid ${colors.darkGrey};
  width: 25rem;
  max-width: 25rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  // z-index: 999;
`;

const ButtonCont = styled(Flexbox)`
  align-self: flex-end;
`;

export default function ToolBarDropdown({
  onExpand = () => { },
  onClose = () => { },
  handleSaveSetting = () => { },
  handleNewFolder = () => { },
  type = "",
  libraryArray,
  typeArray
}) {

  const [sel, setSel] = useState(0);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    > 
    <DropdownCont type={type}>
      {type === "Library" && 
        <Option
          bgColor={colors.primaryBlue}
          faIconName={faBook}
          text="Library"
          faIconNameRight={faClose}
          handleOption={onClose}
        />
      }
      {type === "Library" && libraryArray.map((o, i) => (
        <Option
          key={i}
          faIconName={faFolder}
          text={o.folder_name}
          faIconNameRight={faChevronRight}
          handleOption={o.handleClick}
          value={o.folder_id}
        />
      ))
      }
      {type === "Library" &&
        <ButtonCont>
          <Button
            text="New Folder"
            backgroundColor="transparent"
            type="IconButton"
            faIconName={faFolderPlus}
            handleClick={() => handleNewFolder("temp")}
          />
        </ButtonCont>
      }
      {type === "Typeface" && 
        <Option
          bgColor={colors.primaryBlue}
          faIconName={faFont}
          text="Typeface"
          faIconNameRight={faClose}
          handleOption={onClose}
        />
      }
      {type === "Typeface" && typefaceDataArr.map((o, i) => (<Option
        key={i}
        bgColor={"transparent"}
        faIconName={o.faIconName}
        text={o.text}
        inputType={o.inputType}
        width={o.width}
        unit={o.unit}
        placeholder={o.placeholder || "#"}
        src={o.src}
        onChange={typeArray[i].handleChange}
        value={typeArray[i].value}
      />))
      }
      {type === "Typeface" &&
        <ButtonCont>
          <Button
            text="Save Settings"
            backgroundColor="transparent"
            type="IconButton"
            faIconName={faFolderPlus}
            handleClick={handleSaveSetting}
          />
        </ButtonCont>
      }
    </DropdownCont >
    </motion.div>
  );
};
