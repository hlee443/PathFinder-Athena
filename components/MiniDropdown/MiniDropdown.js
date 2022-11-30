import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";
import { useState } from "react";
import { faBedPulse, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

const DropdownCont = styled(Flexbox)`
  background-color: ${colors.backgroundYellow};
  filter: drop-shadow(3px 5px 10px rgba(0, 0, 0, 0.2));
  border-radius: 20px;
  overflow: hidden;
  z-index: 999;
  position: ${(props) => props.position || ''};
  right: ${(props) => props.right};
  width: fit-content;
  height: fit-content;
`;

export default function MiniDropdown({
  // left = "",
  // top = "",
  position = "",
  arr = [],
  handleOption = () => { },
  onEdit = () => { },
  onDelete = () => { },
  onMoveFolder = () => { },
  handleMouseLeave = () => { },
  right = ""
}) {

  return (
    <DropdownCont
      onMouseLeave={handleMouseLeave}
      position={position}>
      {
        arr.map((o, i) => (
          <Option
            handleOption={() => {
              o.text === "Rename" && onEdit(),
                o.text === "Delete" && onDelete(),
                o.text === "Move" && onMoveFolder()
            }}
            key={i}
            bgColor={o.bgColor}
            text={o.text}
            faIconNameRight={o.faIconNameRight}
            right={right}
          />
        ))
      }
    </DropdownCont>
  );
};