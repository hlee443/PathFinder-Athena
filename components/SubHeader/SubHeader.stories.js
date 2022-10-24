import SubHeader from "./SubHeader";
import { textData } from "../../styles/globals";

export default {
  title: "Text/SubHeader",
  component: SubHeader,
};

const Template = (args) => <SubHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Subheader text",
  size: textData.h2.size,
  lineHeight: textData.lineHeight,
  letterSpacing: textData.letterSpacing,
};
