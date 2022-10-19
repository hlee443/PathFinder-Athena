import styled from "styled-components";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import { icon_svgs } from "../Icon/data";
import { btn_data } from "./data";
import { useState } from "react";

const TabBarCont = styled(Flexbox)`
border-bottom: 0.25rem solid #E1E1E1;
width: 100%;
justify-content: flex-start;
`

export default function TabBar() {

    const [selected, isSelected] = useState();

    return (
        <TabBarCont dir="row">
            <Button icon_name = "link" type = "TabBar" text="Import from URL" ></Button>
            <Button icon_name = "upload" type = "TabBar" text="Upload a File"></Button>
        </TabBarCont>
    );
}
