import Header from "./Header";
import { text_data } from "../../styles/globals";

export default {
    title: "Header",
    component: Header,
}

const Template = args => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: 'Header text',
    size: text_data.h1.size,
    line_height: text_data.line_height,
    letter_spacing: text_data.letter_spacing
}