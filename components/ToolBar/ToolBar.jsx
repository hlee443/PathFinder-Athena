import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import Summary from '../Summary/Summary';
import { colors, Flexbox } from "../../styles/globals";
import * as mainHandler from '../../handlers/main'
import Dictionary from "../Dictionary/Dictionary";
import { toolBarData, toolbarNum } from "./data";

const ToolBarCont = styled(Flexbox)`
  justify-content: flex-start;
  align-items: center;
  height: 6rem;
  width: 100%;
  padding: 0 1.875rem;
  border-bottom: 1px solid ${colors.grey};
  background: ${colors.backgroundWhite};
  gap: 1.5rem;
`;

const ToolbarIcon = styled(Icon)`
  justify-content: space-around;
  width: fit-content;
  height: 6rem;
`

const Divider = styled.div`
  height: 3.75rem;
  border: 0.5px solid ${colors.lightGrey};
`;

export default function ToolBar({
  typeArray = [],
  libraryArray = [],
  handleNewFolder = () => { },
  handleSaveSetting = () => { }
}) {

  const [sel, setSel] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [summarizedContent, setSummarizedContent] = useState(null);
  const [wordInfo, setWordInfo] = useState(null);
  const [highlightedText, setHighlightedText] = useState("");
  const [showPopUp, setShowPopUp] = useState("type");

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const closePopUp = () => {
    setShowPopUp("type")

    // clean up all the selected text and the api results
    setSummarizedContent(null)
    setWordInfo(null)
    setHighlightedText('')
  }

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

  async function fetchSummarize(e) {
    e.preventDefault()
    try {
      const res = await mainHandler.handleSummarize(highlightedText) // call handler for axios call
      if (res) {
        console.log(res)
        setSummarizedContent(res.data.summary)
        setShowPopUp("summarize")
      }
    } catch (error) {
      console.log(error)
    }
  };

  function fetchDictionary(e) {
    e.preventDefault();
    try {
      // callback
      mainHandler.handleDictionary(highlightedText, (res) => {
        const { data } = res;
        const { definition } = data;
        console.log("RES", res);
        // split the response string into an array using regex
        const newDefinition = definition.split(/1. |2. |3. /);

        setWordInfo(newDefinition);
        setShowPopUp("definition")
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ToolBarCont dir="row">
      {/* TTS */}
      {/* <ToolbarIcon
        faIconName={toolBarData[toolbarNum].icon}
        text={toolBarData[toolbarNum].name}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider /> */}

      {/* DICTIONARY */}
      <ToolbarIcon
        faIconName={toolBarData[toolbarNum + 1].icon}
        text={toolBarData[toolbarNum + 1].name}
        handleClick={(e) => fetchDictionary(e)}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider />
      {
        wordInfo && showPopUp === "definition" && (
          <Dictionary
            word={highlightedText}
            wordDefinition={wordInfo[1]}
            onClose={closePopUp}
          ></Dictionary>
        )
      }

      {/* SUMMARIZE */}
      <ToolbarIcon
        faIconName={toolBarData[toolbarNum + 2].icon}
        text={toolBarData[toolbarNum + 2].name}
        handleClick={(e) => fetchSummarize(e)}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider />
      {
        summarizedContent && showPopUp === "summarize" && (
          <Summary
            originalContent={highlightedText}
            summarizedContent={summarizedContent}
            onClose={closePopUp}
          ></Summary>
        )
      }

      {/* HIGHLIGHT */}
      <ToolbarIcon
        faIconName={toolBarData[toolbarNum + 3].icon}
        text={toolBarData[toolbarNum + 3].name}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider />

      {/* TYPEFACE SETTING */}
      <div>
        <ToolbarIcon
          faIconName={toolBarData[toolbarNum + 4].icon}
          handleClick={() => setShowDropdown("typeface")}
          text={toolBarData[toolbarNum + 4].name}
          hoverColor={colors.buttonLightGrey}
        />
        {
          showDropdown === "typeface" && <ToolBarDropdown
            type="Typeface"
            onClose={closeDropdown}
            typeArray={typeArray}
            handleSaveSetting={handleSaveSetting}
          ></ToolBarDropdown>
        }
      </div>
      <Divider />

      {/* SAVE TO LIBRARY */}
      <div>
        <ToolbarIcon
          faIconName={toolBarData[toolbarNum + 5].icon}
          handleClick={() => setShowDropdown("library")}
          text={toolBarData[toolbarNum + 5].name}
          hoverColor={colors.buttonLightGrey}
        />

        {
          showDropdown === "library" && <ToolBarDropdown
            type="Library"
            libraryArray={libraryArray}
            onClose={closeDropdown}
            handleNewFolder={handleNewFolder}
          />
        }
      </div>
      <Divider />

      {/* DOWNLOAD */}
      <ToolbarIcon
        faIconName={toolBarData[toolbarNum + 6].icon}
        text={toolBarData[toolbarNum + 6].name}
        hoverColor={colors.buttonLightGrey}
      />
    </ToolBarCont>
  )
};