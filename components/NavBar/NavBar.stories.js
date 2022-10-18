import NavBar from "./NavBar.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "NavBar",
  component: NavBar,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {

};
