import File from "./File";

export default {
  title: "Clickables/File",
  component: File,
};

const Template = (args) => <File {...args} />;

export const Default = Template.bind({});
Default.args = {};
