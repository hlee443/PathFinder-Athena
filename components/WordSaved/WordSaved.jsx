import styled from "styled-components";
import {
  faChevronUp,
  faChevronDown,
  faClose,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";
import { Flexbox } from "../../styles/globals";
import { useState } from "react";
import { colors } from "../../styles/globals";
import { motion } from "framer-motion";

const WordCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 100%;
  max-width: 30rem;
  border-radius: 0.75rem;
  box-shadow: 2px 5px 10px 0px #0000001a;
  padding: 1rem;
  background-color: ${colors.backgroundWhite};
  justify-content: start;
  gap: 1rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  width: 100%;
`;

const Word = styled.p`
  font-weight: bolder;
`;

const TopDiv = styled(Flexbox)`
  justify-content: space-between;
  width: 100%;
`;

const IconCont = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  max-width: 100%;
  width: 100%;
`;

export default function WordSaved({
  type = "",
  word = "",
  definition = "",
  id = "",
  onClose = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [showDef, setShowDef] = useState(true);
  return (
    <WordCont
      initial={{ x: 20 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <TopDiv dir="row">
        {
          type !== "summary" ? 
          ( // show keyword
            <>
            <Word>{word}</Word>
            <IconCont>
            {(showDef && (
              <Icon
                size="m"
                faIconName={faChevronUp}
                handleClick={() => setShowDef(false)}
              />
            )) || (
              <Icon
                size="m"
                faIconName={faChevronDown}
                handleClick={() => setShowDef(true)}
              />
            )}
             <Icon size="m" faIconName={faClose} handleClick={() => onClose(id)} />
            </IconCont>
            </>
          ) : (
            // show Summary
            <>
            <Text>Summary preview</Text>
            <IconCont>
              {(showDef && (
                <Icon
                  size="m"
                  faIconName={faChevronUp}
                  handleClick={() => setShowDef(false)}
                />
              )) || (
                <Icon
                  size="m"
                  faIconName={faChevronDown}
                  handleClick={() => setShowDef(true)}
                />
              )}
              <Icon size="m" faIconName={faLocationDot} handleClick={() => console.log("go to summary location")} />
              <Icon size="m" faIconName={faClose} handleClick={() => onClose(id)} />
            </IconCont>
            </>
          )
        }

        {/* {(type !== "summary" && <Word>{word}</Word>) || (
          <Text>Summary preview</Text>
        )}
        <IconCont>
          {(showDef && (
            <Icon
              size="m"
              faIconName={faChevronUp}
              handleClick={() => setShowDef(false)}
            />
          )) || (
            <Icon
              size="m"
              faIconName={faChevronDown}
              handleClick={() => setShowDef(true)}
            />
          )}
          <Icon size="m" faIconName={faClose} handleClick={() => onClose(id)} />
        </IconCont> */}
      </TopDiv>
      {showDef && <Divider />}
      {showDef && <Text>{type !== 'summary'? definition : definition.substring(0, 100) + '...'}</Text>}
    </WordCont>
  );
}
