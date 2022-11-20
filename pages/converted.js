import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import { Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Content from "../components/Content/Content";
import styled from "styled-components";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import MiniDropdown from "../components/MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../components/MiniDropdown/data"
import * as mainHandler from "../handlers/main"


const Title = styled(Flexbox)`
  align-self: flex-start;
  user-select: none;
  justify-content: space-between;
  width: 100%;
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
  const [dropdown, showDropdown] = useState(false);


  function handleBGColor(e) {
    e.preventDefault();

    const newSettingData = (settingData) => {
      return {
        ...settingData,
        background_colour: e.target.value
      }
    }

    setSettingData(newSettingData)
  };

  function handleTypeface(e) {
    e.preventDefault();

    const newSettingData = (settingData) => {
      return {
        ...settingData,
        typeface: e.target.value
      }
    }

    setSettingData(newSettingData)
  };

  function handleFontSize(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        font_size: e.target.value
      }
    }

    setSettingData(newSettingData)
  };

  function handleLineSpace(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        line_space: e.target.value
      }
    }

    setSettingData(newSettingData)
  };

  function handleLetterSpace(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        letter_space: e.target.value
      }
    }

    setSettingData(newSettingData)
  };

  function handleMiniDropdown() {
    dropdown === false ? showDropdown(true) : showDropdown(false)
  };

  function handleSaveSetting() {

    const uploadSettingData = (settingData) => {
      mainHandler.handleUpdateSetting({
        settingData: {
          settingId: settingData.setting_id,
          backgroundColour: settingData.background_colour,
          typeface: settingData.typeface,
          fontSize: settingData.font_size,
          lineSpace: settingData.line_space,
          letterSpace: settingData.letter_space
        }
      })
      return settingData
    }
    setSettingData(uploadSettingData)
    //console.log(uploadSettingData)
  };

  function updateTypeArray(settingData) {

    setTypeArray([
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ])
  };


  function handleNewFolder(newFolderName) {
    e.preventDefault();
    const newFolderArray = (folderArray) => {
      
    }
    setFolderArray(newFolderArray)
    let uploadFolderData = {
      folderData: {
        userId: "9",
        folderName: newFolderName
      }
    }
    const uploadFolder = (folderArray) => {
      mainHandler.handleAddFolder(uploadFolderData)
      return folderArray
    }
    updateLibraryArray(uploadFolder)
  };

  function updateLibraryArray(folderArray) {
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
          const uploadFile = () => {
            return mainHandler.handleUpdateFile(uploadFileData)
          }
          setFileData(uploadFile)
        }
      }])
    }
  };


  useEffect(() => {
    if (!router.query.fileData) {
      return
    } else if (!router.query.settingData) {
      return
    } else if (!router.query.folderArray) {
      return
    }
    setFileData(JSON.parse(router.query.fileData))
    const folderArray = JSON.parse(router.query.folderArray)
    setFolderArray(folderArray)
    const settingData = JSON.parse(router.query.settingData)
    setSettingData(settingData)
  }, []);

  useEffect(() => {
    updateTypeArray(settingData)
  }, [settingData]);

  useEffect(() => {
    updateLibraryArray(folderArray)
  }, [folderArray]);


  console.log('on page', settingData)

  return (
    <Flexbox>
      <NavBar />
      <ToolBar typeArray={typeArray} libraryArray={libraryArray} handleNewFolder={handleNewFolder} handleSaveSetting={handleSaveSetting}></ToolBar>
      <Wrapper>
        <Title dir="row">
          <Header text={fileData.file_name} />
          <Icon
            faIconName={faEllipsis}
            handleClick={handleMiniDropdown}
          />
          {
            dropdown && <MiniDropdown arr={editFileDataArr} />
          }
        </Title>
        <Container width="100%" backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData}>
          </Content>
        </Container>
      </Wrapper>
    </Flexbox>
  );
};
