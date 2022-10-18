import styled from "styled-components";
import Icon from "../Icon/Icon";

export default function Toolbar() {
  const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    border: none;
    width: 53rem;
  `;

  return (
    <Toolbar>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
    </Toolbar>
  );
}
