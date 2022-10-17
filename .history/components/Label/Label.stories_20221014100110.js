<<<<<<< HEAD:.history/components/Icon/Icon.stories_20221014130139.js
import Icon from "./Icon.jsx";
=======
import Label from "./Label.jsx";
>>>>>>> ad6e1c58a55e5cfa42ba9040e890c7353deecf38:.history/components/Label/Label.stories_20221014100110.js

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
<<<<<<< HEAD:.history/components/Icon/Icon.stories_20221014130139.js
  title: "Icon",
  component: Icon,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
=======
  title: "Label",
  component: Label,
};

// Any other named exports will be treated as stories, which should be functions that return your component
export const Default = () => <Label />;
>>>>>>> ad6e1c58a55e5cfa42ba9040e890c7353deecf38:.history/components/Label/Label.stories_20221014100110.js
