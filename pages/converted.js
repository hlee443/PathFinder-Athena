import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Content from "../components/Content/Content";
import styled from "styled-components";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ToolBarDropdown from "../components/ToolBarDropdown/ToolBarDropdown";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import * as mainHandler from "../handlers/main"

const Title = styled(Flexbox)`
  align-self: flex-start;
`;

export default function Converted() {
  const [dictionary, setDictionary] = useState(null)
  // props: file settings, -- probably -- file info, and url
  const router = useRouter();
  // MVP - get response of the handler.
  // Future - get response for Hermes (probably)
  // Props: get file settings and file info


  const [fileData, setFileData] = useState({})
  const [settingData, setSettingData] = useState({})
  const [libraryArray, setLibraryArray] = useState([])
  const [typeArray, setTypeArray] = useState([])
  const [folderArray, setFolderArray] = useState([])


  function handleBGColor(e) {
    setSettingData({
      ...settingData,
      background_colour: e.target.value
    })
  };

  function handleTypeface(e) {
    setSettingData({
      ...settingData,
      typeface: e.target.value
    })
  };

  function handleFontSize(e) {
    setSettingData({
      ...settingData,
      font_size: e.target.value
    })
  };

  function handleLineSpace(e) {
    setSettingData({
      ...settingData,
      line_space: e.target.value
    })
  };

  function handleLetterSpace(e) {
    setSettingData({
      ...settingData,
      letter_space: e.target.value
    })
  };

  function handleSaveSetting() {
    let uploadSettingData = {
      settingId: settingData.setting_id,
      backgroundColour: settingData.background_colour,
      typeface: settingData.typeface,
      fontSize: settingData.font_size,
      lineSpace: settingData.line_sace,
      letterSpace: settingData.letter_space
    }
    setSettingData(mainHandler.handleUpdateSetting(uploadSettingData))
  }

  function handleNewFolder(newFolderName) {
    let uploadFolderData = {
      userId: "9",
      folderName: newFolderName
    }
    mainHandler.handleAddFolder(uploadFolderData)
    setFolderArray(mainHandler.handleGetFoldersByUserId("9"))
  }

  useEffect(() => {
    if (!router.query.fileData) {
      return
    } else if (!router.query.settingData) {
      return
    } else if (!router.query.folderArray) {
      return
    }
    setFileData(JSON.parse(router.query.fileData))
    setFolderArray(JSON.parse(router.query.folderArray))
    setSettingData(JSON.parse(router.query.settingData))

    setTypeArray([
      { value: "Header", handleChange: () => { } },
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ])

    setLibraryArray([
      { folder_name: "Header", folder_id: "", handleClick: () => { } }
    ])
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryArray(arr => [...arr,
      {
        folder_name: folderArray[i].folder_name, handleClick: () => {
          let uploadFileData = {
            fileId: fileData.file_id,
            fileName: fileData.file_name,
            folderId: folderArray[i].folder_id
          }
          setFileData(mainHandler.handleUpdateFile(uploadFileData))
        }
      }
      ])
    }

  }, []);

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Title dir="row">
          <Header text={fileData.file_name}></Header>
          <Icon faIconName={faPencil}></Icon>
        </Title>
        <ToolBar onChange={handleChange} typeArray={typeArray} libraryArray={libraryArray} handleNewFolder={handleNewFolder} handleSaveSetting={handleSaveSetting}></ToolBar>
        <Container width="100%" height="100%" backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData}>
          </Content>
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
