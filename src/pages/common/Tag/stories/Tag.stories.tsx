import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "../tag";

export default {
  title: "Notch/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const PaidTag = Template.bind({});
PaidTag.args = {
  text: "PAID",
  className: "oval-tag-paid",
};

export const DeliveredTag = Template.bind({});
DeliveredTag.args = {
  text: "DELIVERED",
  className: "oval-tag-delivered",
};

export const InShoppingCartTag = Template.bind({});
InShoppingCartTag.args = {
  text: "In shopping Cart",
  className: "oval-tag-other",
};

export const FirstTag = Template.bind({});
FirstTag.args = {
  text: "1st",
  className: "oval-tag-first",
};

export const MarketTag = Template.bind({});
MarketTag.args = {
  text: "MARKET",
  className: "square-tag",
};

