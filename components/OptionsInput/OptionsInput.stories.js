import OptionsInput from "./OptionsInput";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Options Input",
  component: OptionsInput,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <OptionsInput {...args} />;
s;
export const Primary = Template.bind({});
Primary.args = {};
