import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Subheader from "../Subheader/SubHeader";
import Button from "../Button/Button";
import { icon_svgs } from "../Icon/data.js";
import { Flexbox } from "../../styles/globals";

const BubbleCont = styled(Flexbox)`
max-width: ${(props) => props.width};
max-height: ${(props) => props.height};
border-radius: 2rem;
background-color: #fffef6;
padding: 4rem;
z-index: 1;
position: absolute;
top: 50%;
left: 20%;
right: 20%;
align-items: flex-start;
justify-content: space-around;
`;

const ButtonCont = styled(Flexbox)`
justify-content: space-between;
width: 100%;
`;

const InputDiv = styled(Flexbox)`
width: 100%;
height: 100%;
`;


export default function Bubble({
    width = "60rem",
    type = "login",
    height = "42rem",
}) {

    return (
        <BubbleCont width={width} height={height}>
            <Icon align="flex-end" changeIcon={icon_svgs.close} size="2rem" />
            <Header text="Please Login!"></Header>
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
            <Subheader text="If you don’t have an account with us,  please Sign Up!"></Subheader>
      <ButtonCont dir ="row">
              <Button text="Cancel" ></Button>
                <Button text="Sign Up"></Button>
            </ButtonCont>
        </BubbleCont>  
  );  
}
