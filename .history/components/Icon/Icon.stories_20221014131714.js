import Icon from "./Icon.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Icon",
  component: Icon,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://placekitten.com/25/25",
  backgroundColor: "black",
  height: "50px",
};
