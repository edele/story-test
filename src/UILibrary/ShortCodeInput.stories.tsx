import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ShortCodeInput from "./ShortCodeInput";

export default {
  title: "Custom/ShortCodeInput",
  component: ShortCodeInput,
} as Meta;

const Template: Story<React.ComponentProps<typeof ShortCodeInput>> = (args) => (
  <ShortCodeInput {...args} />
);

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {};

export const DisabledVariant = Template.bind({});
DisabledVariant.args = { disabled: true };
