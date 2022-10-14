import styled from "styled-components";

export default function TextInput({ width = "" }) {
  const TextInput = styled.input`
    border-radius: 50px;
    border: 1px solid #3e3e3e;
    width: ${width};
  `;

  return (
    <TextInput type="text" placeholder="placeholder text" width=""></TextInput>
  );
}
