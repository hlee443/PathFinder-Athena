import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../styles/globals";
import Label from "../Label/Label";

const IconCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

export default function Icon({
  faIconName = faLink,
  handleClick = () => {},
  size = "lg",
  color = "black",
  text = "",
  hoverColor = "transparent",
}) {
  return (
    <IconCont text={text} onClick={handleClick} hoverColor={hoverColor}>
      <FontAwesomeIcon
        size={size}
        color={color}
        icon={faIconName}
      ></FontAwesomeIcon>
      {text && <Label text={text} backgroundColor="transparent"></Label>}
    </IconCont>
  );
}
