import styled from "styled-components";

export default function TextInput({ width = "" }) {
  const TextInput = styled.input`
    border-radius: 2rem;
    border: 0.05rem solid #3e3e3e;
    width: ${width};
    height: 3.875rem;
  `;

  return <TextInput type="text" placeholder="placeholder text"></TextInput>;
}
