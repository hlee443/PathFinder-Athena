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
    console.log(settingData)
    updateTypeArray()
    console.log(typeArray)
  };

  function handleTypeface(e) {
    setSettingData({
      ...settingData,
      typeface: e.target.value
    })
    updateTypeArray()
  };

  function handleFontSize(e) {
    setSettingData({
      ...settingData,
      font_size: e.target.value
    })
    updateTypeArray()
  };

  function handleLineSpace(e) {
    setSettingData({
      ...settingData,
      line_space: e.target.value
    })
    updateTypeArray()
  };

  function handleLetterSpace(e) {
    setSettingData({
      ...settingData,
      letter_space: e.target.value
    })
    updateTypeArray()
  };

  async function handleSaveSetting() {
    let uploadSettingData = {
      settingData: {
        settingId: settingData.setting_id,
        backgroundColour: settingData.background_colour,
        typeface: settingData.typeface,
        fontSize: settingData.font_size,
        lineSpace: settingData.line_space,
        letterSpace: settingData.letter_space
      }
    }
    console.log(uploadSettingData)
    setSettingData(await mainHandler.handleUpdateSetting(uploadSettingData))
  }

  async function handleNewFolder(newFolderName) {
    let uploadFolderData = {
      folderData: {
        userId: "9",
        folderName: newFolderName
      }
    }
    await mainHandler.handleAddFolder(uploadFolderData)
    setFolderArray(await mainHandler.handleGetFoldersByUserId("9"))
    updateLibraryArray()
  }

  function updateTypeArray() {
    setTypeArray([
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ])
  }

  function updateLibraryArray() {
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryArray(arr => [...arr, {
        folder_name: folderArray[i].folder_name, handleClick: async () => {
          let uploadFileData = {
            fileData: {
              fileId: fileData.file_id,
              fileName: fileData.file_name,
              folderId: folderArray[i].folder_id
            }
          }
          setFileData(await mainHandler.handleUpdateFile(uploadFileData))
        }
      }])
    }
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

    updateTypeArray()
    updateLibraryArray()

  }, []);

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Title dir="row">
          <Header text={fileData.file_name}></Header>
          <Icon faIconName={faPencil}></Icon>
        </Title>
        <ToolBar typeArray={typeArray} libraryArray={libraryArray} handleNewFolder={handleNewFolder} handleSaveSetting={handleSaveSetting}></ToolBar>
        <Container width="100%" height="100%" backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData}>
          </Content>
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
