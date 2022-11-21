import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { colors, Flexbox, Wrapper, BodyText } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import File from "../components/File/File";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from 'react';
import { faFolder, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import * as mainHandler from '../handlers/main';

const FileDisplay = styled(Flexbox)`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: start;
  column-gap: 4rem;
  row-gap: 8rem;
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // grid-auto-rows: minmax(20px, auto);
  // grid-gap: 3rem;
`

const TopCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`

export default function Library() {
  const [folders, setFolders] = useState([])
  const [files, setFiles] = useState([])

  useEffect(() => {
    const getFolders = (cb) => {
      mainHandler.handleGetFoldersByUserId(9, res => {
        let folderData = res.data
        folderData.map(folder => {
          folder.icon = faFolder
        })
        folderData.push({ text: "Create New", icon: faFolderPlus })
        setFolders(folderData)
        cb(folderData[0])
      })
    }
    getFolders((folder) => {
      onSelectFolder(folder.folder_id)
    })
  }, []);

  async function onSelectFolder(folderId) {
    mainHandler.handleGetFilesByFolderId(folderId, res => {
      let fileData = res.data
      console.log(fileData)
      setFiles(fileData)
    })
  }

  function onSelectFile(fileId) {
    console.log("file Id", fileId) // should successfully pass from the file.jsx prop
  }

  function handleDelete(fileId) {
    mainHandler.handleDeleteFile(fileId);
    setFiles(files.filter(files => files.file_id !== fileId));
  };

  let fileList = files.map(file => {
    return <File
      {...file}
      key={file.file_id}
      fileName={file.file_name}
      fileId={file.file_id}
      handleClick={onSelectFile}
      handleDelete={handleDelete}
    ></File>
  })

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <TopCont dir="row">
          <Header text="Library"></Header>
          <SearchBar></SearchBar>
        </TopCont>
        <TabBar
          btnArr={folders}
          buttonClick={onSelectFolder}
        ></TabBar>
        <FileDisplay dir="row">
          <File
            fileName="New File"
          ></File>
          {files ? fileList :
            (
              <>
                <BodyText>Your library is currently empty, add a document to get started.</BodyText>
              </>
            )
          }
        </FileDisplay>
      </Wrapper>
    </Flexbox>);
};