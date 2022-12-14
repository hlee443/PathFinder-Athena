// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <Button {...args} />;

// π Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "#96adfc",
  label: "Button",
  border: "none",
  borderRadius: "50px",
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "ππππ―" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "ππππ€" };
