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
        console.log("CONTENT CONVERSION", fileData.file_content)

        const isHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/

        const fileBody = document.querySelector(".file__content")
        setFileContent(fileData.file_content)
        if(isHTML.test(fileContent)){
            fileBody.innerHTML = fileContent
        } else {
            fileBody.innerText = fileContent
        }
      

    }, [fileContent])


    return (
        <ContentSpan>
            {fileContent}
        </ContentSpan>
    );
}
