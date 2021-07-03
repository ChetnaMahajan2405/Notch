import { ComponentStory, ComponentMeta } from "@storybook/react";

import DropDown from "../DropDown";

export default {
  title: "Notch/DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const DropDownComponent = Template.bind({});
DropDownComponent.args = {
  intialState: "All Options",
  resetLabel: "Reset Options",
  header: "Select Option",
  options: ["option1", "option2", "option3"],
  onSelect: () => {},
  onReset: () => {},
};
