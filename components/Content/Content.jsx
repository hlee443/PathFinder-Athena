import styled from "styled-components";
import { useEffect } from "react";


const ContentSpan = styled.span`
  font-family: ${(props) => props.typeface};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineSpace}%;
  letter-spacing: ${(props) => props.letterSpace}rem;
`;

export default function Content({
    fileData = {},
    settingData = {}
}) {

    useEffect(() => {
        
        const fileBody = document.querySelector(".file__body")
        fileBody.innerText = fileData.file_content

    }, [])


    return (
        <ContentSpan
            className="file__body"
            fontSize={settingData.font_size}
            typeface={settingData.typeface}
            lineSpace={settingData.line_space}
            letterSpace={settingData.letter_space}
        >
        </ContentSpan>
    );
}
