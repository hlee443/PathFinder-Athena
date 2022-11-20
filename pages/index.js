import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import {
  colors,
  Flexbox,
  Wrapper,
  Container,
  BodyText,
} from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Button from "../components/Button/Button";
import {
  faLink,
  faChevronDown,
  faUpload,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon/Icon";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../components/Input/Input";
import * as mainHandler from "../handlers/main";
import { useRef } from "react";
import { iconSvgs } from "../components/Icon/data";
import Option from "../components/Option/Option";
import { btnData } from "../components/Button/data";

const CustomizeInputBox = styled(Flexbox)`
  background: ${colors.backgroundWhite};
  border: 2px solid ${colors.darkGray};
  border-radius: 50px;
  width: 100%;
  justify-content: start;
  height: fit-content;
`;

const BtnCont = styled(Flexbox)`
  align-self: ${(props) => props.align};
`;

export const tabBarBtns = [
  {
    text: "Upload a file",
    icon: faUpload,
  },
  {
    text: "Import a URL",
    icon: faLink,
  },
];

export default function Home() {
  const router = useRouter();
  const [inputType, setInputType] = useState("upload");
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
    fontSize: "16",
    lineSpace: "150",
    letterSpace: "0.35",
  });
  const [displayFileNameForm, setFileNameForm] = useState(false);
  const fileInput = useRef(null);
  const [isActiveDrag, setIsActiveDrag] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setUploadedFile({
      ...uploadedFile,
      fileName: e.target.value,
    });
  }

  function onFileSelect(selectedFile) {
    // const selectedFile = e.target.files[0] === undefined? e.target.files[0] : e.dataTransfer.items[0];

    console.log("SELECTED FILE", selectedFile);

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
      uploadSetting,
    };

    mainHandler.handleUpload(uploadData, (res) => {
      let { fileData, settingData, folderArray } = res.data
      router.push(
        {
          pathname: `/converted`,
          query: {
            fileData: JSON.stringify(fileData),
            settingData: JSON.stringify(settingData),
            folderArray: JSON.stringify(folderArray)
          },
        },
        "/converted"
      );
    });
  }

  function handleBGColor(e) {
    setUploadSetting({
      ...uploadSetting,
      backgroundColour: e.target.value,
    });
  }

  function handleTypeface(e) {
    setUploadSetting({
      ...uploadSetting,
      typeface: e.target.value,
    });
  }

  function handleFontSize(e) {
    setUploadSetting({
      ...uploadSetting,
      fontSize: e.target.value,
    });
  }

  function handleLineSpace(e) {
    setUploadSetting({
      ...uploadSetting,
      lineSpace: e.target.value,
    });
  }

  function handleLetterSpace(e) {
    setUploadSetting({
      ...uploadSetting,
      letterSpace: e.target.value,
    });
  }

  function handleClear() {
    setUploadSetting({
      ...uploadSetting,
      backgroundColour: "#FFFFFC",
      typeface: "Open Sans",
      fontSize: 16,
      lineSpace: 150,
      letterSpace: 0.35
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
      <NavBar />
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Let us make your documents easier to understand."></SubHeader>
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
              iconSize="1x"
              faIconName={active ? faChevronUp : faChevronDown}
            />
          </CustomizeInputBox>
        )}
        {displayFileNameForm && inputType === "upload" && (
          <>
            <CustomizeInputBox dir="row">
              <Input
                border="none"
                placeholder="Enter file name"
                type="text"
                name="fileName"
                value={uploadedFile.fileName}
                onChange={handleChange}
                width="100%"
              />
              <Button
                handleClick={setActive}
                backgroundColor={colors.buttonPrimaryBlue}
                borderRadius="0 3.125rem 3.125rem 0;"
                text="Customize"
                type="IconButton"
                faIconName={active ? faChevronUp : faChevronDown}
              />
            </CustomizeInputBox>
          </>
        )}
        {active && (
          <Container gap="1rem">
            <Option
              src={iconSvgs.backgroundColor}
              text="Background Colour"
              inputType="color"
              onChange={handleBGColor}
              value={uploadSetting.backgroundColour}
            />
            <Option
              src={iconSvgs.typeface}
              text="Typeface"
              inputType="dropdown"
              inputWidth="10rem"
              placeholder="Choose your typeface"
              onChange={handleTypeface}
              value={uploadSetting.typeface}
            />
            <Option
              src={iconSvgs.fontSize}
              text="Font Size"
              inputType="text"
              unit="pt"
              placeholder="Choose your font size"
              onChange={handleFontSize}
              value={uploadSetting.fontSize}
            />
            <Option
              src={iconSvgs.lineSpacing}
              text="Line Height"
              inputType="text"
              placeholder="Choose your line height"
              unit="%"
              onChange={handleLineSpace}
              value={uploadSetting.lineSpace}
            />
            <Option
              src={iconSvgs.letterSpacing}
              text="Letter Spacing"
              inputType="text"
              unit="pt"
              placeholder="Choose your letter spacing"
              onChange={handleLetterSpace}
              value={uploadSetting.letterSpace}
            />
            <BtnCont align="end">
              <Button
                text="Clear"
                width={btnData.size.small.width}
                height={btnData.size.small.height}
                handleClick={handleClear}
              />
            </BtnCont>
          </Container>
        )}
        {displayFileNameForm === false && inputType === "upload" && (
          <Container
            gap="2rem"
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.items[0].getAsFile();
              onFileSelect(file);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsActiveDrag(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsActiveDrag(false);
            }}
            width="100%"
            alignItems="center"
          >
            <Icon faIconName={faUpload} size="2x" />
            {isActiveDrag ? (
              <SubHeader text="Release to drop the file here" />
            ) : (
              <SubHeader text="Drag and drop a file here" />
            )}
            <p>or</p>
            <Button
              handleClick={() => fileInput.current.click()}
              text="Choose a file"
            />
            <input
              id="fileInput"
              type="file"
              name="file"
              onChange={(e) => {
                e.preventDefault();
                onFileSelect(e.target.files[0]);
              }}
              accept=".txt"
              ref={fileInput}
              style={{ display: "none" }}
            />
          </Container>
        )}
        <BtnCont align="center">
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
        </BtnCont>
      </Wrapper>
    </Flexbox>
  );
}
