import styled from "styled-components";
import { icon_svgs } from "./data";

const IconCont = styled.img`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default function Icon({
  backgroundColor = "transparent",
  size = "3rem",
  icon_name = "sound",
  changeIcon = () => { }
}) {

  return (
    <IconCont
      src={changeIcon}
      name={icon_name}
      size={size}
      backgroundColor={backgroundColor}
    ></IconCont>
  );
}
