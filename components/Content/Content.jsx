import styled from "styled-components";


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

    return (
        <ContentSpan
            fontSize={settingData.font_size}
            typeface={settingData.typeface}
            lineSpace={settingData.line_space}
            letterSpace={settingData.letter_space}
        >
            {fileData.file_content}
        </ContentSpan>
    );
}
