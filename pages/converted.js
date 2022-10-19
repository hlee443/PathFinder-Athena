import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import { colors, Flexbox, Wrapper } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Toolbar from "../components/Toolbar/Toolbar";
import Container from "../components/Container/Container";
import { icon_svgs } from "../components/Icon/data";

export default function Converted() {
  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Assignment"></Header>
        <Toolbar></Toolbar>
        <Container>
          <SubHeader></SubHeader>
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
