import { BLOCKED_PAGES } from "next/constants";
import styled from "styled-components";

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

export const colors = {
  primaryBlue: "#96ADFC",
  secondaryBlue: "#C3D1FF",
  backgroundWhite: "#FFFFFC",
  backgroundYellow: "#F3F0E1",
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
  grey: "#D9D9D9"
};

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "column"};
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(Flexbox)`
  justify-content: space-between;
  align-items: center;
  max-width: 75rem;
  min-height: 85vh;
`;

export const BodyText = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
`;

export const Container = styled(Flexbox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 2em;
  border: 0.125rem solid ${colors.darkGray};
  background-color: ${(props) => props.backgroundColor || colors.backgroundWhite};
  border-radius: 2rem;
  align-items: ${(props) => props.alignItems || "flex-start"}
`;
