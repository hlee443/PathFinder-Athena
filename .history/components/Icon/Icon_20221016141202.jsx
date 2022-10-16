import styled from "styled-components";

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
  size = "2rem",
}) {
  const Icon = styled.img`
  background-color: {backgroundColor};
  height:${size};
  width: ${size};
  object-fit:cover;`;

  return <Icon src={src} backgroundColor={backgroundColor} size="2rem"></Icon>;
}
