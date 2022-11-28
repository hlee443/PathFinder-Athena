import styled, { keyframes } from "styled-components";
import Icon from "../Icon/Icon";
import { BodyText, Container, Flexbox, colors } from "../../styles/globals";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SubHeader from "../SubHeader/SubHeader";

const KeywordCont = styled(Flexbox)`
  flex-wrap: wrap;
`

const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

// TEMPORARY STUFF??
const SummarizeCont = styled(Flexbox)`
  // top: 12rem;
  // right: 12rem;
  margin: 3.125rem 0;
  width: 100%;
  height: 100%;
  min-width: 100%;
  padding: 1.875rem;
  border-radius: 0.625rem;
  border: 0.1rem solid ${colors.darkGrey};
  background-color: ${colors.backgroundYellow};
  animation: ${slideDown} .3s ease-in-out 1;
  user-select: none;
  gap: 1rem;
`

const TopSection = styled(Flexbox)`
  width: 100%;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: flex-start;
`

export default function Summary({
  summarizedContent = "Summarization here",
  onClose = () => { }
}) {
  return (
    <SummarizeCont className="summarize__container">
      <TopSection dir="row">
        <SubHeader text="Summary"></SubHeader>
        <Icon handleClick={onClose} faIconName={faClose} />
      </TopSection>
      {/* <>
      <SubHeader text="Keyword"></SubHeader> */}
      {/* {
        keywords.map((o, i) => {
          <Label text={o.text}></Label>
        })
      } */}
      {/* <KeywordCont dir="row">
        <Label text="keyword"></Label>
      </KeywordCont>
      </> */}
      <BodyText>
        {summarizedContent}
      </BodyText>
    </SummarizeCont>
  )
}