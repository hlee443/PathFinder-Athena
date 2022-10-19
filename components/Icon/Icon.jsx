import styled from "styled-components";

const IconCont = styled.img`
background-color: ${props => props.backgroundColor};
width: ${props => props.size};
height: ${props => props.size};
`;

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "transparent",
  size = "2rem"
}) {
  return <IconCont
    src={src}
    size={size}
    backgroundColor={backgroundColor}
  >
  </IconCont>
}
