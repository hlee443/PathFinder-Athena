import SubHeader from "./SubHeader";
import { textData } from "../../styles/globals";

export default {
  title: "Atoms/SubHeader",
  component: SubHeader,
};

const Template = (args) => <SubHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Subheader text",
  color: "black",
};
