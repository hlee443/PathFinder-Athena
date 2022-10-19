import styled from "styled-components";
import { textData } from "../../styles/globals";

const SubHeaderCont = styled.h2`
  font-size: ${textData.h2.size};
  color: ${(props) => props.color};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
`;

export default function SubHeader({ text = "SubHeader text" }) {
  return <SubHeaderCont>{text}</SubHeaderCont>;
}
