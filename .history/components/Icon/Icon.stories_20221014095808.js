import Icon from "./Icon.jsx";

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
<<<<<<< HEAD:.history/components/Input/Input.stories_20221014141911.js
  title: "Text Input",
  component: TextInput,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
TextInput.args = {};
=======
  title: "Icon",
  component: Icon,
};

// Any other named exports will be treated as stories, which should be functions that return your component
export const Default = () => <Icon />;
>>>>>>> testbranch:.history/components/Icon/Icon.stories_20221014095808.js
