import TabBar from "./TabBar";
import Button from "../Button/Button";
import { within, userEvent } from "@storybook/testing-library";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TabBar",
  component: TabBar,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <TabBar {...args} />;

export const Primary = Template.bind({});
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const upload = await canvas.getByRole(Button, { name: /Upload a File/i });
  await userEvent.click(upload);
  const url = await canvas.getByRole(Button, { name: /Import from URL/i });
  await userEvent.click(url);
};
Primary.args = {};
