import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../Grid";
import data from "./mockdata.json";

export default {
  title: "Notch/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const GridComponent = Template.bind({});
GridComponent.args = {
  data,
};