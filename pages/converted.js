import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper } from "../styles/globals";
import Button from "../components/Button/Button";
import Toolbar from "../components/Toolbar/Toolbar";
import Container from "../components/Container/Container";
import Icon from "../components/Icon/Icon";
import { icon_svgs } from "../components/Icon/data";

export default function Converted() {
  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Assignment"></Header>
        <Icon></Icon>
        <Toolbar></Toolbar>
        <Container>
          <SubHeader></SubHeader>
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
