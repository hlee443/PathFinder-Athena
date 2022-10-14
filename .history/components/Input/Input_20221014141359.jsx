import styled from "styled-components";

export default function Input({ width = "" }) {
  const Input = styled.input`
    border-radius: 50px;
    border: 1px solid #3e3e3e;
    width: ${width};
  `;

  return <Input type="text" placeholder="placeholder text" width=""></Input>;
}
