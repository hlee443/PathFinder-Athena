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

const Title = styled(Flexbox)``;

export default function Converted() {
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
        <Container
          width="100%"
          height="100%"
        >
          {router.query.fileContent}
          {/* FUTURE: content component, props passed into will be the fiile 
            info and file settings (text size, container bg-colour, etc) 
          */}
          {/* component in itself will render the content itself */}
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
