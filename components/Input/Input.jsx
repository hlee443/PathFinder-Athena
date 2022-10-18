import styled from "styled-components";

const InputCont = styled.div``;

const TextCont = styled.input`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  width: ${(props) => props.width};
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

export default function Input({ width = "15rem", type = "text" }) {
  return (
    <InputCont>
      {type === "text" && (
        <TextCont
          type="text"
          placeholder="placeholder text"
          width={width}
        ></TextCont>
      )}
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
