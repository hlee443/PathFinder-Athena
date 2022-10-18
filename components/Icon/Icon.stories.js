import Icon from "./Icon";

export default {
    title: "Icon",
    component: Icon,
  };

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "2rem",
  src: "https://placekitten.com/200/100",
  backgroundColor: "transparent",
};

export const Hover = Template.bind({});
Hover.args = {
  size: "2rem",
  src: "https://placekitten.com/200/100",
  backgroundColor: "black",
};

export const Selected = Template.bind({});
Selected.args = {
    size: "2rem",
    src: "https://placekitten.com/200/100",
    backgroundColor: "black",
}