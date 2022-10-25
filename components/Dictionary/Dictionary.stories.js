import Dictionary from "./Dictionary";
import { colors } from "../../styles/globals";

export default {
  title: "Atoms/Dictionary",
  component: Dictionary,
};

const Template = (args) => <Dictionary {...args} />;

export const Default = Template.bind({});
Default.args = {
  word:"word",
  wordDefinition:"word definition"
};