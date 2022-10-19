import styled from "styled-components";
import Icon from "../Icon/Icon";
import { icon_svgs } from "../Icon/data";
import { colors } from "../../styles/globals";
import { btn_data } from "../TabBar/data";

const ButtonCont = styled.button`
border: none;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: ${(props) => props.backgroundColor};
border-radius: ${(props) => props.borderRadius || "3.125rem"};
border-bottom: ${(props) => props.borderBottom};
width: ${(props) => props.width || "15rem"};
height: ${(props) => props.height};
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
  handleClick = () => {}
}) {

  // const handleClick = () => {
  //   console.log("hi!");
  // };

  return (
    <div onClick={handleClick}>
      {
        type === "TabBar" &&
        <ButtonCont
          borderBottom={borderBottom}
          backgroundColor="transparent"
          borderRadius="0"
        >
          {text}
          <Icon size = "2.563rem" changeIcon={icon_svgs[icon_name]} />
        </ButtonCont>
      }
    </div>

  );
}
