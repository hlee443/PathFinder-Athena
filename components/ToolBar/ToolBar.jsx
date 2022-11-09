import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import Summary from "../Summary/Summary";
import { colors, Flexbox } from "../../styles/globals";
import * as mainHandler from "../../handlers/main";
import Dictionary from "../Dictionary/Dictionary";
import { toolBarData, toolbarNum } from "./data";

const ToolBarCont = styled(Flexbox)`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 6px 40px;
  border-bottom: 1px solid ${colors.grey};
  background: ${colors.backgroundWhite};
`;

const Divider = styled.div`
  height: 50px;
  border: 0.5px solid #cacaca;
  margin: auto 1.5rem;
`;

export default function ToolBar({
  typeArray = [],
  libraryArray = [],
  handleNewFolder = () => {},
  handleSaveSetting = () => {},
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
    setShowPopUp("type");

    // clean up all the selected text and the api results
    setSummarizedContent(null);
    setWordInfo(null);
    setHighlightedText("");
  };

  useEffect(() => {
    // add event listener to the document
    const saveSelection = () => {
      setHighlightedText(window.getSelection().toString());
    };

    document.addEventListener("mousedown", saveSelection);

    // remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", saveSelection);
    };
  }, []);

  async function fetchSummarize(e) {
    e.preventDefault();
    try {
      const res = await mainHandler.handleSummarize(highlightedText); // call handler for axios call
      if (res) {
        console.log(res);
        setSummarizedContent(res.data.summary);
        setShowPopUp("summarize");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function fetchDictionary(e) {
    e.preventDefault();
    try {
      // callback
      mainHandler.handleDictionary(highlightedText, (res) => {
        console.log(res)
        const { data } = res;
        const { definition } = data;
        // console.log("RES", res);
        // console.log("definition", data[0].meta.stems);

        // split the response string into an array using regex
        const newDefinition = data[0].shortdef[0];

        setWordInfo(newDefinition);
        setShowPopUp("definition");
      });
    } catch (err) {
      console.error(err);
    }
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
      <Icon
        faIconName={toolBarData[toolbarNum + 1].icon}
        text={toolBarData[toolbarNum + 1].name}
        handleClick={(e) => fetchDictionary(e)}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider />
      {wordInfo && showPopUp === "definition" && (
        <Dictionary
          word={highlightedText}
          wordDefinition={wordInfo[1]}
          onClose={closePopUp}
        ></Dictionary>
      )}

      {/* SUMMARIZE */}
      <Icon
        faIconName={toolBarData[toolbarNum + 2].icon}
        text={toolBarData[toolbarNum + 2].name}
        handleClick={(e) => fetchSummarize(e)}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider />
      {summarizedContent && showPopUp === "summarize" && (
        <Summary
          originalContent={highlightedText}
          summarizedContent={summarizedContent}
          onClose={closePopUp}
        ></Summary>
      )}

      {/* HIGHLIGHT */}
      <Icon
        faIconName={toolBarData[toolbarNum + 3].icon}
        text={toolBarData[toolbarNum + 3].name}
        hoverColor={colors.buttonLightGrey}
      />
      <Divider />

      {/* TYPEFACE SETTING */}
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 4].icon}
          handleClick={() => setShowDropdown("typeface")}
          text={toolBarData[toolbarNum + 4].name}
          hoverColor={colors.buttonLightGrey}
        />
        {showDropdown === "typeface" && (
          <ToolBarDropdown
            type="Typeface"
            onClose={closeDropdown}
            typeArray={typeArray}
            handleSaveSetting={handleSaveSetting}
          ></ToolBarDropdown>
        )}
      </div>
      <Divider />

      {/* SAVE TO LIBRARY */}
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 5].icon}
          handleClick={() => setShowDropdown("library")}
          text={toolBarData[toolbarNum + 5].name}
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
      </div>
      <Divider />

      {/* DOWNLOAD */}
      <Icon
        faIconName={toolBarData[toolbarNum + 6].icon}
        text={toolBarData[toolbarNum + 6].name}
        hoverColor={colors.buttonLightGrey}
      />
    </ToolBarCont>
  );
}
