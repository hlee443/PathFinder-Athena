import styled from "styled-components";
import { colors } from "../../styles/globals";
import { useState } from 'react';

const InputCont = styled.input`
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border: ${(props) => props.border || `0.05rem solid ${colors.darkGray}`};
  width: ${(props) => props.width || "100%"};
  height: 100%;
  padding: 1rem;
  background-color: ${(props) => props.bgColor || `${colors.backgroundWhite}`}
`;

const OptionCont = styled.select`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  width: ${(props) => props.width};
  height: 100%;
  padding: 1rem;
`;

export default function Input({
  width = "15rem",
  type = "text",
  value = "",
  borderRadius = "3.125rem",
  placeholder = "placeholder",
  border = "",
  bgColor = "none",
  onChange = () => {}
}) {
  if (type === "dropdown") {
    return (
      <OptionCont type="option" width={width} value={value} onChange={onChange}>
        <option value="Open Sans" >
          Open Sans
        </option>
        <option value="Arial">Arial</option>
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
        bgColor={bgColor}
      ></InputCont>
    );
  }
}
