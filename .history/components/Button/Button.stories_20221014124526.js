// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  backgroundColor: "#96ADFC",
  border: "none",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  backgroundColor: "#C3D1FF",
  border: "none",
};
