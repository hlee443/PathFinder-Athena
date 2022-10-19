import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { Flexbox, Wrapper } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar"


export default function Sandbox() {
    return (
        <Flexbox>
            <NavBar></NavBar>
            <Wrapper>
                <Header text="Upload your study materials!"></Header>
                <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
            </Wrapper>
            <TabBar></TabBar>
        </Flexbox>
    )
}
