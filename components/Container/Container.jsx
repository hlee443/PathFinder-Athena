import styled from "styled-components";
import { textData } from "../../styles/globals";

const ContainerCont = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  padding: 1em;
  border: 0.125rem solid black;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2rem;
  white-space: pre-line;
`;

export default function Container({
  width = "100%",
  height = "100%",
  contentText = "content",
  backgroundColor = "#ffffff",
}) {
  return (
    <ContainerCont
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      {contentText}
    </ContainerCont>
  );
}
