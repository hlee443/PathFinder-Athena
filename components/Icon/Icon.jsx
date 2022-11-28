import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import useMediaQuery from "../../MediaQuery/MediaQuery";
import { mediaQuery } from "../../MediaQuery/data";

const IconCont = styled(Flexbox)`
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  position: ${(props) => props.position};
  // height: 100%;
  width: ${(props) => props.width};
  border-radius: 1.25rem;
  justify-content: space-between;

  :hover {
    background-color: ${(props) => props.hoverColor};
}
`;

const IconImg = styled.img`
  aspect-ratio: 1;
  width: ${(props) => props.size};
`;

export default function Icon({
  faIconName = faLink,
  handleClick = () => { },
  size = "lg",
  color = colors.textBlack,
  hoverColor = "transparent",
  src = null,
  text = "",
  width = "",
  handleMouseEnter = () => { },
  handleMouseLeave = () => { },
  position =""
}) {

  const [bg, setBg] = useState("transparent");
  const isMobile = useMediaQuery(mediaQuery.maxWidth.mobile);
  const isTablet = useMediaQuery(mediaQuery.maxWidth.tablet);

  return (
    <IconCont
      position={position}
      onClick={handleClick}
      hoverColor={hoverColor}
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {src === null && (
        <FontAwesomeIcon
          size={isMobile ? "xl" : size}
          color={color}
          icon={faIconName}
        />
      )}
      {src !== null && <IconImg size={(isMobile || isTablet) && "2rem" || size} src={src} />}
      {text && <div>{text}</div>}
    </IconCont>
  );
};
