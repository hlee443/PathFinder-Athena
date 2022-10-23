import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { colors, Flexbox, Wrapper, BodyText } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import File from "../components/File/File";
import FeatureExplain from "../components/FeatureExplain/FeatureExplain";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { faVolumeHigh, faMagnifyingGlass, faFileLines, faHighlighter, faFont, faBookmark, faDownload, faChevronDown, faSquarePlus } from "@fortawesome/free-solid-svg-icons"

const FileDisplay = styled(Flexbox)`
width: 100%;
`

const FeatureExplainText = styled(Flexbox)`
padding: 6rem;
`

const FeatureExplainCont = styled(Flexbox)`
flex-direction:row;
justify-content: space-between;
padding: 6rem;
flex-wrap: wrap;
align-self: flex-start;
margin-top: -5rem;
`

export default function library() {
    return (
        <Flexbox>
            <NavBar></NavBar>
            <Wrapper>
                <TabBar></TabBar>
                <FileDisplay dir="row">
                    <File></File>
                    <BodyText>Your library is currently empty, add a document to get started.</BodyText>
                </FileDisplay>
            </Wrapper>
            
            <FeatureExplainText>
                <Header text="Customize your documents to your needs"/>
                <SubHeader text="Pathfinder gives you the tools to have a better experiance accessing documents. Use the tools in the toolbar to customize and access documents"/>
            </FeatureExplainText>
            <FeatureExplainCont>
                <FeatureExplain 
                    featureName="Save" 
                    icon={faBookmark} 
                    featureDescription="Save the document to the library"
                />
                <FeatureExplain 
                    featureName="Summarize" 
                    icon={faFileLines}
                    featureDescription="Summarizes lengthy and complicated texts"
                />
                <FeatureExplain 
                    featureName="Highlight" 
                    icon={faHighlighter}
                    featureDescription="Highlight texts"    
                />
                <FeatureExplain 
                    featureName="Download" 
                    icon={faDownload}
                    featureDescription="Download the document"    
                />
                <FeatureExplain 
                    featureName="Text-to-speech" 
                    icon={faVolumeHigh}
                    featureDescription="Turn text into natural speech"
                />
                <FeatureExplain 
                    featureName="Text Settings" 
                    icon={faFont}
                    featureDescription="Adjust the settings of the text in the document"
                />
                <FeatureExplain 
                    featureName="Dictionary" 
                    icon={faMagnifyingGlass}
                    featureDescription="Look up the meaning of English words"    
                />
                <FeatureExplain 
                    featureName="More to come..."
                    icon={faSquarePlus} 
                    featureDescription=""
                />
            </FeatureExplainCont>
        </Flexbox>)
}