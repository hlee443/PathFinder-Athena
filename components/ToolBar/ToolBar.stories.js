import Icon from "../Icon/Icon";
import ToolBar from "./ToolBar";
import { within, userEvent } from "@storybook/testing-library";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/ToolBar",
  component: ToolBar,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <ToolBar {...args} />;

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const library = await canvas.getByText(/Save to Library/i);
  await userEvent.click(library);
  const type = await canvas.getByText(/Typeface/i);
  await userEvent.click(type);
};
Default.args = {};
