import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import styled from "styled-components";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ToolBarDropdown from "../components/ToolBarDropdown/ToolBarDropdown";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";
import { useState } from 'react';
import Tutorial from "../components/Tutorial/Tutorial";
import { TutorialData } from "../components/Tutorial/data";

const Title = styled(Flexbox)`
  align-self: flex-start;
`;

const TutorialCont = styled.div`
  position: absolute;
  top: 10rem;
`

export default function Converted() {
  const [dictionary, setDictionary] = useState(null)
  // props: file settings, -- probably -- file info, and url
  const router = useRouter();
  // MVP - get response of the handler.
  // Future - get response for Hermes (probably)
  // Props: get file settings and file info

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Title dir="row">
          <Header text={router.query.fileName}></Header>
          <Icon faIconName={faPencil}></Icon>
        </Title>
        <ToolBar></ToolBar>
        <Container width="100%" height="100%">
          {router.query.fileContent}
          {/* FUTURE: content component, props passed into will be the fiile 
            info and file settings (text size, container bg-colour, etc) 
          */}
          {/* component in itself will render the content itself */}
        </Container>

        {/* {dictionary && console.log("HELLO") && ( // if wordInfo is not null, render the table
      <table>
              <thead>
                <tr>
                  <th>
                    <span>{window.getSelection().toString()}</span>
                  </th>
                  <th>
                    <span>Definition</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>{wordInfo[1]}</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>{wordInfo[2]}</td>
                </tr>
              </tbody>
            </table>)
            }
 */}

        
      </Wrapper>
      <TutorialCont> <Tutorial slides={TutorialData}/> </TutorialCont>
    </Flexbox>
  );
}
