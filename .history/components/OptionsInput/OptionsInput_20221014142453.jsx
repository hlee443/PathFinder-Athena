import styled from "styled-components";

export default function OptionsInput() {
  const OptionsInput = styled.select`
    border-radius: 50px;
    border: 1px solid #3e3e3e;
    width: ${width};
  `;

  return (
    <OptionsInput placeholder="placeholder text">
      <option></option>
      <option></option>
      <option></option>
    </OptionsInput>
  );
}
