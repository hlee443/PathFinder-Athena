import SubHeader from "./subheader";

export default {
    title: "SubHeader",
    component: SubHeader,
}

const Template = args => <SubHeader {...args} />

export const Subheader = Template.bind({})
Subheader.args = {
    text: 'example',
    size: 'big',
}