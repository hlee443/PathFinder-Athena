import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { colors, Flexbox, Wrapper, BodyText } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import File from "../components/File/File";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faFolder, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import * as mainHandler from "../handlers/main";
import LogoBar from "../components/LogoBar/LogoBar";
import { mediaQuery } from "../MediaQuery/data";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

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
  }

  @media ${mediaQuery.maxWidth.tablet} {
    column-gap: 3rem;
    row-gap: 2rem;
  } ;
`;

const TopCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`;

export default function Library() {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [visible, setVisible] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getFolders = (cb) => {
      mainHandler.handleGetFoldersByUserId(9, (res) => {
        let folderData = res.data;
        folderData.map((folder) => {
          folder.icon = faFolder;
        });
        // folderData.push({ text: "Create New", icon: faFolderPlus });
        setFolders(folderData);
        cb(folderData[0]);
      });
    };
    getFolders((folder) => {
      onSelectFolder(folder.folder_id);
    });
  }, []);

  async function onSelectFolder(folderId) {
    mainHandler.handleGetFilesByFolderId(folderId, (res) => {
      let fileData = res.data;
      // console.log(fileData);
      setFiles(fileData);
    });
  }

  function onSelectFile(fileId) {
    mainHandler.handleGetFile(fileId, (res) => {
      let { fileData, settingData } = res.data;
      router.push(
        {
          pathname: `/converted`,
          query: {
            fileData: JSON.stringify(fileData),
            settingData: JSON.stringify(settingData),
            folderArray: JSON.stringify(folders),
          },
        },
        "/converted"
      );
    });
  }

  function handleDelete(fileId) {
    mainHandler.handleDeleteFile(fileId);
    setFiles(files.filter((files) => files.file_id !== fileId));
    setVisible(false);
  }

  let fileList = files.map((file) => {
    return (
      <File
        {...file}
        key={file.file_id}
        fileName={file.file_name}
        fileId={file.file_id}
        folderId={file.folder_id}
        fileContent={file.file_content}
        handleClick={onSelectFile}
        handleDelete={handleDelete}
      ></File>
    );
  });

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
        <TabBar btnArr={folders} buttonClick={onSelectFolder} />
        <FileDisplay dir="row">
          <File
            fileName="Add a new file"
            handleClick={() => {
              router.push("/");
            }}
          />
          <AnimatePresence>
            {files ? (
              <AnimateSharedLayout>
                <AnimatePresence>{fileList}</AnimatePresence>
              </AnimateSharedLayout>
            ) : (
              <>
                <BodyText>
                  Your library is currently empty, add a document to get
                  started.
                </BodyText>
              </>
            )}
          </AnimatePresence>
        </FileDisplay>
      </Wrapper>
    </Flexbox>
  );
}
