import Label from "./Label";

export default {
  title: "Text/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
