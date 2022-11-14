import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { colors, Flexbox, textData } from "../../styles/globals";

const IconCont = styled(Flexbox)`
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 1.25rem;
`;

const IconLabel = styled(Flexbox)`
  border-radius: 2rem;
  width: fit-content;
  height: fit-content;
  padding: 0.3rem 0.5rem;
  letter-spacing: ${textData.letterSpacing};
  cursor: pointer;
  background-color: ${colors.backgroundWhite};
  position: absolute;
  bottom: 0;
  margin-bottom: -1rem;
`;

// :hover {
//   background-color: ${(props) => props.hoverColor};
// }

const IconImg = styled.img`
  aspect-ratio: 1;
`;

export default function Icon({
  faIconName = faLink,
  handleClick = () => { },
  size = "lg",
  color = colors.textBlack,
  // hoverColor = "transparent",
  src = null,
  text = "",
}) {

  const [label, setLabel] = useState(false);
  const [bg, setBg] = useState("transparent");

  return (
    <IconCont
      onClick={handleClick}
      // hoverColor={hoverColor}
      onMouseEnter={() => { setLabel(true) }}
      onMouseLeave={() => { setLabel(false) }}
    >
      {src === null && (
        <FontAwesomeIcon
          size={size}
          color={color}
          icon={faIconName}
        />
      )}
      {src !== null && <IconImg src={src} />}
      {label && <IconLabel>{text}</IconLabel>}
    </IconCont>
  );
}
