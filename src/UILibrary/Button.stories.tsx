import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button from "./Button";

export default {
  title: "Custom/Button",
  component: Button,
} as Meta;

const Template: Story<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>Lick me</Button>
);

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {};

export const DisabledVariant = Template.bind({});
DisabledVariant.args = { isDisabled: true };

export const BlackSmallVariant = Template.bind({});
BlackSmallVariant.args = { theme: "black", size: "small" };
