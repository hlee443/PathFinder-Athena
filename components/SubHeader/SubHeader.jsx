import styled from "styled-components";
import { textData } from "../../styles/globals";
import { mediaQuery } from "../../MediaQuery/data";
import { motion } from "framer-motion";

const SubHeaderCont = styled.h2`
  font-size: ${textData.h2.size};
  color: ${(props) => props.color};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  margin: 0;
  font-weight: 400;

  @media ${mediaQuery.maxWidth.mobile} {
    font-size: 1.125rem;
  };
  `

export default function SubHeader({ text = "SubHeader text" }) {
  return <>
    <motion.div
    initial={{ opacity: 0, scale: 1.2 }}
    animate={{ opacity: 1, scale:1 }}
    transition={{ duration: 1.2 }}
    >

      <SubHeaderCont>{text}</SubHeaderCont>;

    </motion.div>
    </>
};
