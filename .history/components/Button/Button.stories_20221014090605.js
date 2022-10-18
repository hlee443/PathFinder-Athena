<<<<<<< HEAD:.history/components/Button/Button.stories_20221014090605.js
import Button from "./Button.jsx"
=======
import Input from "./Input.jsx";
>>>>>>> testbranch:components/Input/Input.stories.js

// The default export metadata controls how Storybook lists your stories and provides information used by addons. 
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button
}

// Any other named exports will be treated as stories, which should be functions that return your component
<<<<<<< HEAD:.history/components/Button/Button.stories_20221014090605.js
export const Default = () => <Button />
=======
const Template = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
>>>>>>> testbranch:components/Input/Input.stories.js
