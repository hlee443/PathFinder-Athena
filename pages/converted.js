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

const Title = styled(Flexbox)`
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
  const [libValueArr, setLibValueArr] = useState([])
  const [typeValueArr, setTypeValueArr] = useState([])
  const [dropdown, showDropdown] = useState(false);

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
      <NavBar />
      <ToolBar onChange={handleChange} libValueArr={libValueArr} typeValueArr={typeValueArr}></ToolBar>
      <Wrapper>
        <Title dir="row">
          <Header text={fileData.file_name} />
          <Icon
            faIconName={faEllipsis}
            handleClick={showDropdown}
          />
          {
            dropdown && <MiniDropdown arr={editFileDataArr} />
          }
        </Title>
        <Container backgroundColor={settingData.background_colour}>
          <Content fileData={fileData} settingData={settingData} />
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
