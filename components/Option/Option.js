import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Flexbox, BodyText } from "../../styles/globals";
import Input from "../Input/Input";

const OptionCont = styled(Flexbox)`
  justify-content: flex-start;
  background-color: ${(props) => props.bgColor || "transparent"};
  width: 100%;
  cursor: pointer;
  gap: 1.875rem;
`;

const OptionText = styled.p`
  width: 16.375rem;
`

export default function Option({
  bgColor = "transparent",
  text = "text",
  unit = null,
  faIconName = faIconName,
  inputType = null,
  placeholder = "placeholder",
  faIconNameRight = null,
  handleOption = () => { },
  onClose = () => { },
  onChange = () => { },
  value = "",
  src = null,
  inputWidth ="4rem"
}) {
  return <OptionCont
    onClick={handleOption}
    dir="row"
    bgColor={bgColor}
  >
    {src !== null ? <img src={src} /> : <Icon
      faIconName={faIconName}
    />}

    <OptionText>{text}</OptionText>
    {
      inputType !== null && <Input
        type={inputType}
        placeholder={placeholder} onChange={onChange}
        value={value}
        height="2.875rem"
        width={inputWidth}
      />
    }
    {
      unit !== null && <BodyText>{unit}</BodyText>
    }
    {
      faIconNameRight !== null && <Icon
        faIconName={faIconNameRight}
        handleClick={onClose} />
    }
  </OptionCont>
}
