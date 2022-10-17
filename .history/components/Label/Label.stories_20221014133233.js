import Label from "./Label.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Label",
  component: Label,
};

// Any other named exports will be treated as stories, which should be functions that return your component
<<<<<<< HEAD:components/Icon/Icon.stories.js
const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "2rem",
  src: "https://placekitten.com/200/100",
  backgroundColor: "transparent",
};

export const Hover = Template.bind({});
Hover.args = {
  size: "2rem",
  src: "https://placekitten.com/200/100",
  backgroundColor: "black",
};

export const Selected = Template.bind({});
Selected.args = {
  size: "2rem",
  src: "https://placekitten.com/200/100",
  backgroundColor: "black",
};
=======
const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
>>>>>>> ad6e1c58a55e5cfa42ba9040e890c7353deecf38:.history/components/Label/Label.stories_20221014133233.js
