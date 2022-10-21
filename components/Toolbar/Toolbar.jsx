import styled from "styled-components";
import Icon from "../Icon/Icon";
import { useState } from "react";
import {
  faVolumeHigh,
  faMagnifyingGlass,
  faFileLines,
  faHighlighter,
  faFont,
  faBookmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import ToolBarDropdown from "../ToolBarDropdown/ToolBarDropdown";

const ToolBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 53rem;
  position: relative;
`;
export default function ToolBar() {
  const [showLibrary, setShowLibrary] = useState(false);
  return (
    <ToolBarCont>
      <Icon faIconName={faVolumeHigh}></Icon>
      <Icon faIconName={faMagnifyingGlass}></Icon>
      <Icon faIconName={faFileLines}></Icon>
      <Icon faIconName={faHighlighter}></Icon>
      <Icon faIconName={faFont}></Icon>
      <Icon faIconName={faBookmark} handleClick={setShowLibrary}></Icon>
      {showLibrary && (
        <ToolBarDropdown
          active={showLibrary}
          setActive={setShowLibrary}
          top="2rem"
          left="40rem"
        ></ToolBarDropdown>
      )}
      <Icon faIconName={faDownload}></Icon>
    </ToolBarCont>
  );
}
