import styled from "styled-components";
import { colors, textData } from "../../styles/globals";

const InputCont = styled.input`
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border: ${(props) => props.border || `0.05rem solid ${colors.darkGray}`};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
`;

const OptionCont = styled.select`
  border-radius: 2rem;
  border: 0.05rem solid ${colors.darkGray};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1rem;
`;

export default function Input({
  height = "100%",
  width = "100%",
  type = "text",
  value = "",
  borderRadius = "3.125rem",
  placeholder = "placeholder",
  border = "",
  onChange = () => { }
}) {
  if (type === "dropdown") {
    return (
      <OptionCont
        type="option"
        width={width}
        value={value}
        onChange={onChange}>
        <option
          value="Open Sans" >
          Open Sans
        </option>
        <option
          value="Arial">
          Arial
        </option>
      </OptionCont>
    );
  } else {
    return (
      <InputCont
        borderRadius={borderRadius}
        type={type}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        defaultValue={value}
        border={border}
        height={height}
      ></InputCont>
    );
  }
}
