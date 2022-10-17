import SubHeader from "./SubHeader";
import { text_data } from "../../styles/globals";

export default {
    title: "SubHeader",
    component: SubHeader,
}

const Template = args => <SubHeader {...args} />

export const Subheader = Template.bind({})
Subheader.args = {
    text: 'Subheader text',
    size: text_data.h2.size,
    line_height: text_data.line_height,
    letter_spacing: text_data.letter_spacing
}