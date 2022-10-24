import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { useEffect } from "react";
import {
  faVolumeHigh,
  faMagnifyingGlass,
  faFileLines,
  faHighlighter,
  faFont,
  faBookmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import mainHandler from "../../handlers/main";
import DictionaryDropdown from "../ToolBarDropdown/ToolBarDropdown";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import { FontDropdown } from "../ToolBarDropdown/ToolBarDropdown";
import { colors } from "../../styles/globals";

const ToolBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 53rem;
  position: relative;
  margin: 1rem;
`;

export default function ToolBar() {
  const [showLibrary, setShowLibrary] = useState(false);
  const [showFont, setShowFont] = useState(false);
  const [wordInfo, setWordInfo] = useState(null);
  const [showDictionary, setShowDictionary] = useState(false);

  /**
   *
   * Prop drilling
   * Fetch word information
   */
  const fetchInfo = async (e) => {
    e.preventDefault();
    try {
      const word = window.getSelection().toString();
      const res = await mainHandler.handleDictionary(word);
      if (res) {
        const { data } = res;
        const { definition } = data;
        // split the response string into an array using regex
        const newDefinition = definition.split(/1. |2. | 3. /);
        setWordInfo(newDefinition);
      }

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <ToolBarCont>
      <Icon
        faIconName={faVolumeHigh}
        text="Text-to-Speech"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={faMagnifyingGlass}
        handleClick={()=> fetchInfo()}
        text="Dictionary"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {showDictionary && (
        <DictionaryDropdown
          active={showDictionary}
          setActive={setShowDictionary}
          word = {word}
          wordInfo = {wordInfo}
        ></DictionaryDropdown>
      )}
      <Icon
        faIconName={faFileLines}
        text="Summarize"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={faHighlighter}
        text="Highlighter"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={faFont}
        handleClick={setShowFont}
        text="Typeface"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {showFont && (
        <FontDropdown
          active={showFont}
          setActive={setShowFont}
          top="2rem"
          left="25rem"
        ></FontDropdown>
      )}
      <Icon
        faIconName={faBookmark}
        handleClick={setShowLibrary}
        text="Save to Library"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {showLibrary && (
        <ToolBarDropdown
          active={showLibrary}
          setActive={setShowLibrary}
          top="2rem"
          left="40rem"
        ></ToolBarDropdown>
      )}
      <Icon
        faIconName={faDownload}
        text="Download"
        hoverColor={colors.backgroundYellow}
      ></Icon>
    </ToolBarCont>
  );
}
