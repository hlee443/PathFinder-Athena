import styled from "styled-components";

const IconCont = styled.img`
  background-color: ${(props) => props.backgroundColor};
  height: ${size};
  width: ${size};
  object-fit: cover;
`;

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
  size = "2rem",
}) {
  return <IconCont src={src} backgroundColor={backgroundColor}></IconCont>;
}
