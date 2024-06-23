import { createCard } from "./card";

export default {
  title: "Design System/Atoms/Card",
};

const Template = ({ title, ...args }) => {
  return createCard({ title, ...args });
};

export const Default = Template.bind({});

Default.args = {
  title: "Card",
  description: "Description",
};
