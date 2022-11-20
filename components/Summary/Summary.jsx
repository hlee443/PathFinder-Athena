import styled, { keyframes } from "styled-components";
import Icon from "../Icon/Icon";
import { BodyText, Container, Flexbox, colors } from "../../styles/globals";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Label from "../Label/Label";
import { slideDown } from "../../styles/animations";
import Header from "../Header/Header";

import SubHeader from "../SubHeader/SubHeader";

const KeywordCont = styled(Flexbox)`
  flex-wrap: wrap;
`

// TEMPORARY STUFF??
const SummarizeCont = styled(Flexbox)`
  top: 12rem;
  right: 12rem;
  margin: 3.125rem 0;
  width: 100%;
  height: 22.813;
  padding: 1.875rem;
  border-radius: 0.625rem;
  border: 0.1rem solid black;
  background-color: ${colors.backgroundYellow};
  animation: ${slideDown} .3s ease-in-out 1;
  user-select: none;
`
const TopSectionLeft = styled.div`
  display: flex;
  flex-direction: row;
`;



export default function Summary({
  summarizedContent="Summarization here",
  onClose = () => {}
}) {
  return (
  <SummarizeCont className="summarize__container">
    {/* <Container backgroundColor ={colors.backgroundYellow}> */}
      {/* <CloseButton> */}
      <TopSectionLeft>
        <Icon handleClick={onClose} faIconName={faClose} />
      </TopSectionLeft>
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
      <SubHeader text="Summary"></SubHeader>
      <br />
      <BodyText>
        {summarizedContent}
      </BodyText>
    {/* </Container> */}
  </SummarizeCont>
  )
}