import styled from "styled-components";
import { mediaQuery } from "../MediaQuery/data";

export const textData = {
  lineHeight: "150%",
  letterSpacing: "0.22em",
  h1: {
    size: "2.375rem",
    fontWeight: "700",
  },
  h2: {
    size: "1.5rem",
  },
};

export const logoData = {
  favicon: "../images/icon.svg",
  logoHorizontal: "../images/logo-horizontal.svg",
  logoVertical: "../images/logo-vertical.svg",
  logoIcon: "../images/logo-icon.svg",
  logoTypeface: "../images/logo-typeface.svg",
};

export const colors = {
  primaryBlue: "#96ADFC",
  secondaryBlue: "#C3D1FF",
  backgroundWhite: "#FFFFFC",
  backgroundYellow: "#F3F0E1",
  backgroundLightYellow: "#FFFDF2",
  backgroundCream: "#FFFEF7",
  buttonPrimaryBlue: "#C3D1FF",
  buttonSecondaryBlue: "#96ADFC",
  buttonLightBlue: "#E5EbFF",
  buttonGrey: "#CACACA",
  buttonTextGrey: "#9F9F9F",
  textBlack: "#000000",
  darkGrey: "#3E3E3E",
  lightGrey: "#E1E1E1",
  buttonLightGrey: "#F5F5F5",
  grey: "#D9D9D9",
  opacity: "rgba(240, 240, 240, .7)",
};

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "column"};
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(Flexbox)`
  align-items: start;
  justify-content: start;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  gap: 2.5rem;
  padding: 8rem;
  overflow-y: scroll;

  @media ${mediaQuery.maxWidth.mobile} {
    padding: 1rem;
    gap: 1rem;
  }

  @media ${mediaQuery.maxWidth.tablet} {
    padding: 3rem;
  } ;
`;

export const BodyText = styled.p`
  font-size: 1em;
  margin: 0;
  width: fit-content;
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
`;

export const Container = styled(Flexbox)`
  width: ${(props) => props.width || "100%"};
  max-width: 100%;
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding || "2em"};
  border: 0.125rem solid;
  border-color: ${(props) => props.borderColor || colors.darkGray};
  background-color: ${(props) =>
    props.backgroundColor || colors.backgroundWhite};
  border-radius: 2rem;
  gap: ${(props) => props.gap};
  font-family: ${(props) => props.typeface};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineSpace}%;
  letter-spacing: ${(props) => props.letterSpace}rem;
`;
