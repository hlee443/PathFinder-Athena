import Bubble from "./Bubble.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Bubble",
  component: Bubble,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Bubble {...args} />;

export const Login = Template.bind({});
Login.args = {
  type: "login",
};

export const SignUp = Template.bind({});
SignUp.args = {
  type: "signup",
};
