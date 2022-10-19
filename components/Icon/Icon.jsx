import styled from "styled-components";
import { iconSvgs } from "./data";
import { Flexbox } from "../../styles/globals";

const IconCont = styled(Flexbox)`
align-self: ${(props) => props.align};
width: ${(props) => props.size};
height: ${(props) => props.size};
`

const IconImg = styled.img`
  background-color: ${(props) => props.backgroundColor};
    width: 100%;
    height:100%;
`;



export default function Icon({
  backgroundColor = "transparent",
  size = "3rem",
  iconName = "sound",
  changeIcon = () => { },
  handleClick = () => {},
  align = ""
}) {
  return (
    <IconCont align={align} size={size} onClick={handleClick}>
      <IconImg
        src={changeIcon}
        name={iconName}
        backgroundColor={backgroundColor}
      ></IconImg>
    </IconCont>
  );
}
