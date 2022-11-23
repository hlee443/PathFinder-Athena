import styled from "styled-components";
import { colors } from "../../styles/globals";
import Dictionary from "../Dictionary/Dictionary";
import { useState } from "react";
import WordSaved from "../WordSaved/WordSaved";
import Icon from "../Icon/Icon";
import {
  faMagnifyingGlass,
  faClose,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const SideBarCont = styled.div`
  width: 25%;
  height: 100vh;
  background-color: ${colors.backgroundYellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  overflow-y: scroll;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 1rem;
`;
const Heading = styled.p``;
const CloseIcon = styled.div`
  align-self: flex-end;
`;

export default function SideBar({keywordArray=[], closeDictionary=()=>{}}) {
  const [showPopUp, setShowPopUp] = useState("type");
  // const [summarizedContent, setSummarizedContent] = useState(null);
  // const [wordInfo, setWordInfo] = useState(null);
  // const [highlightedNode, setHighlightedNode] = useState("");
  const closePopUp = () => {
    setShowPopUp("type");

    // clean up all the selected text and the api results
    // setSummarizedContent(null);
    // setWordInfo(null);
    // setHighlightedNode("");
  };

  return (
    <SideBarCont>
      <CloseIcon>
        <Icon faIconName={faClose}></Icon>
      </CloseIcon>
      <Section>
        <Icon faIconName={faMagnifyingGlass}></Icon>
        <Heading>Words</Heading>
      </Section>
      {
      keywordArray.map((keyword) => {
        return <WordSaved key={keyword.keyword_id} word={keyword.keyword_name} definition={keyword.keyword_definition} id= {keyword.keyword_id} onClose={closeDictionary}></WordSaved>
      })
      }
      <Section>
        <Icon faIconName={faFileLines}></Icon>
        <Heading>Summary</Heading>
      </Section>
      <WordSaved type="summary"></WordSaved>
    </SideBarCont>
  );
}
