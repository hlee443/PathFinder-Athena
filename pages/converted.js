import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import Toolbar from "../components/Toolbar/Toolbar";
import Icon from "../components/Icon/Icon";
import styled from "styled-components";
import { faPencil } from "@fortawesome/free-solid-svg-icons";


const Title = styled(Flexbox)``

export default function Converted() {
  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Title dir="row">
          <Header text="Assignment"></Header>
          <Icon faIconName={faPencil}></Icon>
        </Title>
        <Toolbar></Toolbar>
        <Container width="100%" height="100%">
          //converted text goes here
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
