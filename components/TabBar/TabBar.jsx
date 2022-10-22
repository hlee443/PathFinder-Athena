import styled from "styled-components";
import Button from "../Button/Button";
import { colors, Flexbox, Container } from "../../styles/globals";
import { btnData } from "./data";
import { useState } from "react";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const TabBarCont = styled(Flexbox)`
  border-bottom: 0.25rem solid #e1e1e1;
  justify-content: start;
  width: 100%;
`;

export default function TabBar(
  changePage = () => { },
  inputType = "url"

) {

  const [isActive, setIsActive] = useState(false);

  const changeState = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <TabBarCont inputType={inputType} dir="row">
      <Button
        borderBottom={isActive ? btnData.state.clicked.borderBottom : btnData.state.default.borderBottom}
        backgroundColor="transparent"
        borderRadius="0"
        type="IconButton"
        text="Import from URL"
        width={btnData.width}
        handleClick={() => { changeState(), changePage}}
      />
      <Button
        borderBottom={isActive ? btnData.state.clicked.borderBottom : btnData.state.default.borderBottom}
        backgroundColor="transparent"
        borderRadius="0"
        type="IconButton"
        text="Upload a File"
        width={btnData.width}
        ButtonFaIconName={faArrowUpFromBracket}
        handleClick={() => { changeState, changePage }} />
    </TabBarCont>
  );
};
