import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { icon_svgs } from "../components/Icon/data";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const URLbox = styled(Flexbox)`
  background: ${colors.Background_White};
  border: 2px solid ${colors.DarkGrey};
  border-radius: 50px;
  width: 100%;
`;

export default function Sandbox() {
  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
        <TabBar></TabBar>
        <URLbox dir="row">
          <Input
            border="none"
            borderRadius="3.125rem 0 0 3.125rem;"
            width="100%"
            placeholder="Paste your URL here.."
          ></Input>
          <Button
            borderRadius="0 3.125rem 3.125rem 0;"
            text="Customize"
            icon_name="chevronDown"
            type="IconButton"
            ButtonFaIconName={faChevronDown}
          />
        </URLbox>
      </Wrapper>
      <Button text="upload" type="default" />
    </Flexbox>
  );
}
