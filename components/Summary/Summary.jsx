import styled from "styled-components";
import { BodyText, Container, Flexbox, colors } from "../../styles/globals";
import Label from "../Label/Label";
import Header from "../Header/Header";

const KeywordCont = styled(Flexbox)`
flex-wrap: wrap;
`

export default function Summar() {

  return <Container bgColor ={colors.backgroundYellow}>
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
      Summarized content goes here:
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
    </BodyText>
  </Container>
}