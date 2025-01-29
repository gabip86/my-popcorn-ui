import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
  layout: "centered",
  tags: ["autodocs"],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: "Button",
  theme: "primary",
  testId: "btn-primary",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: "Button",
  theme: "secondary",
  testId: "btn-secondary",
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  label: "Button",
  theme: "primary",
  testId: "btn-disabled",
  disabled: true,
};
