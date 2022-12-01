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

const StyledWrapper = styled(Wrapper)`
  padding: 10rem;
`;

const StyledImg = styled.img`
  max-width: 15rem;
`;

export default function About() {
  const router = useRouter();

  return (
    <Flexbox>
      <LogoBar />
      <NavBar />
      <StyledWrapper>
        <StyledImg src="../images/icon.svg"></StyledImg>
        <Header text="Pathfinder" />
        <SubHeader text="Who We Are" />
        <p>
          Pathfinder is a study helper that reformats educational resources such
          as assignment guidelines and instructions to help students with
          dyslexia understand the content easily.{" "}
        </p>
        <SubHeader text="Our Mission"></SubHeader>
        <p>
          Our mission is to help students with dyslexia to find studying easier
          with a couple of changes. We created an app to enhance learning
          experiences for everyone.
        </p>
        <SubHeader text="Background"></SubHeader>
        <p>
          As a group of students studying for coursework every day, we found
          course guidelines and instructions were sometimes disorganized and
          hard to understand. Since we, as able individuals, struggled to
          process them, we imagined that people with dyslexia and other learning
          disabilities would find it even more difficult.{" "}
        </p>
        <SubHeader text="Our Benefits"></SubHeader>
        <p>
          Having dyslexia does not mean you are not intelligent. With
          Pathfinder, dyslexic students can do better with reading and
          understanding, and do very well in school.
        </p>
        <ul>
          <li>
            Files are reformatted based on your text, colour, and spacing
            preference, so they are easier for you to read.
          </li>
          <li>
            The entire website complies with AAA guidelines, so nothing would
            distract you while navigating our pages.
          </li>
          <li>
            Consistent layout and component placement will help you find the
            information fast without confusion.
          </li>
        </ul>
      </StyledWrapper>
    </Flexbox>
  );
}
