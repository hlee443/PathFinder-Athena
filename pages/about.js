import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import LogoBar from "../components/LogoBar/LogoBar";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";

import { useRouter } from "next/router";

// export const tabBarBtns = [
//   {
//     text: "Upload a file",
//     icon: faUpload,
//   },
//   {
//     text: "Import a URL",
//     icon: faLink,
//   },
// ];

export default function About() {
  const router = useRouter();

  return (
    <Flexbox>
      <LogoBar />
      <NavBar />
      <Wrapper>
        <Header text="Pathfinder" />
        <SubHeader text="Let us make your documents easier to understand." />
      </Wrapper>
    </Flexbox>
  );
}
