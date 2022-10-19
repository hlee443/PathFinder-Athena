import styled from "styled-components";
import Icon from "../Icon/Icon";
import { icon_svgs } from "../Icon/data";
import { colors } from "../../styles/globals";
import { btn_data } from "./data";


const ButtonCont = styled.div`
position: ${(props) => props.position};

`

const StyledButton = styled.button`
border: none;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: ${(props) => props.backgroundColor};
border-radius: ${(props) => props.borderRadius || "3.125rem"};
border-bottom: ${(props) => props.borderBottom};
width: ${(props) => props.width || "15rem"};
height: ${(props) => props.height || "3.875rem"};
font-size: ${(props) => props.fontSize};
border-color: ${(props) => props.borderColor};
`

export default function Button({
  backgroundColor = "#96ADFC",
  text = "button text",
  height = "100%",
  fontSize = "1rem",
  textColor = "black",
  borderBottom = "none",
  borderRadius = "3.125rem",
  borderColor = "none",
  type = "btn type",
  icon_name = "link",
  handleClick = () => { },
  position = "relative"
}) {

  // const handleClick = () => {
  //   console.log("hi!");
  // };

  return (
    <ButtonCont onClick={handleClick}>
      {
        type === "default" &&
        <StyledButton
        >
          {text}
        </StyledButton>
      }

      {
        type === "TabBar" &&
        <StyledButton
          borderBottom={borderBottom}
          backgroundColor="transparent"
            borderRadius="0"
            position="absolute"
        >
          {text}
          <Icon size="2.563rem" changeIcon={icon_svgs[icon_name]} />
        </StyledButton>
      }

      {
        type === "IconButton" &&
        <StyledButton backgroundColor ={btn_data.state.active.backgroundColor}
        >
          {text}
          <Icon size="2.563rem" changeIcon={icon_svgs[icon_name]} />
        </StyledButton>
      }
    </ButtonCont>

  );
}
