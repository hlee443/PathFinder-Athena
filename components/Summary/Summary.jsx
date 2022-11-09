import styled from "styled-components";
import Icon from "../Icon/Icon";
import { BodyText, Container, Flexbox, colors } from "../../styles/globals";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Label from "../Label/Label";
import Header from "../Header/Header";

const KeywordCont = styled(Flexbox)`
  flex-wrap: wrap;
`

// TEMPORARY STUFF??
const SummarizeCont = styled(Flexbox)`
  top: 12rem;
  right: 12rem;
  position: absolute;
`

const CloseButton = styled.div`
  display: flex;
  align-self: end;
`;

export default function Summary({
  summarizedContent="Summarization here",
  onClose = () => {}
}) {
  return <SummarizeCont>
    <Container backgroundColor ={colors.backgroundYellow}>
      <CloseButton>
        <Icon handleClick={onClose} faIconName={faClose} />
      </CloseButton>
      <Header text="Keyword"></Header>
      {/* {
        keywords.map((o, i) => {
          <Label text={o.text}></Label>
        })
      } */}
      <KeywordCont dir="row">
        <Label text="keyword"></Label>
      </KeywordCont>
      <Header text="Summary"></Header>
      <BodyText>
        {summarizedContent}
      </BodyText>
    </Container>
  </SummarizeCont>
}