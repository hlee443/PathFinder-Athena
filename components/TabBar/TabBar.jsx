import styled from "styled-components";
import Button from "../Button/Button";
import { Flexbox } from "../../styles/globals";
import { btnData } from "./data";
import { useState } from "react";
import { mediaQuery } from "../../MediaQuery/data";

const TabBarCont = styled(Flexbox)`
  border-bottom: 0.25rem solid #e1e1e1;
  justify-content: start;
  width: 100%;
  height: fit-content;
  gap: 0.5rem;
  overflow-x: inherit;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${mediaQuery.maxWidth.tablet} {
    overflow-x: scroll;
  }
`;

export default function TabBar({
  btnArr = [],
  buttonClick = () => { },
  changePage = () => { },
}) {
  const [sel, setSel] = useState(0);
  const [isHover, setIsHover] = useState();

  const handleHover = () => {
    if (isHover) {
      setIsHover(true)
    } else if (!isHover) {
      setIsHover(false)
    }
  }

  return (
    <TabBarCont dir="row">
      {btnArr.map((o, i) => (
        <Button
          width={btnData.width}
          height={btnData.height}
          key={o.folder_id || o.text}
          color={
            sel === i ? btnData.state.default.color : btnData.state.inactive.color
          }
          borderBottom={
            sel === i && btnData.state.clicked.borderBottom
          }
          faIconName={o.icon}
          backgroundColor={btnData.backgroundColor}
          iconSize="sm"
          iconColor={btnData.iconColor}
          borderRadius={btnData.borderRadius}
          text={o.folder_name || o.text}
          fontweight={
            sel === i ? btnData.state.clicked.fontWeight : btnData.state.inactive.fontWeight
          }
          handleMouseEnter={handleHover}
          handleMouseLeave={handleHover}
          handleClick={() => {
            setSel(i), changePage()
            buttonClick(o.folder_id);
          }}
        ></Button>
      ))}
    </TabBarCont>
  );
}
