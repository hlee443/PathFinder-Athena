import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import Summary from "../Summary/Summary";
import { colors, Flexbox } from "../../styles/globals";
import * as mainHandler from "../../handlers/main";
import Dictionary from "../Dictionary/Dictionary";
import { toolBarData, toolbarNum } from "./data";
import { useRouter } from "next/router";
import { mediaQuery } from "../../MediaQuery/data";
import useMediaQuery from "../../MediaQuery/MediaQuery";
import Label from "../Label/Label";
import HighlightDropdown from "../HighlightDropdown/HighlightDropdown";
 import { motion } from "framer-motion";

const ToolBarCont = styled(Flexbox)`
  background-color: ${colors.backgroundWhite};
  height: fit-content;
  width: 100vw;
  border-bottom: 1px solid ${colors.grey};
  user-select: none;
  justify-content: start;
  padding: 0.5rem 1rem;
  gap: 1.5rem;
  overflow-x: scroll;

  @media ${mediaQuery.maxWidth.tablet} {
    gap: 1rem;
  }
`;

const Divider = styled.div`
  height: 3rem;
  border: 0.5px solid ${colors.lightGrey};

  @media ${mediaQuery.maxWidth.mobile} {
    height: 2rem;
  }
`;

const IconCont = styled(Flexbox)`

`


export default function ToolBar({
  typeArray = [],
  libraryArray = [],
  handleNewFolder = () => { },
  handleSaveSetting = () => { },
  handleSummary = () => { },
  handleDictionary = () => { },
  handleChangeHighlightColor= () => {},
  currentHighlightColor = {},
  handleDownloadFile = () => { },
}) {
  const router = useRouter();
  const [sel, setSel] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [wordInfo, setWordInfo] = useState(null);
  const [showPopUp, setShowPopUp] = useState("type");
  const [label, setLabel] = useState(false);

  const isMobile = useMediaQuery(mediaQuery.maxWidth.mobile);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleLabel = (num) => {
    if (setSel) {
      setLabel(true),
        setSel(num);
    } else setLabel(false);
  }

  const closePopUp = () => {
    setShowPopUp("type");

    // clean up all the selected text and the api results
    setWordInfo(null)
  }



  return (
    <ToolBarCont dir="row">
      {/* TTS */}
      {/* <Icon
        faIconName={toolBarData[toolbarNum].icon}
        text={toolBarData[toolbarNum].name}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider /> */}

      {/* DICTIONARY */}
      <IconCont dir={isMobile ? "row" : "column"}
        onMouseEnter={() => handleLabel(0)}
        onMouseLeave={handleLabel}
      >
        <Icon
          faIconName={toolBarData[toolbarNum + 1].icon}
          text={isMobile ? null : toolBarData[toolbarNum + 1].name}
          handleClick={handleDictionary}
          hoverColor={colors.buttonLightGrey}
        />
        {isMobile && label && sel === 0 && <Label text={toolBarData[toolbarNum + 1].name} />}
      </IconCont>
      <Divider />

      {/* SUMMARIZE */}
      <IconCont dir={isMobile ? "row" : "column"}
        onMouseEnter={() => handleLabel(1)}
        onMouseLeave={handleLabel}
      >
        <Icon
          faIconName={toolBarData[toolbarNum + 2].icon}
          text={isMobile ? null : toolBarData[toolbarNum + 2].name}
          handleClick={handleSummary}
          hoverColor={colors.buttonLightGrey}
        />
        {isMobile && label && sel === 1 && <Label text={toolBarData[toolbarNum + 2].name} />}
      </IconCont>
      <Divider />

      {/* HIGHLIGHT */}
      <IconCont dir={isMobile ? "row" : "column"}
        onMouseEnter={() => handleLabel(2)}
        onMouseLeave={handleLabel}
      >
        <Icon
          faIconName={toolBarData[toolbarNum + 3].icon}
          text={isMobile ? null : toolBarData[toolbarNum + 3].name}
          hoverColor={colors.buttonLightGrey}
          handleClick={() => setShowDropdown("highlightColor")}
        />
        {
          showDropdown === 'highlightColor' && (
            <HighlightDropdown
              currentHighlightColor = {currentHighlightColor}
              handleChangeHighlightColor={handleChangeHighlightColor}
              onClose={closeDropdown}
            />
          )
        }
        {isMobile && label && sel === 2 && <Label text={toolBarData[toolbarNum + 3].name} />}
      </IconCont>
      <Divider />

      {/* TYPEFACE SETTING */}
      <IconCont dir={isMobile ? "row" : "column"}
        onMouseEnter={() => handleLabel(3)}
        onMouseLeave={handleLabel}
      >
        <Icon
          faIconName={toolBarData[toolbarNum + 4].icon}
          handleClick={() => setShowDropdown("typeface")}
          text={isMobile ? null : toolBarData[toolbarNum + 4].name}
          hoverColor={colors.buttonLightGrey}
        />
        {showDropdown === "typeface" && (
          <ToolBarDropdown
            type="Typeface"
            onClose={closeDropdown}
            typeArray={typeArray}
            handleSaveSetting={handleSaveSetting}
          />
        )}
        {isMobile && label && sel === 3 && <Label text={toolBarData[toolbarNum + 4].name} />}
      </IconCont>
      <Divider />

      {/* SAVE TO LIBRARY */}
      <IconCont dir={isMobile ? "row" : "column"}
        onMouseEnter={() => handleLabel(4)}
        onMouseLeave={handleLabel}
      >
        <Icon
          faIconName={toolBarData[toolbarNum + 5].icon}
          handleClick={() => setShowDropdown("library")}
          text={isMobile ? null : toolBarData[toolbarNum + 5].name}
          hoverColor={colors.buttonLightGrey}
        />

        {showDropdown === "library" && (
          <ToolBarDropdown
            type="Library"
            libraryArray={libraryArray}
            onClose={closeDropdown}
            handleNewFolder={handleNewFolder}
          />
        )}
        {isMobile && label && sel === 4 && <Label text={toolBarData[toolbarNum + 5].name} />}
      </IconCont>
      <Divider />

      {/* DOWNLOAD */}
      <IconCont dir={isMobile ? "row" : "column"}
        onMouseEnter={() => handleLabel(5)}
        onMouseLeave={handleLabel}>
        <Icon
          faIconName={toolBarData[toolbarNum + 6].icon}
          handleClick={handleDownloadFile}
          text={isMobile ? null : toolBarData[toolbarNum + 6].name}
          hoverColor={colors.buttonLightGrey}
        />
        {isMobile && label && sel === 5 && <Label text={toolBarData[toolbarNum + 6].name} />}
      </IconCont>
    </ToolBarCont>
  );
}
