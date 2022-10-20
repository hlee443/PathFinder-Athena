import styled from "styled-components";
import { iconSvgs } from "./data";
import { Flexbox } from "../../styles/globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


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



export default function FontAwesomeIcon({
  backgroundColor = "transparent",
  size = "3rem",
  iconName = "sound",
  fontAwesomeIconName = "fa-sharp fa-solid fa-link",
  changeIcon = () => { },
  handleClick = () => {},
  align = ""
}) {
  return (
    <IconCont align={align} size={size} onClick={handleClick}>
      <IconImg
        src={<FontAwesomeIcon icon="fa-sharp fa-solid fa-link" />}
        name={iconName}
        backgroundColor={backgroundColor}
      ></IconImg>
    </IconCont>
  );
}
