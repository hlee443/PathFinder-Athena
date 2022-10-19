import styled from "styled-components";
import Icon from "../Icon/Icon";
import { icon_svgs } from "../Icon/data";

const ToolbarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 53rem;
`;
export default function Toolbar(src) {
  return (
    <ToolbarCont>
      <Icon src={icon_svgs.sound}></Icon>
      <Icon src={icon_svgs.dictionary}></Icon>
      <Icon src={icon_svgs.summarize}></Icon>
      <Icon src={icon_svgs.highlight}></Icon>
      <Icon src={icon_svgs.font}></Icon>
      <Icon src={icon_svgs.save}></Icon>
      <Icon src={icon_svgs.download}></Icon>
    </ToolbarCont>
  );
}
