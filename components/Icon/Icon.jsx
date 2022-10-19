import styled from "styled-components";
import { Flexbox } from "../../styles/globals";
import { icon_svgs } from "./data";

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
  icon_name = "sound",
  changeIcon = () => { },
  align = "",
  handleClick = () => { }
}) {

  return (
    <IconCont align={align} size={size} onClick={handleClick}>
      <IconImg
        src={changeIcon}
        name={icon_name}

        backgroundColor={backgroundColor}
      ></IconImg>
    </IconCont>

  );
}
