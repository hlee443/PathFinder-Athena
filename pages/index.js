import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Button from "../components/Button/Button";
import {
  faChevronDown,
  faUpload,
  faPaintRoller,
  faFont,
  faTextHeight,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon/Icon";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../components/Input/Input";
import * as mainHandler from "../handlers/main";
import { useRef } from "react";

import Option from "../components/Option/Option";
import { btnData } from "../components/Button/data";

const CustomizeInputBox = styled(Flexbox)`
  background: ${colors.Background_White};
  border: 2px solid ${colors.DarkGrey};
  border-radius: 50px;
  width: 100%;
  justify-content: start;
`;

const ClearButton = styled(Flexbox)`
align-self: end;
`
const Upload = styled(Flexbox)`
align-self: center;
`

export default function Home() {
  const router = useRouter();
  const [inputType, setInputType] = useState("url");
  const [active, setActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({
    fileObj: {},
    fileName: "",
    fileType: "",
    fileContent: "",
  });
  const [displayFileNameForm, setFileNameForm] = useState(false);
  const fileInput = useRef(null);


  function handleChange(e) {
    e.preventDefault();

    setUploadedFile({
      ...uploadedFile,
      [e.target.name]: e.target.value,
    });
  }

  function onFileSelect(e) {
    const selectedFile = e.target.files[0];

    uploadedFile.fileName = selectedFile.name.split(".")[0];
    uploadedFile.fileType = selectedFile.name.slice(
      (Math.max(0, selectedFile.name.lastIndexOf(".")) || Infinity) + 1
    );
    uploadedFile.fileObj = selectedFile;

    setFileNameForm(true);
  }

  function onFileUpload(e) {
    e.preventDefault();

    mainHandler.handleUpload(uploadedFile, (readFileContent) => {
      uploadedFile.fileContent = readFileContent;

      router.push(
        {
          pathname: "/converted",
          query: {
            fileContent: readFileContent,
            fileName: uploadedFile.fileName,
          },
        },
        "/converted"
      );
    });
  }

  function resetPageStates() {
    setActive(false);
    setFileNameForm(false);
    uploadedFile.fileName = "";
    uploadedFile.fileContent = "";
    uploadedFile.fileType = "";
    uploadedFile.fileObj = {};
    inputType === "url" ? setInputType("upload") : setInputType("url");
  }

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
        <TabBar changePage={resetPageStates}></TabBar>
        {inputType === "url" && (
          <CustomizeInputBox dir="row">
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
          </CustomizeInputBox>
        )}

        {displayFileNameForm && inputType === "upload" && (
          <>
            <CustomizeInputBox dir="row">
              <Input
                border="none"
                borderRadius="3.125rem 0 0 3.125rem;"
                width="100%"
                placeholder="Enter file name"
                type="text"
                name="fileName"
                value={uploadedFile.fileName}
                onChange={handleChange}
              ></Input>
              <Button
                handleClick={setActive}
                backgroundColor={colors.buttonPrimaryBlue}
                borderRadius="0 3.125rem 3.125rem 0;"
                text="Customize"
                type="IconButton"
                ButtonFaIconName={faChevronDown}
              />
            </CustomizeInputBox>
          </>
        )}
        {active && (
          <Container width="100%">
            <Option
              faIconName={faPaintRoller}
              text="Background Colour"
              inputType="color"
              type="color"
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
              unit="%"
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
              <Button
                text="Clear"
                backgroundColor={colors.buttonPrimaryBlue}
                width={btnData.size.small.width}
                height={btnData.size.small.height}
              ></Button>
            </ClearButton>
          </Container>
        )}
        {displayFileNameForm === false && inputType === "upload" && (
          <Container width="100%" alignItems="center">
            <Icon faIconName={faUpload}></Icon>
            <SubHeader text="Drag and drop a file here"></SubHeader>
            <p>or</p>
            <Button
              handleClick={() => fileInput.current.click()}
              text="Choose a file">
            </Button>
            <input
              id="fileInput"
              type="file"
              name="file"
              onChange={(e) => onFileSelect(e)}
              accept=".txt"
              ref={fileInput}
              style={{ display: 'none' }}
            />
          </Container>
        )}
        {displayFileNameForm && inputType === "upload" && (
          <Button
            backgroundColor={colors.buttonPrimaryBlue}
            text="Upload"
            type="default"
            handleClick={(e) => onFileUpload(e)}
          />
        )}
        {inputType === "url" && (
          <Button
            backgroundColor={colors.buttonPrimaryBlue}
            text="Upload"
            type="default"
          />
        )}
      </Wrapper>
    </Flexbox>
  );
}
