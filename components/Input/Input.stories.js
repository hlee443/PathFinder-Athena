import Input from "./Input";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input",
  component: Input,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  width: "15rem",
};

export const OptionsInput = Template.bind({});
OptionsInput.args = {
  type: "dropdown",
  width: "15rem",
};
