import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import LogoBar from "../components/LogoBar/LogoBar";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import { mediaQuery } from "../MediaQuery/data";

const StyledImg = styled.img`
  width: 30rem;
  max-width: 100%;
`;

const FlexCont = styled(Flexbox)`
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media ${mediaQuery.maxWidth.tablet} {
    flex-direction: column;
  } ;
`;

const Yellow = styled(Flexbox)`
  background-color: ${colors.backgroundYellow};
  box-shadow: 0 0 0 100vmax ${colors.backgroundYellow};
  clip-path: inset(0 -100vmax);
  padding: 3rem 0;
  align-items: start;
  gap: 1rem;
  width: 100%;
`;

const Section = styled(Flexbox)`
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 2rem;
`

export default function About() {
  return (
    <Flexbox>
      <LogoBar />
      <NavBar />
      <Wrapper height="100%">
        <h1>Pathfinder</h1>
        <Section>
          <h2>Who We Are</h2>
          <FlexCont dir="row">
            <p>
              Pathfinder is a study helper that reformats educational resources
              such as assignment guidelines and instructions to help students
              with dyslexia understand the content easily.
            </p>
            <StyledImg
              src="../images/macbook-mockup.svg"
              alt="mockup"
            />
          </FlexCont>
        </Section>
        <Yellow bg="bg">
          <h2>Why Pathfinder?</h2>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/cRqvaevChG0"
          ></iframe>
          <p>
            As a group of students studying for coursework every day, we found
            course guidelines and instructions were sometimes disorganized and
            hard to understand. Since we, as able individuals, struggled to
            process them, we imagined that people with dyslexia and other
            learning disabilities would find it even more difficult.{" "}
          </p>
        </Yellow>
        <Section>
          <h2>Our Mission</h2>
          <FlexCont dir="row">
            <StyledImg
              src="../images/billy.svg"
              alt="Confused Billy while reading study materials"
            />
            <p>
              Our mission is to help students with dyslexia, like Billy, to find
              studying easier with a couple of changes. We created an app to
              enhance learning experiences for everyone.
            </p>
          </FlexCont>
        </Section>
        <Section>
          <h3>
            <strong>Having dyslexia does not mean you are not intelligent.</strong> 
          </h3>
          <p>
          With Pathfinder, dyslexic students can do better with reading and understanding, and do very well in school.
          </p>
        </Section>
      </Wrapper>
    </Flexbox >
  );
}
