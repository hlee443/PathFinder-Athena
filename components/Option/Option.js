import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText } from "../../styles/globals";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";
import { useState } from "react";

const OptionCont = styled(Flexbox)`
  justify-content: space-between;
`;

export default function Option({ type = "type", option = "text", unit = "unit", faIconName = faBook, inputType ="text", placeholder ={} }) {

  return <OptionCont type={type} dir="row">
    <Icon faIconName={faIconName}></Icon>
    <BodyText>{option}</BodyText>
    <Input type={inputType} placeholder={placeholder}></Input>
    {
      type === "unit" && <BodyText>{unit}</BodyText>
    }
  </OptionCont>
}