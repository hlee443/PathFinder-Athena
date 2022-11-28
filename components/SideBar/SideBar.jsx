import styled from "styled-components";
import { colors } from "../../styles/globals";
import Dictionary from "../Dictionary/Dictionary";
import { useState } from "react";
import WordSaved from "../WordSaved/WordSaved";
import Icon from "../Icon/Icon";
import { Flexbox, Container } from "../../styles/globals";
import {
  faMagnifyingGlass,
  faClose,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../MediaQuery/data";

const SideBarCont = styled(Container)`
  // min-height: 100vh;
  height: 100vh;
  background-color: ${colors.backgroundCream};
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  justify-content: start;
  min-width: fit-content;
`;

const Category = styled(Flexbox)`
  justify-content: start;
  width: 100%;
  gap: 1rem;
`;

const Section = styled(Flexbox)`
  justify-content: start;
  width: 100%;
  gap: 3rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${colors.grey};
  width: 100%;
`;

const CloseIcon = styled.div`
  align-self: flex-end;
`;

const Header = styled(Flexbox)`
  justify-content: start;
  width: 100%;
`;

export default function SideBar({
  keywordArray = [],
  closeDictionary = () => { },
  handleSidebar = () => { },
}) {

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
        <Icon
          handleClick={handleSidebar}
          faIconName={faClose} />
      </CloseIcon>
      <Section>
        <Category>
        <Header dir="row">
          <Icon faIconName={faMagnifyingGlass} />
          <p>Words</p>
        </Header>
        {
          keywordArray.map((keyword) => {
            return <WordSaved
              key={keyword.keyword_id}
              word={keyword.keyword_name}
              definition={keyword.keyword_definition}
              id={keyword.keyword_id}
              onClose={closeDictionary} />
          })
        }
        </Category>
        <Divider />
        <Category>
        <Header dir="row">
          <Icon faIconName={faFileLines} />
            <p>Summary</p>
          </Header>
          <WordSaved type="summary" />
        </Category>
      </Section>
    </SideBarCont>
  );
}
