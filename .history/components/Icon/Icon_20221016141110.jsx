import styled from "styled-components";

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
  size = "1.5rem",
}) {
  const Icon = styled.img`
  background-color: {backgroundColor};
  height:${size};
  width: ${size};
  object-fit:fill;`;

  return <Icon src={src} backgroundColor={backgroundColor} size="1px"></Icon>;
}
