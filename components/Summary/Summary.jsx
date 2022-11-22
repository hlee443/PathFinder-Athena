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
  top: 12rem;
  right: 12rem;
  margin: 3.125rem 0;
  width: 100%;
  height: 100%;
  padding: 1.875rem;
  border-radius: 0.625rem;
  border: 0.1rem solid black;
  background-color: ${colors.backgroundYellow};
  animation: ${slideDown} .3s ease-in-out 1;
  user-select: none;
`

const TopSectionRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: flex-start;
`



export default function Summary({
  summarizedContent="Summarization here",
  onClose = () => {}
}) {
  return (
  <SummarizeCont className="summarize__container">
    {/* <Container backgroundColor ={colors.backgroundYellow}> */}
      {/* <CloseButton> */}
      <TopSectionRight>
        <Icon handleClick={onClose} faIconName={faClose} />
      </TopSectionRight>
      {/* </CloseButton> */}
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
      <LeftContainer>
      <SubHeader text="Summary"></SubHeader>
      <br />
      <BodyText>
        {summarizedContent}
      </BodyText>
      </LeftContainer>
      
    {/* </Container> */}
  </SummarizeCont>
  )
}