import styled from "styled-components";
import { colors } from "../../styles/globals";

const InputCont = styled.input`
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border: 0.05rem solid ${colors.darkGray};
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
}) {
  if (type === "text") {
    return (
      <InputCont
        borderRadius="3.125rem 0 0 3.125rem;"
        type={type}
        placeholder={placeholder}
        width={width}
      ></InputCont>
    );
  }

  if (type === "dropdown") {
    return (
      <OptionCont OptionCont type="option" width={width}>
        <option value="" selected>
          Placeholder
        </option>
        <option value=""></option>
      </OptionCont>
    );
  }
}
