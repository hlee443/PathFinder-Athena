import styled from "styled-components";
import { colors } from "../../styles/globals";

const InputCont = styled.div`
  height: 100%;
  width: 100%;
`;

const TextCont = styled.input`
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border: ${(props) => props.border};
  width: ${(props) => props.width || "100%"};
  height: 3.875rem;
  padding: 1rem;
`;
const OptionCont = styled.select`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  width: ${(props) => props.width};
  height: 3.875rem;
  padding: 1rem;
`;

export default function Input({
  width = "15rem",
  type = "text",
  borderRadius = "",
  placeholder = "placeholder",
  border = `0.05rem solid ${colors.DarkGray}`
}) {
  return (
    <InputCont>
      <TextCont
        borderRadius={borderRadius}
        type={type}
        placeholder={placeholder}
        width={width}
        border={border}
      ></TextCont>
      {type === "dropdown" && (
        <OptionCont type="option" width={width}>
          <option value="" selected>
            Placeholder
          </option>
          <option value=""></option>
        </OptionCont>
      )}
    </InputCont>
  );
}
