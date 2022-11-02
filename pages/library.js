import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { colors, Flexbox, Wrapper, BodyText } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import File from "../components/File/File";
import Header from "../components/Header/Header";
import FeatureExplain from "../components/FeatureExplain/FeatureExplain";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from 'react';
import { faFolder, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import * as mainHandler from '../handlers/main';

const FileDisplay = styled(Flexbox)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 2rem;
`

const TopCont = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
  `

export default function Library() {
  const [folders, setFolders] = useState([])
  const [files, setFiles] = useState([])

  useEffect(() => {
     
      const getFolders = async (cb) => {
         const folderData = await mainHandler.handleGetFoldersByUserId(9)


         folderData.data.map(folder => {
              folder.icon = faFolder
          })
    
          folderData.data.push({ text: "Create New", icon: faFolderPlus })

          setFolders(folderData.data)
          // console.log("FOLDERDATA", folders)
          cb(folderData.data[0])

      }

      getFolders((folder) => {
        onSelectFolder(folder.folder_id)
      })

    
  }, []);

  async function onSelectFolder(folderId){
      const fileData = await mainHandler.handleGetFilesByFolderId(folderId)
      
      setFiles(fileData.data)
     
  }

  function onSelectFile(fileId){
    console.log("file Id", fileId) // should successfully pass from the file.jsx prop
  }


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
          { files ?
            files.map(file => (
              <File
                key={file.file_id}
                fileName={file.file_name}
                fileId= {file.file_id}
                handleClick={onSelectFile}
              ></File>
            ))
            :
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

  // const FeatureExplainText = styled(Flexbox)`
  // padding: 6rem;
  // `

  // const FeatureExplainCont = styled(Flexbox)`
  // flex-direction:row;
  // justify-content: space-between;
  // padding: 6rem;
  // flex-wrap: wrap;
  // align-self: flex-start;
  // margin-top: -5rem;
  // `

{/* <FeatureExplainText>
        <Header text="Customize your documents to your needs" />
        <SubHeader text="Pathfinder gives you the tools to have a better experiance accessing documents. Use the tools in the toolbar to customize and access documents" />
      </FeatureExplainText>
      <FeatureExplainCont>
        <FeatureExplain
          featureName="Save"
          icon={faBookmark}
          featureDescription="Save the document to the library"
        />
        <FeatureExplain
          featureName="Summarize"
          icon={faFileLines}
          featureDescription="Summarizes lengthy and complicated texts"
        />
        <FeatureExplain
          featureName="Highlight"
          icon={faHighlighter}
          featureDescription="Highlight texts"
        />
        <FeatureExplain
          featureName="Download"
          icon={faDownload}
          featureDescription="Download the document"
        />
        <FeatureExplain
          featureName="Text-to-speech"
          icon={faVolumeHigh}
          featureDescription="Turn text into natural speech"
        />
        <FeatureExplain
          featureName="Text Settings"
          icon={faFont}
          featureDescription="Adjust the settings of the text in the document"
        />
        <FeatureExplain
          featureName="Dictionary"
          icon={faMagnifyingGlass}
          featureDescription="Look up the meaning of English words"
        />
        <FeatureExplain
          featureName="More to come..."
          icon={faSquarePlus}
          featureDescription=""
        />
      </FeatureExplainCont> */}