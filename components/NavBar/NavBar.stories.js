import Button from "../Button/Button.jsx";
import NavBar from "./NavBar.jsx";
import { within, userEvent } from "@storybook/testing-library";
import Icon from "../Icon/Icon.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/NavBar",
  component: NavBar,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <NavBar {...args} />;

export const Guest = Template.bind({});
Guest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole(Button, { name: /Log In/i });
  await userEvent.click(loginButton);
  const signUpButton = await canvas.getByRole(Button, { name: /Sign Up/i });
  await userEvent.click(signUpButton);
};
Guest.args = {
  type: "guest",
};

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const home = await canvas.getByRole(Icon, { name: /fa-home/i });
  await userEvent.click(home);
};
LoggedIn.args = {
  type: "loggedIn",
};
