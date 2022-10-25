import NavBar from "./NavBar.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/NavBar",
  component: NavBar,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <NavBar {...args} />;

export const Guest = Template.bind({});
Guest.args = {};

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
