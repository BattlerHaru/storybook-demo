import { createButton } from "./button";
import { withActions } from "@storybook/addon-actions/decorator";

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

    onClick: {
      description: "Event",
      action: "clicked",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "This component represents a button with customizable styles.",
      },
    },
    actions: {
      handles: ["mouseover"],
    },
    backgrounds: {
      default: "Black Friday",
      values: [
        {
          name: "Black Friday",
          value: "#000000",
        },
        {
          name: "default",
          value: "#FFFFFF",
        },
      ],
    },
  },
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.appendChild(story());
      decorator.style.margin = "24";
      return decorator;
    },
    withActions,
  ],
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});

Default.args = {
  label: "Button",
};
