import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Option from "../Option/Option";

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
            padding="1.2rem 1.5rem"
            handleOption={() => {
              o.text === "Rename" && onEdit(),
                o.text === "Delete" && onDelete()
            }}
            key={i}
            bgColor={o.bgColor}
            text={o.text}
            faIconNameRight={o.faIconNameRight}
            right={right}
            hoverColor={colors.secondaryBlue}
          />
        ))
      }
    </DropdownCont>
  );
};