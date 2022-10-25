import Icon from "./Icon";
import { colors } from "../../styles/globals";

export default {
  title: "Atoms/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "2rem",
  color: "black",
};

export const FileIcon = Template.bind({});
FileIcon.args = {
  size: "2x",
  color: "black",
};
