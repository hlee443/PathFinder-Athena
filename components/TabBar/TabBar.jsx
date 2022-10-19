import styled from "styled-components";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import { icon_svgs } from "../Icon/data";
import { btn_data } from "./data";
import { useState } from "react";

const TabBarCont = styled(Flexbox)`
border-bottom: 0.25rem solid #E1E1E1;
justify-content: start;
width: 100%;
`

export default function TabBar() {

    const [selected, isSelected] = useState();

    return (
        <TabBarCont dir="row">
            <Button
                borderBottom={btn_data.state.clicked.borderBottom}
                backgroundColor="transparent"
                borderRadius="0"
                type="IconButton"
                icon_name="link"
                text="Import from URL"
                width={btn_data.width}
            />
            <Button
                borderBottom={btn_data.state.default.borderBottom}
                backgroundColor="transparent"
                type="IconButton"
                icon_name="upload"
                text="Upload a File"
                width={btn_data.width}
            />
        </TabBarCont>
    );
}
