import styled from "styled-components";
import { colors } from "../../styles/globals";

const InputCont = styled.div`
width: 100%;
`


const TextInput = styled.input`
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border: 0.05rem solid ${colors.darkGray};
  width: ${(props) => props.width || "100%"};
  height: 3.875rem;
  padding: 1rem;
  width: 100%;
`;

const OptionInput = styled.select`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  width: ${(props) => props.width};
  height: 3.875rem;
  padding: 1rem;
`;

export default function Input({
  width = "100%",
  type = "text",
  borderRadius = "3.125rem",
  placeholder = "placeholder",
}) {
  return <InputCont>
    {
      type === "dropdown" ? <OptionInput OptionCont type="option" width={width}>
        <option value="" selected>
          Placeholder
        </option>
        <option value=""></option>
      </OptionInput> : <TextInput
        borderRadius={borderRadius}
        type={type}
        placeholder={placeholder}
        width={width}
      ></TextInput>
    }
  </InputCont>
}