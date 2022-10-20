import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { iconSvgs } from "../Icon/data.js";
import { Flexbox } from "../../styles/globals";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

const BtnCont = styled(Flexbox)`
justify-content: space-between;
width: 100%;
`;

const InputDiv = styled(Flexbox)`
width: 100%;
height: 100%;
`;

const CloseButton = styled.div`
display: flex;
align-self: end;
`;


export default function Bubble({
    width = "60rem",
    type = "login",
    height = "42rem",
    active = null,
    setActive = null
}) {
    
    const closeBubble = () => {
        setActive(!active)
    }

    return (
        <BubbleCont>
            <CloseButton>
                <Icon handleClick={closeBubble} faIconName={faClose} />
            </CloseButton>
            <Header text="Please Login"></Header>
            <Input width="100%"></Input>
            <Input width="100%"></Input>
            <SubHeader text="If you don’t have an account with us,  please Sign Up!"></SubHeader>
            <BtnCont dir="row">
                <Button text="Cancel" />
                <Button text="Log In" />
            </BtnCont>
        </BubbleCont>
    );
};