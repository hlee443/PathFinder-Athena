import Header from "./Header";
import { textData } from "../../styles/globals";

export default {
  title: "Atoms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Header text",
};
