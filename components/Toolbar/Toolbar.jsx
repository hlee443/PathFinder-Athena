import styled from "styled-components";
import Icon from "../Icon/Icon";
import { iconSvgs } from "../Icon/data";

const ToolBarCont = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 53rem;
`;
export default function ToolBar(src) {
  return (
    <ToolBarCont>
      <Icon src={iconSvgs.sound}></Icon>
      <Icon src={iconSvgs.dictionary}></Icon>
      <Icon src={iconSvgs.summarize}></Icon>
      <Icon src={iconSvgs.highlight}></Icon>
      <Icon src={iconSvgs.font}></Icon>
      <Icon src={iconSvgs.save}></Icon>
      <Icon src={iconSvgs.download}></Icon>
    </ToolBarCont>
  );
}
