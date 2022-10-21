import File from "./File";

export default {
  title: "File",
  component: File,
};

const Template = (args) => <File {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
