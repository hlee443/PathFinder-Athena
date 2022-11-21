import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";
import Summary from "../Summary/Summary";
import { colors, Flexbox } from "../../styles/globals";
import * as mainHandler from "../../handlers/main";
import Dictionary from "../Dictionary/Dictionary";
import { toolBarData, toolbarNum } from "./data";
import * as ReactDomClient from 'react-dom/client'



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
  typeArray = [],
  libraryArray = [],
  handleNewFolder = () => {},
  handleSaveSetting = () => {},
  handleUpdateFileContent = () => {},
  highlightedNode = ""
}) {
  const [sel, setSel] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [wordInfo, setWordInfo] = useState(null);
  const [showPopUp, setShowPopUp] = useState("type");

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const closeSummary = (e) => {
    e.preventDefault()
    e.stopPropagation()

      const selectedElement = e.target.parentElement

      const selectedSummaryComponent = selectedElement.closest('.summarize__wrapper-container')

      const grandParentElement = selectedElement.closest('#selectedNode__container') ? selectedElement.closest('#selectedNode__container') : selectedElement.closest('.selectedNode__highlighted')
      const selectedHighlightedNode = selectedElement
      while(!selectedHighlightedNode.classList.contains('selectedNode__highlighted')){
        selectedHighlightedNode = selectedHighlightedNode.parentElement
      }

      const highlightedContainer = selectedHighlightedNode.querySelector('.selectedNode__highlighted > .highlighted__container')

      selectedSummaryComponent.classList.add('summary--close')
      setTimeout(() => {
      
        selectedSummaryComponent.remove()
        grandParentElement.parentElement.replaceChild(highlightedContainer.firstChild, grandParentElement)
        grandParentElement.remove()

        handleUpdateFileContent()

      }, 600)

     
  
  }

  const closePopUp = () => {
    setShowPopUp("type");

    // clean up all the selected text and the api results
    setWordInfo(null)
  }

  function renderSummaryComponent(summaryContent){
    const summaryComponent = (<Summary  
      summarizedContent={summaryContent}
      onClose={(e) => closeSummary(e)}
    />)

    const container = document.querySelector('#selectedNode__container > .selectedNode__highlighted')
    
    const summaryWrapperContainer = document.createElement('div')

      summaryWrapperContainer.classList.add('summarize__wrapper-container')

    container.appendChild(summaryWrapperContainer)

    const root = ReactDomClient.createRoot(document.querySelector('#selectedNode__container .summarize__wrapper-container'))

    root.render(summaryComponent)

    handleUpdateFileContent()

  }


  async function fetchSummarize(e) {
    e.preventDefault();
    try {
      const res = await mainHandler.handleSummarize(highlightedNode.textContent) // call handler for axios call
      if (res) {
        console.log(res)
    
        renderSummaryComponent(res.data.summary)
       
      }
    } catch (error) {
      console.log(error);
    }
  }

  function fetchDictionary(e) {
    e.preventDefault();
    try {
      // callback
      mainHandler.handleDictionary(highlightedNode.textContent, (res) => {
        console.log(res)
        const { data } = res;
        const { definition } = data;
        // console.log("RES", res);
        // console.log("definition", data[0].meta.stems);

        // split the response string into an array using regex
        const newDefinition = data[0].shortdef[0];
        // console.log(newDefinition)

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
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 1].icon}
          text={toolBarData[toolbarNum + 1].name}
          handleClick={(e) => fetchDictionary(e)}
          hoverColor={colors.buttonLightGrey}
        />
      </div>
      {
        wordInfo && showPopUp === "definition" && (
          <Dictionary
            word={highlightedNode.textContent}
            wordDefinition={wordInfo}
            onClose={closePopUp}
          ></Dictionary>
        )
      }
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
      {
        // summarizedContent && showPopUp === "summarize" && (
        //   <Summary
        //     summarizedContent={summarizedContent}
        //     onClose={closePopUp}
        //   ></Summary>
        // )
      }
      <Divider />

      {/* HIGHLIGHT */}
      <div>
        <Icon
          faIconName={toolBarData[toolbarNum + 3].icon}
          text={toolBarData[toolbarNum + 3].name}
          hoverColor={colors.buttonLightGrey}
          handleClick={()=> console.log("change highlighter color")}
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
};
