import Container from "./Container"

export default {
    title: "Container",
    component: Container,
}

const Template = args => <Container {...args} />

export const Primary = Template.bind({}) 
Primary.args = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    txt: "text"
}