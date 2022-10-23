import Icon from "../Icon/Icon";
import styled from "styled-components";
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faVolumeHigh, faMagnifyingGlass, faFileLines, faHighlighter, faFont, faBookmark, faDownload, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const StyledPopUp = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "#C3D1FF"};
  border-radius: ${(props) => props.borderRadius || "2.125rem"};
  width: ${(props) => props.width || "15rem"};
  height: ${(props) => props.height || "8.875rem"};
  font-size: ${(props) => props.fontSize};
  margin-bottom: 2rem;
  
`

const FeatureName = styled.div`
    font-weight: bold;
    text-align:center;
`

const FeatureDescription = styled.div`
    display:flex;
    text-align:center;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
`

export default function FeatureExplain ({

    backgroundColor = "#C3D1FF",
    featureName="feature name",
    featureDescription="feature description",
    icon = faLink 

}) {
    return <StyledPopUp
    backgroundColor={backgroundColor}
    height="8.875rem"
    width="15rem"
    borderRadius="2.125rem"
    >
        <Icon faIconName={icon}></Icon>
        <FeatureName>
            {featureName}
        </FeatureName>
        <FeatureDescription>
            {featureDescription}
        </FeatureDescription>
    </StyledPopUp>
}