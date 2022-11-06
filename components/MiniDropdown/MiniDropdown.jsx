import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";
import { useState } from "react";
import { SortingDataArr, ProfileDataArr } from "./data";

const DropdownCont = styled(Flexbox)`
  border-radius: 3rem;
  background-color: ${colors.backgroundCream};
  border: 0.15rem solid black;
  width: 15rem;
  max-width: 18rem;
  //   padding: 1rem;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 5rem;
  right: 1rem;
`;

export default function MiniDropdown({ left = "", top = "", type = "" }) {
  const [sel, setSel] = useState(0);

  return (
    <DropdownCont left={left} top={top}>
      {type === "profile" &&
        ProfileDataArr.map((o, i) => (
          <Option
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
}
