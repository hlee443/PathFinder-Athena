import ToolBarDropdown from "./ToolBarDropdown";
import { FontDropdown } from "./ToolBarDropdown";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/ToolBarDropdown",
  component: ToolBarDropdown,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <ToolBarDropdown {...args} />;
const Template2 = (args) => <FontDropdown {...args} />;

export const Typeface = Template2.bind({});
Typeface.args = {};

export const SaveToLibrary = Template.bind({});
SaveToLibrary.args = {};
