import styled from "styled-components";

export const textData = {
  lineHeight: "150%",
  letterSpacing: "0.35em",
  h1: {
    size: "2.375rem",
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
  buttonGray: "#CACACA",
  buttonTextGrey: "#9F9F9F",
  textBlack: "#000000",
  darkGray: "#3E3E3E",
  lightGray: "#E1E1E1",
};

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "column"};
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(Flexbox)`
  padding: 6rem;
  justify-content: space-between;
  min-height: 38.188rem;
  align-items: start;
`;
