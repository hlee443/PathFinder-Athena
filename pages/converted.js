import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import { Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Content from "../components/Content/Content";
import styled from "styled-components";
import { faEllipsis, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MiniDropdown from "../components/MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../components/MiniDropdown/data"
import * as mainHandler from "../handlers/main"
import { useCallback } from "react";


const Title = styled(Flexbox)`
  align-self: flex-start;
  user-select: none;
  justify-content: space-between;
  width: 100%;
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
  // const [folderName, setFolderName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [test, setTest] = useState(0);

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
  };

  function updateTypeArray(settingData) {
    setTypeArray([
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ]);
  };

  // function handleNewFolder() {
  //   fetchFolderArray()
  // };


  function handleNewFolder(newFolderName) {
    let uploadFolderData = {
      folderData: {
        userId: "9",
        folderName: newFolderName,
      },
    };
    mainHandler.handleAddFolder(uploadFolderData, res => {
      mainHandler.handleGetFoldersByUserId("9", res => {
        let newFolderArray = res.data;
        setFolderArray(newFolderArray);
        updateLibraryArray(newFolderArray)
      });
    });
  };

  function updateLibraryArray(folderArray) {
    setLibraryArray([])
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryArray(arr => [...arr, {
        folder_name: folderArray[i].folder_name,
        handleClick: () => {
          let uploadFileData = {
            fileData: {
              fileId: fileData.file_id,
              fileName: fileData.file_name,
              fileContent: fileData.file_content,
              folderId: folderArray[i].folder_id
            }
          }
          mainHandler.handleUpdateFile(uploadFileData, res => {
            let fileData = res.data;
            console.log(fileData)
            setFileData(fileData);
          })
          
          // const uploadFile = () => {
          //   return mainHandler.handleUpdateFile(uploadFileData)
          // }
          // setFileData(uploadFile)
        }
      }])
    }
  };

  function handleEdit() {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }
  const getFilenameValue = (e) => {
    setNewFileName(e.target.value);
    console.log("new file name", newFileName);
    console.log(e.target.value);
  };

  // function t() {
  //   console.log("BEFORE SETTEST", test);
  //   setTest(1);
  //   console.log("AFTER SETTEST", test);
  // }

  function handleSaveFileName() {
    // console.log(isEditing);
    // console.log("before setisediting");
    setIsEditing(false);
    console.log("newFileName", newFileName);
    const fileObject = {
      fileData: {
        "fileId": fileData.file_id,
        "fileName": newFileName,
        "folderId": fileData.folder_id,
        "fileContent": fileData.file_content,
      },
    };
    console.log(typeof newFileName)
    mainHandler.handleUpdateFile(fileObject);
    // console.log("after handleupdatefile");
  }
  function handleDelete() {
    mainHandler.handleDeleteFile(fileData.file_id);
    setIsEditing(false);
    router.push("/");
  }
  // function handleMoveFolder() {
  //   console.log("move folder");
  // }

  useEffect(() => {
    console.log('virus')
    if (!router.query.fileData) {
      return;
    } else if (!router.query.settingData) {
      return;
    } else if (!router.query.folderArray) {
      return;
    }
    setFileData(JSON.parse(router.query.fileData))
    const folderArray = JSON.parse(router.query.folderArray)
    setFolderArray(folderArray)
    const settingData = JSON.parse(router.query.settingData)
    setSettingData(settingData)
    setNewFileName(JSON.parse(router.query.fileData).file_name);
  }, []);

  useEffect(() => {
    updateTypeArray(settingData)
  }, [settingData]);

  useEffect(() => {
    updateLibraryArray(folderArray)
  }, [folderArray]);

  // const fetchFolderArray = useCallback(async () => {
  //   let uploadFolderData = {
  //     folderData: {
  //       userId: "9",
  //       folderName: "Assigmnents4"
  //     }
  //   }
  //   let newFolderArray = await mainHandler.handleAddFolder(uploadFolderData)
  //   setFolderArray(newFolderArray)
  // })

  // useEffect(() => {
  //   let isSubsccribed = true;
  //   fetchFolderArray().catch(console.error)
  // }, [fetchFolderArray])

  // useEffect(() => {
  //   const updateFolderArray = async () => {
  //     let uploadFolderData = {
  //       folderData: {
  //         userId: "9",
  //         folderName: folderName
  //       }
  //     }
  //     let newFolderArray = await mainHandler.handleAddFolder(uploadFolderData)
  //     setFolderArray(newFolderArray)
  //   }
  //   updateFolderArray().catch(console.error)
  //   setLoadFolderUpdate(false)
  // }, [loadFolderUpdate])


  console.log('on page', folderArray)

  return (
    <Flexbox>
      <NavBar />
      <ToolBar
        typeArray={typeArray}
        libraryArray={libraryArray}
        handleNewFolder={handleNewFolder}
        handleSaveSetting={handleSaveSetting}
      ></ToolBar>
      <Wrapper>
        {!isEditing && (
          <Title dir="row">
            <Header text={newFileName} />
            <Icon faIconName={faEllipsis} handleClick={handleMiniDropdown} />
            {dropdown && (
              <MiniDropdown
                arr={editFileDataArr}
                onEdit={() => {
                  console.log("clicking edit");
                  handleEdit();
                }}
                onDelete={() => {
                  console.log("clicking delete");
                  handleDelete();
                }}
              // onMoveFolder={()=>{console.log("clicking move folder");handleMoveFolder}}
              />
            )}
          </Title>
        )}
        {isEditing && (
          <Title dir="row">
            <Input
              type="text"
              value={newFileName}
              onChange={(e) => getFilenameValue(e)}
            />
            <Icon faIconName={faCheck} handleClick={handleSaveFileName} />
          </Title>
        )}

        <Container width="100%" backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData}></Content>
        </Container>
      </Wrapper>
    </Flexbox>
  );
};
