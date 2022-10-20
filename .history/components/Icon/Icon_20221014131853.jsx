import styled from "styled-components";

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
  height = "50px",
}) {
  const Icon = styled.img`
  background-color: {backgroundColor};
  height:{height};
  width: {height};
  object-fit:contain;`;

  return <Icon src={src} backgroundColor="none" height="50px"></Icon>;
}