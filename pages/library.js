import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { colors, Flexbox, Wrapper, BodyText } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import File from "../components/File/File";

const FileDisplay = styled(Flexbox)`
width: 100%;
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
        </Flexbox>)
}