import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import { Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";
import styled from "styled-components";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MiniDropdown from "../components/MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../components/MiniDropdown/data";
import * as mainHandler from "../handlers/main";

const Title = styled(Flexbox)`
  align-self: flex-start;
  user-select: none;
  justify-content: space-between;
  width: 100%;
`;
const DocCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export default function Converted() {
  const [dictionary, setDictionary] = useState(null);
  // props: file settings, -- probably -- file info, and url
  const router = useRouter();
  // MVP - get response of the handler.
  // Future - get response for Hermes (probably)
  // Props: get file settings and file info

  const [fileData, setFileData] = useState({});
  const [settingData, setSettingData] = useState({});
  const [libraryArray, setLibraryArray] = useState([]);
  const [typeArray, setTypeArray] = useState([]);
  const [folderArray, setFolderArray] = useState([]);
  const [dropdown, showDropdown] = useState(false);

  function handleBGColor(e) {
    setSettingData({
      ...settingData,
      background_colour: e.target.value,
    });
    console.log(settingData);
    updateTypeArray();
    console.log(typeArray);
  }

  function handleTypeface(e) {
    setSettingData({
      ...settingData,
      typeface: e.target.value,
    });
    updateTypeArray();
  }

  function handleFontSize(e) {
    setSettingData({
      ...settingData,
      font_size: e.target.value,
    });
    updateTypeArray();
  }

  function handleLineSpace(e) {
    setSettingData({
      ...settingData,
      line_space: e.target.value,
    });
    updateTypeArray();
  }

  function handleLetterSpace(e) {
    setSettingData({
      ...settingData,
      letter_space: e.target.value,
    });
    updateTypeArray();
  }

  function handleMiniDropdown() {
    dropdown === false ? showDropdown(true) : showDropdown(false);
  }

  async function handleSaveSetting() {
    let uploadSettingData = {
      settingData: {
        settingId: settingData.setting_id,
        backgroundColour: settingData.background_colour,
        typeface: settingData.typeface,
        fontSize: settingData.font_size,
        lineSpace: settingData.line_space,
        letterSpace: settingData.letter_space,
      },
    };
    console.log(uploadSettingData);
    setSettingData(await mainHandler.handleUpdateSetting(uploadSettingData));
  }

  async function handleNewFolder(newFolderName) {
    let uploadFolderData = {
      folderData: {
        userId: "9",
        folderName: newFolderName,
      },
    };
    await mainHandler.handleAddFolder(uploadFolderData);
    setFolderArray(await mainHandler.handleGetFoldersByUserId("9"));
    updateLibraryArray();
  }

  function updateTypeArray() {
    setTypeArray([
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ]);
  }

  function updateLibraryArray() {
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryArray((arr) => [
        ...arr,
        {
          folder_name: folderArray[i].folder_name,
          handleClick: async () => {
            let uploadFileData = {
              fileData: {
                fileId: fileData.file_id,
                fileName: fileData.file_name,
                folderId: folderArray[i].folder_id,
              },
            };
            setFileData(await mainHandler.handleUpdateFile(uploadFileData));
          },
        },
      ]);
    }
  }

  useEffect(() => {
    if (!router.query.fileData) {
      return;
    } else if (!router.query.settingData) {
      return;
    } else if (!router.query.folderArray) {
      return;
    }
    setFileData(JSON.parse(router.query.fileData));
    setFolderArray(JSON.parse(router.query.folderArray));
    setSettingData(JSON.parse(router.query.settingData));

    updateTypeArray();
    updateLibraryArray();
  }, []);

  return (
    <Flexbox>
      <NavBar />
      <ToolBar
        typeArray={typeArray}
        libraryArray={libraryArray}
        handleNewFolder={handleNewFolder}
        handleSaveSetting={handleSaveSetting}
      ></ToolBar>
      <DocCont>
        <Wrapper>
          <Title dir="row">
            <Header text={fileData.file_name} />
            <Icon faIconName={faEllipsis} handleClick={handleMiniDropdown} />
            {dropdown && <MiniDropdown arr={editFileDataArr} />}
          </Title>
          <Container
            width="100%"
            backgroundColor={settingData.background_colour}
          >
            <Content fileData={fileData} settingData={settingData}></Content>
          </Container>
        </Wrapper>
        <SideBar></SideBar>
      </DocCont>
    </Flexbox>
  );
}
