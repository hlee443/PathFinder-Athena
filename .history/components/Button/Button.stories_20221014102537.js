<<<<<<< HEAD:.history/components/Button/Button.stories_20221014102537.js
import Button from "./Button.jsx";
=======
import Bubble from "./Bubble.jsx";
>>>>>>> 070a69a2366552b5c95b0d8126fa4981cf6d219b:components/Bubble/Bubble.stories.js

// The default export metadata controls how Storybook lists your stories and provides information used by addons.
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
<<<<<<< HEAD:.history/components/Button/Button.stories_20221014102537.js
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

// Any other named exports will be treated as stories, which should be functions that return your component
export const Default = () => <Button />;
=======
  title: "Bubble",
  component: Bubble,
};

// Any other named exports will be treated as stories, which should be functions that return your component
const Template = (args) => <Bubble {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
>>>>>>> 070a69a2366552b5c95b0d8126fa4981cf6d219b:components/Bubble/Bubble.stories.js
