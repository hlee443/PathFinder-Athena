import { Wrapper } from "./wrapper_style"

export default {
    title: "Wrapper",
    component: Wrapper,
}

const Template = args => <Wrapper {...args} />
export const Primary = Template.bind({}) 
Primary.args = {
      color:'none',
      border:'5px solid beige',
      borderRadius:'50px',
      width:'30rem',
}