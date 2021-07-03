import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../header";

export default {
  title: "Notch/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
  children: <div>Example</div>,
};
