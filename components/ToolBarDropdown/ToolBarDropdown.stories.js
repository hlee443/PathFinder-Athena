import ToolBarDropdown from "./ToolBarDropdown";
import { FontDropdown } from "./ToolBarDropdown";
import { within, userEvent } from "@storybook/testing-library";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Option from "../Option/Option";

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
Typeface.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const backgroundColor = await canvas.getByText(/Background Color/i);
  await userEvent.click(backgroundColor);
  const typeface = await canvas.getAllByPlaceholderText(/#/i);
  await userEvent.click(typeface);
};
Typeface.args = {};

export const SaveToLibrary = Template.bind({});
SaveToLibrary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const addFolder = await canvas.getByText(/Assignments/i);
  await userEvent.click(addFolder);
};
SaveToLibrary.args = {};
