import styled from "styled-components";

export default function TextInput({ width = "" }) {
  const TextInput = styled.input`
    border-radius: 2rem;
    border: 0.05rem solid #3e3e3e;
    width: ${width};
  `;

  return <TextInput type="text" placeholder="placeholder text"></TextInput>;
}
