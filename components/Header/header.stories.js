import Header from "./header"
export default {
    title: "Header",
    component: Header,
}

const Template = args => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: 'example',
    size: 'big',
}