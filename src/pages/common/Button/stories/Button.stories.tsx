import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../Button";

export default {
  title: "Notch/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DarkButton = Template.bind({});
DarkButton.args = {
  label: "X Reset Filters",
  className: "dark",
};