import styled from "styled-components";

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
  height = "25px",
}) {
  const Icon = styled.img`
  background-color: {backgroundColor}
  height:{height}
  object-fit:cover`;

  return <Icon src={src} backgroundColor="none" height="25px"></Icon>;
}
