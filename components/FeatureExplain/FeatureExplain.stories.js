import FeaturePopUp from "./FeatureExplain";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/FeaturePopUp",
  component: FeaturePopUp,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <FeaturePopUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
