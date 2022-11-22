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

const ToolBarCont = styled(Flexbox)`
  justify-content: flex-start;
  align-items: center;
  height: 6rem;
  width: 100%;
  padding: 0 1.875rem;
  border-bottom: 1px solid ${colors.grey};
  background: ${colors.backgroundWhite};
  user-select: none;
  gap: 1.5rem;
`;

const Divider = styled.div`
  height: 3.75rem;
  border: 0.5px solid ${colors.lightGrey};
`;

export default function ToolBar({
  typeArray,
  libraryArray,
  handleNewFolder = () => {},
  handleSaveSetting = () => {},
}) {
  const router = useRouter();
  const [sel, setSel] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [summarizedContent, setSummarizedContent] = useState(null);
  const [wordInfo, setWordInfo] = useState(null);
  const [word, setWord] = useState(null);
  const [highlightedNode, setHighlightedNode] = useState("");
  const [showPopUp, setShowPopUp] = useState("type");

  const [fileData, setFileData] = useState({});

  const [activateHighlight, setActivateHighlight] = useState(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const closePopUp = () => {
    setShowPopUp("type");

    // clean up all the selected text and the api results
    setSummarizedContent(null);
    setWordInfo(null);
    setHighlightedNode("");
  };

  useEffect(() => {
    // add event listener to the document

    console.log("Highlight State", activateHighlight);

    if (activateHighlight) {
      const saveSelection = () => {
        const selected = window.getSelection();

        const rangeCount = selected.rangeCount;

        if (rangeCount !== 0) {
          const range = selected.getRangeAt(0);

          const highlightedNode = document.createElement("span");
          highlightedNode.className = "highlighted";
          range.surroundContents(highlightedNode);

          setHighlightedNode(highlightedNode);
          console.log("highlighted Node", highlightedNode);
        }
      };

      document.addEventListener("mousedown", saveSelection);

      // remove event listener when component unmounts
      return () => {
        document.removeEventListener("mousedown", saveSelection);
      };
    }
  });

  useEffect(() => {
    console.log("virus");
    if (!router.query.fileData) {
      return;
    }
    setFileData(JSON.parse(router.query.fileData));
  }, []);

  async function fetchSummarize(e) {
    e.preventDefault();
    try {
      const res = await mainHandler.handleSummarize(
        highlightedNode.textContent
      ); // call handler for axios call
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
    console.log("fetch dictionary done");
    try {
      //   // callback
      mainHandler.handleDictionary(highlightedNode.textContent, (res) => {
        const { data } = res;
        const { definition } = data;
        const newDefinition = data[0].shortdef[0];
        setWord(highlightedNode.textContent);
        setWordInfo(newDefinition);
        setShowPopUp("definition");
        let keywordData = {
          keywordData: {
            fileId: fileData.file_id,
            keywordName: highlightedNode.textContent,
            keywordDefinition: data[0].shortdef[0],
          },
        };
        // add keyword to database
        // console.log(keywordData);
        mainHandler.handleAddKeyword(keywordData);

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
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 1].icon}
          text={toolBarData[toolbarNum + 1].name}
          handleClick={(e) => fetchDictionary(e)}
          hoverColor={colors.buttonLightGrey}
        />
      </div>
      {wordInfo && showPopUp === "definition" && (
        <Dictionary
          word={highlightedNode.textContent}
          wordDefinition={wordInfo}
          onClose={closePopUp}
        ></Dictionary>
      )}
      <Divider />
      {/* SUMMARIZE */}
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 2].icon}
          text={toolBarData[toolbarNum + 2].name}
          handleClick={(e) => fetchSummarize(e)}
          hoverColor={colors.buttonLightGrey}
        />
      </div>
      {summarizedContent && showPopUp === "summarize" && (
        <Summary
          summarizedContent={summarizedContent}
          onClose={closePopUp}
        ></Summary>
      )}
      <Divider />

      {/* HIGHLIGHT */}
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 3].icon}
          text={toolBarData[toolbarNum + 3].name}
          hoverColor={colors.buttonLightGrey}
          handleClick={() =>
            activateHighlight
              ? setActivateHighlight(false)
              : setActivateHighlight(true)
          }
        />
      </div>
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
          />
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
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 6].icon}
          text={toolBarData[toolbarNum + 6].name}
          hoverColor={colors.buttonLightGrey}
        />
      </div>
    </ToolBarCont>
  );
}
