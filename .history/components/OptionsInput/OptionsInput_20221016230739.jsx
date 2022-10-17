import styled from "styled-components";

export default function OptionsInput() {
  const OptionsInput = styled.select`
    border-radius: 2rem;
    border: 0.05rem solid #3e3e3e;
  `;
  return (
    <OptionsInput>
      <option value="" disabled selected hidden>
        Placeholder
      </option>
      <option></option>
      <option></option>
    </OptionsInput>
  );
}
