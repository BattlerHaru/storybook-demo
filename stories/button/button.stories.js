import { createButton } from "./button";

export default {
  // tags: ["autodocs"],
  component: createButton,
  title: "Design System/Atoms/Button",
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "text",
      },
      description: "The label of button",
    },

    style: {
      name: "style",
      options: ["filled", "outline"],
      control: {
        type: "select",
      },
      description: "Define what style use filled or outline",
    },

    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
      type: "number",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "This component represents a button with customizable styles.",
      },
    },
  },
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.appendChild(story());
      decorator.style.margin = "24";
      return decorator;
    },
  ],
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});

Default.args = {
  label: "Button",
};
