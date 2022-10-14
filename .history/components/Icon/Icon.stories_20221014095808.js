import Icon from "./Icon.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Icon",
  component: Icon,
};

// Any other named exports will be treated as stories, which should be functions that return your component
export const Default = () => <Icon />;
