import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { colors, Flexbox, textData } from "../../styles/globals";

const IconCont = styled(Flexbox)`
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: ${(props) => props.width};
  :hover {
  background-color: ${(props) => props.hoverColor};
  border-radius: 1.25rem;
}
`;



const IconImg = styled.img`
  aspect-ratio: 1;
`;

export default function Icon({
  faIconName = faLink,
  handleClick = () => { },
  size = "lg",
  color = colors.textBlack,
  hoverColor = "transparent",
  src = null,
  text = "",
  width= "",
  handleMouseEnter = () => {},
  handleMouseLeave = () => {},
}) {

  const [label, setLabel] = useState(false);
  const [bg, setBg] = useState("transparent");

  return (
    <IconCont
      onMouseDown={handleClick}
      hoverColor={hoverColor}
      width={width}
    >
      {src === null && (
        <FontAwesomeIcon
          size={size}
          color={color}
          icon={faIconName}
        />
      )}
      {src !== null && <IconImg src={src} />}
      {text && <div>{text}</div>}
    </IconCont>
  );
};
