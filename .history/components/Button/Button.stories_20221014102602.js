import Button from "./Button.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["bg", "nobg"],
      control: { type: "radio" },
    },
  },
};

// Any other named exports will be treated as stories, which should be functions that return your component
<<<<<<< HEAD:.history/components/Button/Button.stories_20221014102602.js
export const Default = () => <Button />;
=======
const Template = (args) => <Label {...args} />;

export const Keyword = Template.bind({});
Keyword.args = {
  text: "Keyword",
  backgroundColor: "#FFFEF6",
};

export const Hover = Template.bind({});
Hover.args = {
  text: "Hover",
  backgroundColor: "#FFFEF6",
};
>>>>>>> testbranch:components/Label/Label.stories.js
