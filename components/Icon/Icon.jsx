import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Label from "../Label/Label";

const IconCont = styled(Flexbox)`
  justify-content: space-evenly;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  pointer: cursor;
  :hover {
    background-color: ${(props) => props.hoverColor};
    border-radius: 1.25rem;
  };
  padding: 0.5rem;
  aspect-ratio: 1;
`;

const IconImg = styled.img`
width: 100%;
height: 100%;
aspect-ratio: 1;
`

export default function Icon({
  faIconName = faLink,
  handleClick = () => { },
  size = "lg",
  color = colors.textBlack,
  hoverColor = "transparent",
  src = null,
  text = "",
}) {
  return (
    <IconCont
      onClick={handleClick}
      hoverColor={hoverColor}
    >
      {src === null && (
        <FontAwesomeIcon
          size={size}
          color={color}
          icon={faIconName}
        ></FontAwesomeIcon>
      )}
      {src !== null && <IconImg src={src} />}
      {text && <Label text={text}></Label>}
    </IconCont>
  );
};
