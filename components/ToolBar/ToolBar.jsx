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
import Summary from '../Summary/Summary';
import { colors } from "../../styles/globals";
import * as mainHandler from '../../handlers/main'
import Dictionary from "../Dictionary/Dictionary";
import { motion } from "framer-motion";

const ToolBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 53rem;
  position: relative;
  margin: 1rem;
`;

// export const iconArr = [
//   {
//     name: "Text-to-Speech",
//     icon: faVolumeHigh,
//   },
//   {
//     name: "Dictionary",
//     icon: faMagnifyingGlass,
//   },
//   {
//     name: "Summarize",
//     icon: faFileLines,
//   },
//   {
//     name: "Highlighter",
//     icon: faHighlighter,
//   },
//   {
//     name: "Typeface",
//     icon: faFont,
//   },
//   {
//     name: "Save to library",
//     icon: faBookmark,
//   },
//   {
//     name: "Download",
//     icon: faDownload,
//   }
// ];

export default function ToolBar({
  onChange = () => {},
  typeValueArr,
  libValueArr
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
      if(res){
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
    <ToolBarCont>
      <motion.div
        whileHover={{ scale:1.3 }}
      >
      <Icon
        faIconName={faMagnifyingGlass}
        text="Dictionary"
        handleClick={(e) => fetchDictionary(e)}
        hoverColor={colors.backgroundYellow}
      ></Icon> 
      </motion.div>
      {
        wordInfo && showPopUp === "definition" && (
          <Dictionary
            word={highlightedText}
            wordDefinition={wordInfo[1]}
            onClose={closePopUp}
          ></Dictionary>
        )
      }
      <motion.div
        whileHover={{ scale:1.3 }}
      >      
      <Icon
        faIconName={faVolumeHigh}
        text="Text-to-Speech"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      </motion.div>
      <motion.div
        whileHover={{ scale:1.3 }}
      >
      <Icon
        faIconName={faFileLines}
        text="Summarize"
        handleClick={(e) => fetchSummarize(e)}
        hoverColor={colors.backgroundYellow}
      ></Icon>
      </motion.div>
      {
        summarizedContent && showPopUp === "summarize" && (
          <Summary
            originalContent={highlightedText}
            summarizedContent={summarizedContent}
            onClose={closePopUp}
          ></Summary>
        )
      }
      <motion.div
        whileHover={{ scale:1.3 }}
      >
      <Icon
        faIconName={faHighlighter}
        text="Highlighter"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      </motion.div>
      <motion.div
        whileHover={{ scale:1.3 }}
      >
      <Icon
        faIconName={faFont}
        handleClick={()=>setShowDropdown("typeface")}
        text="Typeface"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      </motion.div>
      <motion.div
        whileHover={{ scale:1.3 }}
      >
      <Icon
        faIconName={faBookmark}
        handleClick={()=>setShowDropdown("library")}
        text="Save to Library"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      </motion.div>
      <motion.div
        whileHover={{ scale:1.3 }}
      >
      <Icon
        faIconName={faDownload}
        text="Download"
        hoverColor={colors.backgroundYellow}
      ></Icon>
      </motion.div>
      {
        showDropdown === "library" && <ToolBarDropdown
          type="Library"
          onClose={closeDropdown}
          libValueArr={libValueArr}
          onChange={onChange}
        ></ToolBarDropdown>
      }
      {
        showDropdown === "typeface" && <ToolBarDropdown
          type="Typeface"
          onClose={closeDropdown}
          typeValueArr={typeValueArr}
          onChange={onChange}
        ></ToolBarDropdown>
      }
    </ToolBarCont>
  )

  // return (
  //   <ToolBarCont>
  //     {
  //       iconArr.map((o, i) => <Icon
  //         key={i}
  //         hoverColor={
  //           (sel === i)
  //             ? colors.backgroundYellow
  //             : "transparent"
  //         }
  //         faIconName={o.icon}
  //         text={o.name}
  //         onClose ={closeDropdown}
  //         handleClick={() => { setSel(i), setShowDropdown(o.name) }}>
  //       </Icon>)
  //     }
  //     {showDropdown !== false && <ToolBarDropdown
  //       type={showDropdown}
  //       onClose={closeDropdown}
  //     ></ToolBarDropdown>
  //     }
  //   </ToolBarCont>
  // );
};