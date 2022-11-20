import styled from "styled-components";
import { textData } from "../../styles/globals";
import { mediaQuery } from "../../MediaQuery/data";
import { motion } from "framer-motion";


const HeaderCont = styled.h1`
  font-size: ${textData.h1.size};
  color: ${(props) => props.color};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  font-weight: ${textData.h1.fontWeight};
  margin: 0;

  @media ${mediaQuery.maxWidth.mobile} {
    font-size: 2rem;
  };
`;

export default function Header({ text = "Header text" }) {
  return <>
      <motion.div
    initial={{ opacity: 0, scale: 1.2 }}
    animate={{ opacity: 1, scale:1 }}
    transition={{ duration: 1 }}
    >

      <HeaderCont>{text}</HeaderCont>;

    </motion.div>
  </>
}
