import styled from "styled-components"
import { BodyText, Container } from "../../styles/globals"
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import Header from "../Header/Header"

export function Loading() {
  return <Container>
    <Header text="Waiting for a web page to load..."></Header>
    <Segment>
      <Dimmer active>
      <Loader active content='Loading' />
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    <BodyText>Do not close your browser. Wait until it’s processed!</BodyText>
  </Container>
}