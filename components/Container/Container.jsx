import styled from "styled-components";

const ContainerCont = styled.div`
width: ${(props) => props.width};
height: ${(props) => props.height};
display: flex;
padding: 1em;
border: 0.125rem solid black;
background-color: "white";
border-radius: 2rem;
`

export default function Container({ width = "100%", height = "100%" }) {
    return <ContainerCont width={width} height={height}></ContainerCont>
}