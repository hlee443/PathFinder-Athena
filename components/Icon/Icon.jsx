import styled from "styled-components";
import { iconSvgs } from "./data";
import { Flexbox } from "../../styles/globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"


const IconCont = styled(Flexbox)`
align-self: ${(props) => props.align};
width: ${(props) => props.size};
height: ${(props) => props.size};
`

const IconImg = styled.div`
  background-color: ${(props) => props.backgroundColor};
    width: 100%;
    height:100%;
`;



export default function Icon({
  backgroundColor = "transparent",
  size = "3rem",
  iconName = "sound",
  faIconName = faLink,
  changeIcon = () => { },
  handleClick = () => {},
  align = ""
}) {
  return (
    <IconCont align={align} size={size} onClick={handleClick}>
      <IconImg
        name={iconName}
        backgroundColor={backgroundColor}
      ><FontAwesomeIcon icon={faIconName}></FontAwesomeIcon></IconImg>
    </IconCont>
  );
}
