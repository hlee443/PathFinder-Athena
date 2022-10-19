import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { Flexbox, Wrapper } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar"
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const URLbox = styled(Flexbox)`

`

export default function Sandbox() {
  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
        <TabBar></TabBar>
        <URLbox dir="row">
          <Input></Input>
          <Button />
        </URLbox>
        <Button />
      </Wrapper>
    </Flexbox>
  )
}
