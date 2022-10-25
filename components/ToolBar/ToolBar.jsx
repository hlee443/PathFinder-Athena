import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";
import {
  faVolumeHigh,
  faMagnifyingGlass,
  faFileLines,
  faHighlighter,
  faFont,
  faBookmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import { FontDropdown } from "../ToolBarDropdown/ToolBarDropdown";
import { colors } from "../../styles/globals";
import * as mainHandler from '../../handlers/main'

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
  const [summarizedContent, setSummarizedContent] = useState(null);
  const [highlightedText, setHighlightedText] = useState("");

  // useEffect(() => {
  //   // add event listener to the document
  //   const saveSelection = () => {
  //     setHighlightedText(window.getSelection().toString())
  //     console.log("Highlighted", highlightedText)
  //   }
    
  //   document.addEventListener("mouseup", saveSelection);

  //   // remove event listener when component unmounts
  //   return () => {
  //     document.removeEventListener("mouseup", saveSelection);
  //   };
  // }, []);

  function fetchSummarize(e){
    e.preventDefault()

    try {
      const postContent = window.getSelection().toString()
      // console.log("window", window)
      // console.log("WINDOW", window.getSelection().toString())
      console.log("POST CONTENT", postContent)

      // const res = await mainHandler.handleSummarize(postContent) // call handler for axios call
      // if(res){
      //     console.log(res)
      //     setSummarizedContent(res.data.summary)
    //   }
    } catch (error) {
        console.log(error)
    }
  }

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
        handleClick={(e) => fetchSummarize(e)}
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      {
        summarizedContent && (
          <>
            <p>
              {summarizedContent}
            </p>
          </>
        )
      }
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
