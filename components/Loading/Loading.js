import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../public/lotties/loading.json";
import { BodyText, Container } from "../../styles/globals";
import styled from "styled-components";

const Heading = styled.div`
font-size: 1.5rem
`

export default function Loading() {

  return <Container>
    <Heading>&quot;Waiting for a web page to load...&quot;</Heading>
    <Lottie style={{ width: 200 }} animationData={LoadingAnimation} loop={true} />
    <BodyText>&quot;Do not close your browser. Wait until it&apos;s processed!&quot;</BodyText>
  </Container>
};