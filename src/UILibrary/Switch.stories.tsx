import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Switch from "./Switch";

export default {
  title: "Custom/Switch",
  component: Switch,
} as Meta;

const Template: Story<React.ComponentProps<typeof Switch>> = (args) => (
  <Switch {...args} />
);

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {};

export const CheckedVariant = Template.bind({});
CheckedVariant.args = { checked: true, readOnly: true };
