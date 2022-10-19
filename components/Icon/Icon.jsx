import styled from "styled-components";
import { iconSvgs } from "./data";

const IconCont = styled.img`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default function Icon({
  backgroundColor = "transparent",
  size = "3rem",
  iconName = "sound",
  changeIcon = () => {},
}) {
  return (
    <IconCont
      src={changeIcon}
      name={iconName}
      size={size}
      backgroundColor={backgroundColor}
    ></IconCont>
  );
}
