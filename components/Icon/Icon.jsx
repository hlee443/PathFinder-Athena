import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { BodyText, colors, Flexbox } from "../../styles/globals";
import Label from "../Label/Label";

const IconCont = styled(Flexbox)`
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => props.paddingTop};
  :hover {
    background-color: ${(props) => props.hoverColor};
    border-radius: 2rem;
  }
`;

const Img = styled.img``;

export default function Icon({
  faIconName = faLink,
  handleClick = () => {},
  size = "lg",
  color = "black",
  text = "",
  hoverColor = "transparent",
  paddingTop = "",
  src = null,
}) {
  return (
    <IconCont
      text={text}
      onClick={handleClick}
      hoverColor={hoverColor}
      paddingTop={paddingTop}
    >
      {src === null && (
        <FontAwesomeIcon
          size={size}
          color={color}
          icon={faIconName}
        ></FontAwesomeIcon>
      )}
      {src !== null && <Img src={src}></Img>}
      {text && <BodyText>{text}</BodyText>}
    </IconCont>
  );
}
