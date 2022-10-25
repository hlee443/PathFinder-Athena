import Label from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "primary",
};

export const Transparent = Template.bind({});
Transparent.args = {
  backgroundColor: "transparent",
  text: "transparent",
};
