import Button from "../components/Button/Button.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["Primary", "Secondary"],
      control: { type: "radio" },
    },
  },
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: "#ff0", label: "Button" };

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args, label: "😄👍😍💯" };
