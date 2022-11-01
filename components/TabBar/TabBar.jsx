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
  buttonClick = () => {}
}) {
  const [sel, setSel] = useState(0);

  return (
    <TabBarCont inputType={inputType} dir="row">
      {btnArr.map((o, i) => (
        <Button
          key={o.folder_id || o.text}
          borderBottom={
            sel === i
              ? btnData.state.clicked.borderBottom
              : btnData.state.default.borderBottom
          }
          faIconName={o.icon}
          backgroundColor="transparent"
          borderRadius="0"
          type="IconButton"
          text={o.folder_name || o.text}
          width={btnData.width}
          handleClick={() => {
            setSel(i), changePage();
           
            console.log("FUCK")
            buttonClick(o.folder_id)
            
          }}
        ></Button>
      ))}
    </TabBarCont>
  );
}
