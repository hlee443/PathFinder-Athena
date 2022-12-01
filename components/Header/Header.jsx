import styled from "styled-components";
import { textData } from "../../styles/globals";
import { mediaQuery } from "../../MediaQuery/data";


const HeaderCont = styled.h1`
  font-size: ${textData.h1.size.desktop};
  color: ${(props) => props.color};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  font-weight: 700;
  margin: 0;

  @media ${mediaQuery.maxWidth.mobile} {
    font-size: ${textData.h1.size.mobile};
  };
`;

export default function Header({ text = "Header text" }) {
  return <HeaderCont>{text}</HeaderCont>;
}
