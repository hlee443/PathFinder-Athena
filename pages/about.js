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
  padding-left: 10rem;
  padding-right: 10rem;
  height: 100%;
`;

const StyledImg = styled.img`
  max-width: 50%;
  padding-right: ${(props) => props.paddingRight || null};
  padding-left: ${(props) => props.paddingLeft || null};
`;

const FlexCont = styled(Flexbox)`
  align-items: flex-start;
`;
const Text = styled.p`
  margin-top: 1rem;
`;

const Yellow = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 5rem;
  background-color: ${colors.backgroundYellow};
  box-shadow: 0 0 0 100vmax ${colors.backgroundYellow};
  clip-path: inset(0 -100vmax);
`;

const Card = styled(Flexbox)`
  flex-direction: column;
`;

const CardCont = styled(Flexbox)`
  align-items: flex-end;
`;

export default function About() {
  return (
    <Flexbox>
      <LogoBar />
      <NavBar />
      <StyledWrapper>
        <Header text="Pathfinder" />
        <Flexbox dir="row">
          <FlexCont>
            <SubHeader text="Who We Are" />
            <Text>
              Pathfinder is a study helper that reformats educational resources
              such as assignment guidelines and instructions to help students
              with dyslexia understand the content easily.
            </Text>
          </FlexCont>

          <StyledImg
            src="../images/macbook-mockup.svg"
            alt="mockup"
          ></StyledImg>
        </Flexbox>
        <Flexbox>
          <Yellow bg="bg">
            <SubHeader text="Why Pathfinder?"></SubHeader>
            <iframe
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/slQRO4DoSQo"
            ></iframe>
            <Text>
              As a group of students studying for coursework every day, we found
              course guidelines and instructions were sometimes disorganized and
              hard to understand. Since we, as able individuals, struggled to
              process them, we imagined that people with dyslexia and other
              learning disabilities would find it even more difficult.{" "}
            </Text>
          </Yellow>
        </Flexbox>
        <Flexbox dir="row">
          <StyledImg
            src="../images/billy.svg"
            alt="confused billy"
            width="40%"
            paddingRight="3rem"
          ></StyledImg>
          <FlexCont>
            <SubHeader text="Our Mission"></SubHeader>
            <Text>
              Our mission is to help students with dyslexia, like Billy, to find
              studying easier with a couple of changes. We created an app to
              enhance learning experiences for everyone.
            </Text>
          </FlexCont>
        </Flexbox>
        <Text>
          Having dyslexia does not mean you are not intelligent. With
          Pathfinder, dyslexic students can do better with reading and
          understanding, and do very well in school.
        </Text>
        {/* <CardCont dir="row">
          <Card>
            <StyledImg src="../images/text-icons.svg" alt="text icons" />
            <Text>
              Files are reformatted based on your text, colour, and spacing
              preference, so they are easier for you to read.
            </Text>
          </Card>
          <Card>
            <StyledImg
              src="https://www.w3.org/WAI/wcag2AAA-blue"
              alt="Level AAA conformance,
            W3C WAI Web Content Accessibility Guidelines 2.0"
            />
            <Text>
              The entire website complies with AAA guidelines, so nothing would
              distract you while navigating our pages.
            </Text>
          </Card>
          <Card>
            <StyledImg src="../images/layout.svg" alt="layout icons" />
            <Text>
              Consistent layout and component placement will help you find the
              information fast without confusion.
            </Text>
          </Card>
        </CardCont> */}
      </StyledWrapper>
    </Flexbox>
  );
}
