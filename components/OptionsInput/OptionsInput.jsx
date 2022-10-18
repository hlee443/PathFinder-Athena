import styled from "styled-components";

const OptionsCont = styled.select`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  padding: 1rem;
`;

export default function OptionsInput() {
  return (
    <OptionsCont>
      <option value="" disabled selected>
        Placeholder
      </option>
      <option></option>
      <option></option>
    </OptionsCont>
  );
}
