import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../public/lotties/loading_dots.json";
import styled from "styled-components";

const Cont = styled.div`
height: 100%;
width: 100%;
position: absolute;
`

export default function Loading() {
  return <Cont>
    <Lottie style={{ width: 200 }} animationData={LoadingAnimation} loop={true} />
  </Cont>
};