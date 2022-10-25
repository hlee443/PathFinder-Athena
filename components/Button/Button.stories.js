import Button from "./Button";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Button {...args} />;

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {};

export const LightLarge = Template.bind({});
LightLarge.args = {};

export const TransparentLarge = Template.bind({});
TransparentLarge.args = {};

export const DefaultMed = Template.bind({});
DefaultMed.args = {};

export const LightMed = Template.bind({});
LightMed.args = {};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {};

export const LightSmall = Template.bind({});
LightSmall.args = {};

export const CreamSmall = Template.bind({});
CreamSmall.args = {};
