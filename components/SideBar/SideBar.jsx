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
  position: sticky;
  top: 13rem;
  height: 70vh;
  background-color: ${colors.backgroundCream};
  padding: 2rem;
  gap: 1rem;
  width: 100%;
  justify-content: start;
  /* min-width: fit-content; */
  user-select: none;
  flex-basis: 30vw;

  @media ${mediaQuery.maxWidth.mobile} {
    width: 100%;
    height: 100vh;

  } ;

  @media ${mediaQuery.maxWidth.tablet} {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 30vh;
    overflow-y: scroll;
  } ;
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
  overflow-y: scroll;
  height: 100%;
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
  summaryArray = [],
  closeDictionary = () => {},
  handleSidebar = () => {},
  handleCloseSummary = () => {},
  handleLocateSummary = () => {},
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
        <Icon handleClick={handleSidebar} faIconName={faClose} />
      </CloseIcon>
      <Section>
        <Category>
          <Header dir="row">
            <Icon faIconName={faMagnifyingGlass} />
            <p>Words</p>
          </Header>
          {keywordArray.map((keyword) => (
            <WordSaved
              key={keyword.keyword_id}
              type="dictionary"
              word={keyword.keyword_name}
              definition={keyword.keyword_definition}
              id={keyword.keyword_id}
              handleCloseDictionary={closeDictionary}
            />
          ))}
        </Category>
        <Divider />
        <Category>
          <Header dir="row">
            <Icon faIconName={faFileLines} />
            <p>Summary</p>
          </Header>
          {summaryArray.map((summary) => (
            <WordSaved
              key={summary.summary_id}
              type="summary"
              definition={summary.summary_result}
              id={summary.summary_id}
              handleCloseSummary={handleCloseSummary}
              handleLocateSummary={handleLocateSummary}
            />
          ))}
        </Category>
      </Section>
    </SideBarCont>
  );
}
