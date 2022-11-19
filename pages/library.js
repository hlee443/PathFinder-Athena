import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { colors, Flexbox, Wrapper, BodyText } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import File from "../components/File/File";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { faFolder, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import * as mainHandler from '../handlers/main';
import LogoBar from "../components/LogoBar/LogoBar"
import { mediaQuery } from "../MediaQuery/data";

const FileDisplay = styled(Flexbox)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: start;
  column-gap: 4rem;
  row-gap: 8rem;

  @media ${mediaQuery.maxWidth.mobile} {
    column-gap: 2rem;
    row-gap: 1rem;
  };

  @media ${mediaQuery.maxWidth.tablet} {
    column-gap: 3rem;
    row-gap: 2rem;
  };
`

const TopCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`

export default function Library() {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  const r = useRouter();

  useEffect(() => {

    const getFolders = async (cb) => {
      const folderData = await mainHandler.handleGetFoldersByUserId(9)


      folderData.data.map(folder => {
        folder.icon = null
      })

      folderData.data.push({ text: "Create New", icon: faFolderPlus })

      setFolders(folderData.data)

      cb(folderData.data[0])

    }

    getFolders((folder) => {
      onSelectFolder(folder.folder_id)
    })


  }, []);

  async function onSelectFolder(folderId) {
    const fileData = await mainHandler.handleGetFilesByFolderId(folderId)

    setFiles(fileData.data)

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
      <LogoBar />
      <NavBar />
      <Wrapper>
        {/* <TopCont dir="row">
          <Header text="Library" />
          <SearchBar />
        </TopCont> */}
        <Header text="Library" />
        <TabBar
          btnArr={folders}
          buttonClick={onSelectFolder}
        />
        <FileDisplay dir="row">
          <File
            fileName="Add a new file"
            handleClick={() => {
              r.push("/");
            }} />
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