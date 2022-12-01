import styled from "styled-components";
import { textData } from "../../styles/globals";
import { mediaQuery } from "../../MediaQuery/data";


const SubHeaderCont = styled.h2`
  font-size: ${textData.h2.size.desktop};
  color: ${(props) => props.color};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  margin: 0;
  font-weight: 400;

  @media ${mediaQuery.maxWidth.mobile} {
    font-size: ${textData.h2.size.mobile};
  };
  `

export default function SubHeader({ text = "SubHeader text" }) {
  return <SubHeaderCont>{text}</SubHeaderCont>;
};
