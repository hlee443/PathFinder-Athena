import styled from "styled-components";

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
}) {
  const Icon = styled.img`
  background-color: {backgroundColor}
  padding:3px;`;

  return <Icon src={src} backgroundColor="none"></Icon>;
}
