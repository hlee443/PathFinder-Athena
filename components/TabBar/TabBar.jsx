import styled from "styled-components";
import Button from "../Button/Button";
import { Flexbox } from "../../styles/globals";
import { btnData } from "./data";
import { useState } from "react";

const TabBarCont = styled(Flexbox)`
  border-bottom: 0.25rem solid #e1e1e1;
  justify-content: start;
  width: 100%;
`;

export default function TabBar({
  changePage = () => {},
  inputType = "url",
  btnArr = [],
}) {
  const [sel, setSel] = useState(0);

  return (
    <TabBarCont inputType={inputType} dir="row">
      {btnArr.map((o, i) => (
        <Button
          key={o.text}
          borderBottom={
            sel === i
              ? btnData.state.clicked.borderBottom
              : btnData.state.default.borderBottom
          }
          faIconName={o.icon}
          backgroundColor="transparent"
          borderRadius="0"
          type="IconButton"
          text={o.text}
          width={btnData.width}
          handleClick={() => {
            setSel(i), changePage();
          }}
        ></Button>
      ))}
    </TabBarCont>
  );
}
