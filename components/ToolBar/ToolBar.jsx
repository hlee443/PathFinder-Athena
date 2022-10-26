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

export const iconArr = [
  {
    name: "Text-to-Speech",
    icon: faVolumeHigh,
  },
  {
    name: "Dictionary",
    icon: faMagnifyingGlass,
  },
  {
    name: "Summarize",
    icon: faFileLines,
  },
  {
    name: "Highlighter",
    icon: faHighlighter,
  },
  {
    name: "Typeface",
    icon: faFont,
  },
  {
    name: "Save to library",
    icon: faBookmark,
  },
  {
    name: "Download",
    icon: faDownload,
  }
];

export default function ToolBar() {

  const [sel, setSel] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  
  const [summarizedContent, setSummarizedContent] = useState(null);
  const [highlightedText, setHighlightedText] = useState("");

  useEffect(() => {
    // add event listener to the document
    const saveSelection = () => {
      setHighlightedText(window.getSelection().toString())
    }
    
    document.addEventListener("mousedown", saveSelection);

    // remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", saveSelection);
    };
  }, []);

  async function fetchSummarize(e){
    e.preventDefault()

    try {
      const res = await mainHandler.handleSummarize(highlightedText) // call handler for axios call
      if(res){
          console.log(res)
          setSummarizedContent(res.data.summary)
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <ToolBarCont>
      {
        iconArr.map((o, i) => <Icon
          key={i}
          hoverColor={
            (sel === i)
              ? colors.backgroundYellow
              : "transparent"
          }
          faIconName={o.icon}
          text={o.name}
          onClose ={closeDropdown}
          handleClick={() => { setSel(i), setShowDropdown(o.name) }}>
        </Icon>)
      }
      {showDropdown !== false && <ToolBarDropdown
        type={showDropdown}
        onClose={closeDropdown}
      ></ToolBarDropdown>
      }
    </ToolBarCont>
  );
};

{/* <Icon
        faIconName={faMagnifyingGlass}
        text="Dictionary"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon> */}
{/* <Icon
        faIconName={faVolumeHigh}
        text="Text-to-Speech"
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
            <h2>Summarize</h2>
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
        handleClick={setShowDropdown}
        text="Typeface"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      <Icon
        faIconName={faBookmark}
        handleClick={setShowDropdown}
        text="Save to Library"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon>
      <Icon
        faIconName={faDownload}
        text="Download"
        hoverColor={colors.backgroundYellow}
        paddingTop="1rem"
      ></Icon> */}