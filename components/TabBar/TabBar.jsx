import styled from "styled-components";
import Button from "../Button/Button";
import { Flexbox } from "../../styles/globals";

const TabBarCont = styled(Flexbox)`
border-bottom: 0.25rem solid #E1E1E1;
width: 100%;
`

export default function TabBar() {
  return (
    <TabBarCont dir ="row">
      <Button></Button>
      <Button></Button>
    </TabBarCont>
  );
}
