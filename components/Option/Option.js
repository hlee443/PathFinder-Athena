import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox } from "../../styles/globals";
import Input from "../Input/Input";
import { mediaQuery } from "../../MediaQuery/data";

const OptionCont = styled(Flexbox)`
  justify-content: flex-start;
  background-color: ${(props) => props.bgColor || "transparent"};
  width: 100%;
  cursor: pointer;
  font-size: 1.125rem;
  gap: 1rem;
  min-width: 100%;
  align-items: center;
  padding: ${(props) => props.padding};

  :hover {
    font-weight: bold;
    background-color: ${(props) => props.hoverColor};
  }

  @media ${mediaQuery.maxWidth.mobile} {
    align-items: center;
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  aspect-ratio: 1;
  background-color: ${(props) => props.imgColor};
  border-radius: 50rem;

  @media ${mediaQuery.maxWidth.mobile} {
    width: 2rem;
    height: 2rem;
  }
`

const OptionText = styled(Flexbox)`
  width: 100%;
  justify-content: space-between;
  gap: 1rem;

  @media ${mediaQuery.maxWidth.mobile} {
    align-items: start;
    gap: 0.5rem;
    flex-direction: column;
  }
`

const InputCont = styled(Flexbox)`
  justify-content: space-between;
  gap: 1rem;

  @media ${mediaQuery.minWidth.mobile} {
    gap: 0.5rem;
  }
`

export default function Option({
  bgColor = "transparent",
  text = "text",
  unit = null,
  faIconName = null,
  inputType = null,
  placeholder = "placeholder",
  faIconNameRight = null,
  handleOption = () => { },
  onClose = () => { },
  onChange = () => { },
  value = "",
  src = null,
  inputWidth = "100%",
  hoverColor = "",
  height = "",
  imgColor = "transparent",
  padding = "",
}) {
  return (
    <OptionCont
      padding={padding}
      hoverColor={hoverColor}
      onClick={handleOption}
      dir="row"
      bgColor={bgColor}
    >
      {faIconName !== null && <Icon faIconName={faIconName} />}
      {src !== null && <Img
        imgColor={imgColor}
        src={src} />
      }
      <OptionText dir="row">
        <p>{text}</p>
        <InputCont dir="row">
          {inputType !== null && (
            <Input
              type={inputType}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              height={height}
              width={inputWidth}
            />
          )}
          {unit !== null && <p>{unit}</p>}
        </InputCont>
        {faIconNameRight !== null && (
          <Icon faIconName={faIconNameRight} handleClick={onClose} />
        )}
      </OptionText>
    </OptionCont>
  );
};
