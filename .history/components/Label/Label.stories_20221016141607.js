import Label from "./Label.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Label",
  component: Label,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Label {...args} />;

export const Keyword = Template.bind({});
Keyword.args = {
  text: "Keyword",
  backgroundColor: "black",
};

export const Hover = Template.bind({});
Hover.args = {
  text: "Hover",
  backgroundColor: "#FFFEF6",
};
