import styled from "styled-components";
import {
  faChevronUp,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";
import { Flexbox } from "../../styles/globals";
import { useState } from "react";
import { colors } from "../../styles/globals";

const Cont = styled.div`
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 2px 5px 10px 0px #0000001a;
  padding: 1rem;
  background-color: ${colors.backgroundLightYellow};
  margin-top: 1rem;
`;
const Word = styled.p`
  font-weight: 700;
`;
const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const IconCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Def = styled.p``;

export default function WordSaved() {
  const [open, setOpen] = useState(false);
  const [showDef, setShowDef] = useState(false);
  return (
    <Cont>
      <TopDiv>
        <Word>Word</Word>
        <IconCont>
          {(showDef && (
            <Icon
              faIconName={faChevronUp}
              handleClick={() => setShowDef(false)}
            ></Icon>
          )) || (
            <Icon
              faIconName={faChevronDown}
              handleClick={() => setShowDef(true)}
            ></Icon>
          )}

          <Icon faIconName={faClose}></Icon>
        </IconCont>
      </TopDiv>
      {showDef && <Def>Definition here</Def>}
    </Cont>
  );
}