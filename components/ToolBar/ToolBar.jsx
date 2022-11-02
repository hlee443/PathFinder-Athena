import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import Summary from '../Summary/Summary';
import { colors, Flexbox } from "../../styles/globals";
import * as mainHandler from '../../handlers/main'
import Dictionary from "../Dictionary/Dictionary";
import { toolBarData, toolbarnum } from "./data";

const ToolBarCont = styled(Flexbox)`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 6px 40px;
  border-bottom: 1px solid #CACACA;
`;

const Divider = styled.div`

`

export default function ToolBar() {

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
  }

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
  }

 

  return (
    <ToolBarCont dir="row">
      <Icon
        faIconName={toolBarData[toolbarnum].icon}
        text={toolBarData[toolbarnum].name}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={toolBarData[toolbarnum+1].icon}
        text={toolBarData[toolbarnum+1].name}
        handleClick={(e) => fetchDictionary(e)}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {
        wordInfo && showPopUp === "definition" && (
          <Dictionary
            word={highlightedText}
            wordDefinition={wordInfo[1]}
            onClose={closePopUp}
          ></Dictionary>
        )
      }
      <Icon
        faIconName={toolBarData[toolbarnum+2].icon}
        text={toolBarData[toolbarnum+2].name}
        handleClick={(e) => fetchSummarize(e)}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {
        summarizedContent && showPopUp === "summarize" && (
          <Summary
            originalContent={highlightedText}
            summarizedContent={summarizedContent}
            onClose={closePopUp}
          ></Summary>
        )
      }
      <Icon
        faIconName={toolBarData[toolbarnum+3].icon}
        text={toolBarData[toolbarnum+3].name}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={toolBarData[toolbarnum+4].icon}
        handleClick={() => setShowDropdown("typeface")}
        text={toolBarData[toolbarnum+4].name}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={toolBarData[toolbarnum+5].icon}
        handleClick={() => setShowDropdown("library")}
        text={toolBarData[toolbarnum+5].name}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      <Icon
        faIconName={toolBarData[toolbarnum+6].icon}
        text={toolBarData[toolbarnum+6].name}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      {
        showDropdown === "library" && <ToolBarDropdown
          type="Library"
          onClose={closeDropdown}
        ></ToolBarDropdown>
      }
      {
        showDropdown === "typeface" && <ToolBarDropdown
          type="Typeface"
          onClose={closeDropdown}
        ></ToolBarDropdown>
      }
    </ToolBarCont>
  )
};