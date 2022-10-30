import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Button from "../components/Button/Button";
import {
  faLink,
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
`;

export const tabBarBtns = [
  {
    text: "Import a URL",
    icon: faLink,
  },
  {
    text: "Upload a file",
    icon: faUpload,
  },
];

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
  const [uploadSetting, setUploadSetting] = useState({
    backgroundColour: "#FFFFFC",
    typeface: "Open Sans",
    fontSize: 16,
    lineSpace: 150,
    letterSpace: 0.35
  });
  const [displayFileNameForm, setFileNameForm] = useState(false);
  const fileInput = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    setUploadedFile({
      ...uploadedFile,
      fileName: e.target.value,
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

    let uploadData = {
      uploadedFile,
      uploadSetting
    }

    mainHandler.handleUpload(uploadData, (res) => {
      let { fileData, settingData } = res.data
      router.push(
        {
          pathname: `/converted`,
          query: {
            fileData: JSON.stringify(fileData),
            settingData: JSON.stringify(settingData)
          },
        },
        "/converted"
      );
    });
  }

  function handleBGColor(e) {
    setUploadSetting({
      ...uploadSetting,
      backgroundColour: e.target.value
    })
  };

  function handleTypeface(e) {
    setUploadSetting({
      ...uploadSetting,
      typeface: e.target.value
    })
  };

  function handleFontSize(e) {
    setUploadSetting({
      ...uploadSetting,
      fontSize: e.target.value
    })
  };

  function handleLineSpace(e) {
    setUploadSetting({
      ...uploadSetting,
      lineSpace: e.target.value
    })
  };

  function handleLetterSpace(e) {
    setUploadSetting({
      ...uploadSetting,
      letterSpace: e.target.value
    })
  };

  function handleClear() {

    setUploadSetting({
      ...uploadSetting,
      backgroundColour: "#FFFFFC",
      typeface: "Open Sans",
      fontSize: 16,
      lineSpace: 9,
      letterSpace: 150
    })
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
        <SubHeader text="Let us make your websites and documents easier to understand."></SubHeader>
        <TabBar btnArr={tabBarBtns} changePage={resetPageStates}></TabBar>
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
              onChange={handleBGColor}
              value={uploadSetting.backgroundColour}
            ></Option>
            <Option
              faIconName={faFont}
              text="Typeface"
              inputType="dropdown"
              placeholder="Choose your typeface"
              type="option"
              width="100%"
              onChange={handleTypeface}
              value={uploadSetting.typeface}
            ></Option>
            <Option
              faIconName={faFont}
              text="Font Size"
              inputType="text"
              unit="pt"
              placeholder="##"
              onChange={handleFontSize}
              value={uploadSetting.fontSize}
            ></Option>
            <Option
              faIconName={faTextHeight}
              text="Line Spacing"
              inputType="text"
              placeholder="##"
              unit="%"
              onChange={handleLineSpace}
              value={uploadSetting.lineSpace}
            ></Option>
            <Option
              faIconName={faFont}
              text="Letter Spacing"
              inputType="text"
              unit="%"
              placeholder="##"
              onChange={handleLetterSpace}
              value={uploadSetting.letterSpace}
            ></Option>
            <ClearButton>
              <Button
                text="Clear"
                backgroundColor={colors.buttonPrimaryBlue}
                width={btnData.size.small.width}
                height={btnData.size.small.height}
                handleClick={handleClear}
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
              text="Choose a file"
            ></Button>
            <input
              id="fileInput"
              type="file"
              name="file"
              onChange={(e) => onFileSelect(e)}
              accept=".txt"
              ref={fileInput}
              style={{ display: "none" }}
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
