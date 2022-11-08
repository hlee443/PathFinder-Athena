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
  user-select: none;
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
  const [libValueArr, setLibValueArr] = useState([])
  const [typeValueArr, setTypeValueArr] = useState([])

  function handleChange(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  useEffect(() => {
    setFileData(JSON.parse(router.query.fileData))
    setSettingData(JSON.parse(router.query.settingData))
  }, []);

  return (
    <Flexbox>
      <NavBar></NavBar>
      <ToolBar onChange={handleChange} libValueArr={libValueArr} typeValueArr={typeValueArr}></ToolBar>
      <Wrapper>
        <Title dir="row">
          <Header text={fileData.file_name}></Header>
          <Icon faIconName={faPencil}></Icon>
        </Title>
        <Container width="100%" height="100%" backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData}>
          </Content>
        </Container>        
      </Wrapper>
    </Flexbox>
  );
}
