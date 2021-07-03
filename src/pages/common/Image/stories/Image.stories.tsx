import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "../image";

export default {
  title: "Notch/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageComponent = Template.bind({});
ImageComponent.args = {
    className: "header",
    src: "https://www.solidbackgrounds.com/images/950x350/950x350-red-solid-color-background.jpg",
    alt: "header",
};
