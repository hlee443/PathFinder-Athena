import styled from "styled-components";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import { iconSvgs } from "../Icon/data";
import { btnData } from "./data";
import { useState } from "react";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const TabBarCont = styled(Flexbox)`
  border-bottom: 0.25rem solid #e1e1e1;
  justify-content: start;
  width: 100%;
`;

export default function TabBar() {
  const [selected, isSelected] = useState();

  return (
    <TabBarCont dir="row">
      <Button
        borderBottom={btnData.state.clicked.borderBottom}
        backgroundColor="transparent"
        borderRadius="0"
        type="IconButton"
        icon_name="link"
        text="Import from URL"
        width={btnData.width}
      />
      <Button
        borderBottom={btnData.state.default.borderBottom}
        backgroundColor="transparent"
        type="IconButton"
        icon_name="upload"
        text="Upload a File"
        width={btnData.width}
        ButtonFaIconName={faArrowUpFromBracket}
      />
    </TabBarCont>
  );
}
