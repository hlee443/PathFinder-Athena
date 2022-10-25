import Icon from "../Icon/Icon";
import styled from "styled-components";
import { faVolumeHigh, faXmark } from "@fortawesome/free-solid-svg-icons"

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:80%;
  margin-top: -4rem;
`

const TopSectionLeft = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledPopUp = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "#FFFEF6"};
  border-radius: ${(props) => props.borderRadius || "2.125rem"};
  width: ${(props) => props.width || "15rem"};
  height: ${(props) => props.height || "8.875rem"};
  font-size: ${(props) => props.fontSize};
  margin-bottom: 2rem;
  
`

const Word = styled.div`
    font-weight: bold;
    text-align:center;
`

const WordDefinition = styled.div`
    display:flex;
    width:80%;
`

export default function Dictionary ({

    backgroundColor = "#FFFEF6",
    word="word",
    wordDefinition="word definition",

}) {
    return <StyledPopUp
    backgroundColor={backgroundColor}
    height="10rem"
    width="20rem"
    borderRadius="1rem"
    >
        <TopSection>
            <TopSectionLeft>
                <Word>{word}</Word>
                <Icon faIconName={faVolumeHigh } size="0.875em"></Icon>
            </TopSectionLeft>
            <Icon faIconName={faXmark}></Icon>
        </TopSection>

        <WordDefinition>
            {wordDefinition}
        </WordDefinition>
    </StyledPopUp>
}