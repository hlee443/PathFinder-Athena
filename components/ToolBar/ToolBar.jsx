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
import * as mainHandler from "../../handlers/main";
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
  const [wordInfo, setWordInfo] = useState(null);
  /**
   *
   *
   * Fetch word information
   */
  function fetchInfo(e) {
    e.preventDefault();
    try {
      const word = window.getSelection().toString();
      // callback 
      mainHandler.handleDictionary(word, (res) => {
        const { data } = res;
        const { definition } = data;
        console.log("RES", res);
        // split the response string into an array using regex
        const newDefinition = definition.split(/1. |2. | 3. /);

        setWordInfo(newDefinition);
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ToolBarCont>
      <Icon
        faIconName={faVolumeHigh}
        text="Text-to-Speech"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={faMagnifyingGlass}
        text="Dictionary"
        handleClick={fetchInfo}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {wordInfo && (
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  <span>{window.getSelection().toString()}</span>
                </th>
                <th>
                  <span>Definition</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>{wordInfo[1]}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>{wordInfo[2]}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
