import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Text",
  width: "15rem",
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  type: "dropdown",
  placeholder: "Dropdown",
  width: "15rem",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "Email",
  width: "15rem",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Password",
  width: "15rem",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "Number",
  width: "15rem",
};
