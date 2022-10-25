import Button from "./Button";
import { colors } from "../../styles/globals";
import { btnData } from "./data";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Button {...args} />;

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  height: btnData.size.large.height,
  width: btnData.size.large.width,
  text: "large",
};

export const GrayLarge = Template.bind({});
GrayLarge.args = {
  backgroundColor: colors.buttonGray,
  height: btnData.size.large.height,
  width: btnData.size.large.width,
  text: "large",
};

export const TransparentLarge = Template.bind({});
TransparentLarge.args = {
  backgroundColor: "transparent",
  height: btnData.size.large.height,
  width: btnData.size.large.width,
  text: "large",
};

export const DefaultMed = Template.bind({});
DefaultMed.args = {
  height: btnData.size.med.height,
  width: btnData.size.med.width,
  text: "medium",
};

export const GrayMed = Template.bind({});
GrayMed.args = {
  backgroundColor: colors.buttonGray,
  height: btnData.size.med.height,
  width: btnData.size.med.width,
  text: "medium",
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  height: btnData.size.small.height,
  width: btnData.size.small.width,
  text: "small",
};

export const LightSmall = Template.bind({});
LightSmall.args = {
  backgroundColor: colors.backgroundCream,
  height: btnData.size.small.height,
  width: btnData.size.small.width,
  text: "small",
};

export const IconButton = Template.bind({});
IconButton.args = {
  type: "IconButton",
  text: "icon button",
};
