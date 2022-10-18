import Input from "./Input.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input",
  component: Input,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
