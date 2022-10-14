import styled from "styled-components";

export default function Icon({
  src = "https://placekitten.com/25/25",
  backgroundColor = "none",
  height: "25px"
}) {
  const Icon = styled.img`
  background-color: {backgroundColor}
  height:{height}`
  ;

  return <Icon src={src} backgroundColor="none"></Icon>;
}
