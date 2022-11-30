import styled from "styled-components";
import { useEffect, useState } from "react";


const ContentSpan = styled.span`
  font-family: ${(props) => props.typeface};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineSpace}%;
  letter-spacing: ${(props) => props.letterSpace}rem;
`;

export default function Content({
    fileData = {}
}) {
    const [fileContent, setFileContent] = useState('')

    useEffect(() => {

        const fileBody = document.querySelector(".file__content")
        setFileContent(fileData.file_content)
        fileBody.innerText = fileContent

    }, [fileContent])


    return (
        <ContentSpan>
            {fileContent}
        </ContentSpan>
    );
}
