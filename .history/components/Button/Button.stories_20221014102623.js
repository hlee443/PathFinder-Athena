<<<<<<< HEAD:.history/components/Button/Button.stories_20221014102623.js
import Button from "./Button.jsx";
=======
import Icon from "./Icon";
>>>>>>> testbranch:components/Icon/Icon.stories.js

export default {
<<<<<<< HEAD:.history/components/Button/Button.stories_20221014102623.js
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["bg", "no-bg"],
      control: { type: "radio" },
    },
  },
};

// Any other named exports will be treated as stories, which should be functions that return your component
export const Default = () => <Button />;
=======
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
>>>>>>> testbranch:components/Icon/Icon.stories.js
