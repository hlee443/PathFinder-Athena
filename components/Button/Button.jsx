import styled from "styled-components";
import Icon from "../Icon/Icon";
import { colors, textData } from "../../styles/globals";
import { mediaQuery } from "../../MediaQuery/data";
import { btnData } from "./data";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: "900";
  border: none;
  width: ${(props) => props.width || btnData.size.med.width};
  height: ${(props) => props.height || btnData.size.med.height};
  max-width: 15rem;
  // max-height: 3.875rem;
  font-size: 1.25rem;
  white-space: nowrap;
  cursor: pointer;
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border-bottom: ${(props) => props.type};

  background-color: ${(props) => props.primary ? colors.buttonPrimaryBlue : colors.buttonSecondaryBlue};
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
  color: ${(props) => props.color || colors.textBlack};
  // padding: ${(props) => props.padding || "1rem"};

  box-shadow: ${(props) => props.primary ? btnData.variants.primary.boxShadow: btnData.variants.primary.boxShadow};

  @media ${mediaQuery.maxWidth.mobile} {
    width: ${btnData.size.small.width};
    height: ${btnData.size.small.height};
    font-size: ${btnData.size.small.fontSize};
  };

  @media ${mediaQuery.minWidth.tablet} {
    height: ${btnData.size.med.height};
    width: ${btnData.size.med.width};
    font-size: ${btnData.size.med.fontSize};
  };

  :hover {
    background-color: ${(props) => props.hover && btnData.variants.hover.backgroundColor};
    font-weight: bolder;
    box-shadow: ${(props) => props.hover && btnData.variants.hover.boxShadow};
  };

  :active {
    background-color: ${(props) => props.active && btnData.variants.active.backgroundColor};
    font-weight: bolder;
  };
`;

export default function Button({
  color = "",
  backgroundColor = "",
  text = "button text",
  borderBottom = "none",
  borderRadius = "3.125rem",
  width = "",
  height ="",
  handleClick = () => { },
  faIconName = null,
  // fontWeight = "normal",
  iconSize = "",
  iconColor = "",
  handleMouseEnter = () => { },
  handleMouseLeave = () => { },
  primary = true,
  hover = true,
  padding =""
}) {

  return (
    <StyledButton
      primary={primary}
      hover={hover}
      color={color}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      backgroundColor={backgroundColor}
      text="button text"
      width={width}
      height={height}
      borderBottom={borderBottom}
      borderRadius={borderRadius}
      // fontWeight={fontWeight}
      padding={padding}
    >
      {text}
      {faIconName !== null && (
        <Icon color={iconColor} size={iconSize} faIconName={faIconName} />
      )}
    </StyledButton>
  );
}
