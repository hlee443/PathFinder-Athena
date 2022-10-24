import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Button from "../components/Button/Button";
import { faChevronDown, faUpload, faPaintRoller, faFont, faTextHeight } from "@fortawesome/free-solid-svg-icons"
import Icon from "../components/Icon/Icon";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../components/Input/Input";
import Option from "../components/Option/Option";
import { btnData } from "../components/Button/data";

const URLbox = styled(Flexbox)`
  background: ${colors.Background_White};
  border: 2px solid ${colors.DarkGrey};
  border-radius: 50px;
  width: 100%;
  justify-content: start;
`;

const ClearButton = styled(Flexbox)`
align-self: end`

export default function Home() {

  const r = useRouter();
  const [inputType, setInputType] = useState("url");
  const [active, setActive] = useState(false);

  // const changeInputType = (newInputType) => {
  //   if (newInputType === "url") {
  //     setInputType("url");
  //   }
  //   else if (newInputType === "upload") {
  //     setInputType("upload");
  //   }
  // }

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
        <TabBar changePage={() => inputType === "url" ? setInputType("upload") : setInputType("url")}></TabBar>
        {
          inputType === "url" && <URLbox dir="row">
            <Input
              border="none"
              borderRadius="3.125rem 0 0 3.125rem;"
              width="100%"
              placeholder="Paste your URL here.."
            ></Input>
            <Button
              handleClick={setActive}
              backgroundColor={colors.buttonPrimaryBlue}
              borderRadius="0 3.125rem 3.125rem 0;"
              text="Customize"
              type="IconButton"
              ButtonFaIconName={faChevronDown}
            />
          </URLbox>
        }
        {
          active && <Container width="100%">
            <Option
              faIconName={faPaintRoller}
              text="Background Colour"
              inputType="color"
            ></Option>
            <Option
              faIconName={faFont}
              text="Typeface"
              inputType="dropdown"
              placeholder="Choose your typeface"
            ></Option>
            <Option
              faIconName={faFont}
              text="Font Size"
              inputType="text"
              unit="pt"
              placeholder="##"
              type="unit"
            ></Option>
            <Option
              faIconName={faTextHeight}
              text="Line Spacing"
              inputType="text"
              placeholder="##"
              type="unit"
            ></Option>
            <Option
              faIconName={faFont}
              text="Letter Spacing"
              inputType="text"
              unit="%"
              placeholder="##"
              type="unit"
            ></Option>
            <ClearButton>
              <Button text="Clear" backgroundColor={colors.buttonPrimaryBlue} width={btnData.size.small.width} height={btnData.size.small.height}></Button>
            </ClearButton>
          </Container>
        }
        {
          inputType === "upload" && <Container width="100%">
            <Icon faIconName={faUpload} ></Icon>
            <SubHeader text="Drag and drop a file here"></SubHeader>
            <p>or</p>
            <Button backgroundColor={colors.buttonPrimaryBlue} text="Choose a file"></Button>
          </Container>
        }
      </Wrapper>
      {inputType === "url" && <Button backgroundColor={colors.buttonPrimaryBlue} text="upload" type="default" />}
    </Flexbox>
  );
};
