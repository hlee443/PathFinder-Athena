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
  const [libraryFolderArray, setLibraryFolderArray] = useState([])
  const [typeValueArray, setTypeValueArray] = useState([])

  function handleChange(e) {
    e.preventDefault()
    switch (e.target.id) {
      case 'BackgroundColor':
        setTypeValueArray([
          {folder_name: "Header", folder_id: "Header"},
          e.target.value,
          typeValueArray[2],
          typeValueArray[3],
          typeValueArray[4],
          typeValueArray[5]
        ])
        break;
      case 'Typeface':
        setTypeValueArray([
          {folder_name: "Header", folder_id: "Header"},
          typeValueArray[1],
          e.target.value,
          typeValueArray[3],
          typeValueArray[4],
          typeValueArray[5]
        ])
        break;
      case 'FontSize':
        setTypeValueArray([
          {folder_name: "Header", folder_id: "Header"},
          typeValueArray[1],
          typeValueArray[2],
          e.target.value,
          typeValueArray[4],
          typeValueArray[5]
        ])
        break;
      case 'LineSpace':
        setTypeValueArray([
          {folder_name: "Header", folder_id: "Header"},
          typeValueArray[1],
          typeValueArray[2],
          typeValueArray[3],
          e.target.value,
          typeValueArray[5]
        ])
        break;
      case 'LineSpace':
        setTypeValueArray([
          {folder_name: "Header", folder_id: "Header"},
          typeValueArray[1],
          typeValueArray[2],
          typeValueArray[3],
          typeValueArray[4],
          e.target.value
        ])
        break;
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
    let folderArray = JSON.parse(router.query.folderArray)
    setSettingData(JSON.parse(router.query.settingData))

    setTypeValueArray([
      "Header",
      settingData.background_colour,
      settingData.typeface,
      settingData.font_size,
      settingData.line_space,
      settingData.letter_space
    ])

    setLibraryFolderArray([{folder_name: "Header", folder_id: "Header"}])
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryFolderArray(arr => [...arr, folderArray[i]])
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
        <ToolBar onChange={handleChange} typeValueArray={typeValueArray} libraryFolderArray={libraryFolderArray}></ToolBar>
        <Container width="100%" height="100%" backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData}>
          </Content>
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
