import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import {
  faVolumeHigh,
  faMagnifyingGlass,
  faFileLines,
  faHighlighter,
  faFont,
  faBookmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import ToolBarDropdown, {
  DictionaryDropdown,
} from "../ToolBarDropdown/ToolBarDropdown";
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


  return (
    <ToolBarCont>
      <Icon
        faIconName={faVolumeHigh}
        text="Text-to-Speech"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      <Icon
        faIconName={faMagnifyingGlass}
        text="Dictionary"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      <Icon
        faIconName={faFileLines}
        text="Summarize"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      <Icon
        faIconName={faHighlighter}
        text="Highlighter"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      <Icon
        faIconName={faFont}
        handleClick={setShowFont}
        text="Typeface"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
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
        paddingTop="1rem"
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
        paddingTop="1rem"
      ></Icon>
    </ToolBarCont>
  );
}
