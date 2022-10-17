import styled from "styled-components";

const InputCont = styled.input`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  width: ${(props) => props.width};
  height: 3.875rem;
  padding: 1rem;
`;

export default function TextInput({ width = "" }) {
  return <InputCont type="text" placeholder="placeholder text"></InputCont>;
}
