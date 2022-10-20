import Header from "./Header";
import { textData } from "../../styles/globals";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Header text",
  size: textData.h1.size,
  lineHeight: textData.lineHeight,
  letterSpacing: textData.letterSpacing,
};
