import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Subheader from "../Subheader/SubHeader";
import Button from "../Button/Button";
import { icon_svgs } from "../Icon/data.js";

const BubbleCont = styled.div`
width: ${(props) => props.width};
height: ${(props) => props.height};
border-radius: 2rem;
background-color: #fffef6;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 4rem;
z-index: 1;
`;
const ButtonCont = styled.div`
display: flex;
justify-content: space-between;
`;

const InputDiv = styled.div``;


export default function Bubble({
  width = "60rem",
  type = "login",
  height = "42rem",
}) {

  return (
    <BubbleCont width={width} height={height}>
      <Icon src={icon_svgs.close} size="2rem"></Icon>
      <Header></Header>
      {type === "login" && (
        <InputDiv>
          <Input
            type="email"
            width="100%"
            placeholder="Enter your email"
          ></Input>
          <Input
            type="password"
            width="100%"
            placeholder="Enter your password"
          ></Input>
        </InputDiv>
      )}
      <Subheader></Subheader>
      <ButtonCont>
        <Button></Button>
        <Button></Button>
      </ButtonCont>
    </BubbleCont>
  );
}
