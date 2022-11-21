import styled from "styled-components";
import { colors } from "../../styles/globals";
import Dictionary from "../Dictionary/Dictionary";
import { useState } from "react";
import WordSaved from "../WordSaved/WordSaved";
import Icon from "../Icon/Icon";
import { faMagnifyingGlass, faClose } from "@fortawesome/free-solid-svg-icons";

const SideBarCont = styled.div`
  width: 25%;
  height: 100vh;
  background-color: ${colors.backgroundYellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const WordHeading = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`;
const Heading = styled.p``;
const CloseIcon = styled.div`
  align-self: flex-end;
`;

export default function SideBar() {
  const [showPopUp, setShowPopUp] = useState("type");
  const [summarizedContent, setSummarizedContent] = useState(null);
  const [wordInfo, setWordInfo] = useState(null);
  const [highlightedNode, setHighlightedNode] = useState("");
  const closePopUp = () => {
    setShowPopUp("type");

    // clean up all the selected text and the api results
    setSummarizedContent(null);
    setWordInfo(null);
    setHighlightedNode("");
  };
  return (
    <SideBarCont>
      <CloseIcon>
        <Icon faIconName={faClose}></Icon>
      </CloseIcon>
      <WordHeading>
        <Icon faIconName={faMagnifyingGlass}></Icon>
        <Heading>Words</Heading>
      </WordHeading>
      <WordSaved></WordSaved>
      <WordSaved></WordSaved>
    </SideBarCont>
  );
}
