import styled from "styled-components";
import Icon from "../Icon/Icon";
import { faVolumeHigh, faMagnifyingGlass, faFileLines, faHighlighter, faFont, faBookmark, faDownload} from "@fortawesome/free-solid-svg-icons"

const ToolBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 53rem;
`;
export default function ToolBar() {
  return (
    <ToolBarCont>
      <Icon faIconName={faVolumeHigh} ></Icon>
      <Icon faIconName={faMagnifyingGlass}></Icon>
      <Icon faIconName={faFileLines} ></Icon>
      <Icon faIconName={faHighlighter}></Icon>
      <Icon faIconName={faFont} ></Icon>
      <Icon faIconName={faBookmark}></Icon>
      <Icon faIconName={faDownload} ></Icon>
    </ToolBarCont>
  );
}
