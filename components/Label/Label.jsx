import styled from "styled-components";
import { Flexbox, textData } from "../../styles/globals";
import { motion } from "framer-motion";

const LabelCont = styled(Flexbox)`
  border-radius: 2rem;
  width: fit-content;
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom || "0"};
`;

const animationStyle = {display: 'flex', justifyContent: 'center'};

// background-color: ${(props) => props.backgroundColor};
// position: absolute;

export default function Label({
  text = "placeholder",
  backgroundColor = "#FFFEF6",
  handleClick = () => { },
  position = ""
  // top = null,
  // right = null,
}) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    style={animationStyle}
    >
    <LabelCont
      backgroundColor={backgroundColor}
      onClick={handleClick}
      position={position}
      // top={top}
      // right={right}
    >
      {text}
    </LabelCont>
    </motion.div>
  );
}
