import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";
import { useState } from "react";

const DropdownCont = styled(Flexbox)`
  background-color: ${colors.backgroundYellow};
  filter: drop-shadow(3px 5px 10px rgba(0, 0, 0, 0.2));
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  right: 0;
  width: fit-content;
  height: fit-content;
`;

export default function MiniDropdown({
  left = "",
  top = "",
  arr = [],
  handleOption = () => {}
}) {
  const [sel, setSel] = useState(0);

  return (
    <DropdownCont left={left} top={top}>
      {arr.map((o, i) => (
        <Option
            handleOption={handleOption}
            key={i}
            bgColor={o.bgColor}
            text={o.text}
            faIconNameRight={o.faIconNameRight}
            // handleOption={sel === i ? onClose : onExpand}
            // onChange={onChange}
            // value={libValueArr[i]}
        ></Option>
        ))}
    </DropdownCont>
  );
};