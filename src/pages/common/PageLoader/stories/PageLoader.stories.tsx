import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageLoader from "../pageLoader";

export default {
  title: "Notch/PageLoader",
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

export const PageLoaderComponent: ComponentStory<typeof PageLoader> = () => <PageLoader />;

